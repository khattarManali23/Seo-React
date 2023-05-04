/* eslint-disable react/no-unescaped-entities */
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { RHFTextField } from "../hook-form/RHFTextField";
import { login, userDetails } from "../../redux /slices/userSlice";
import api from "../../services/api";
import {
  useCreateCheckUserType,
  useCreateOTPUser,
} from "../../services/loginRegisterServices";
import { allowOnlyNumbers } from "../../utils/utils-fun";
import * as Yup from "yup";
import { AppButton, AppModal } from "../basics";
import FormProvider from "../hook-form";
import OTPValidation from "./OTPValidation";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginForm = () => {
  const { data: session } = useSession();
  return (
    <section className="h-fit pt-0 sm:pt-20">
      <div className=" mx-auto h-full w-full rounded-2xl p-5 text-gray-800 shadow-none sm:w-10/12 sm:shadow-2xl md:w-11/12 lg:w-10/12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
          <div className="hidden md:block">
            <LoginImageCard />
          </div>
          <div className="p-2 lg:py-5 lg:px-20">
            <LoginFormCard />
          </div>
        </div>
        {session && session.user ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </section>
  );
};

export default LoginForm;

export const LoginImageCard = () => {
  return (
    <div className="flex h-full items-center">
      <Image
        width={400}
        height={400}
        src="https://republicanos10.org.br/wp-content/uploads/2020/10/propostas-campanha-republicanos-descomplicando-a-politica-29-10-2020-compressor.jpg"
        className="w-full object-contain"
        alt="Sample image"
      />
    </div>
  );
};
export const LoginFormCard = () => {
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [contactNo, setContactNo] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const { userTypeMutation, isLoading } = useCreateCheckUserType();
  const { createOtp, isLoading: otpLoading } = useCreateOTPUser();
  const LoginFormSchema = Yup.object().shape({
    username: Yup.string().required("UserName is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = useMemo(() => ({
    username: "",
    password: "",
  }));
  //save in redux persist

  //forms
  const methods = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    try {
      const payload = {
        username: data?.username,
        password: data?.password,
      };
      userTypeMutation(payload, {
        onSuccess: (data) => {
          setUserDataInSlice(data?.data);
          reset();
          if (pathname?.includes("/auth/login")) {
            push("/");
          }
        },
      });
    } catch (error) {}
  };
  const onOTPSend = () => {
    try {
      const payload = {
        contact_no: contactNo,
      };

      createOtp(payload, {
        onSuccess: (data) => {
          setIsOtpSent(true),
            localStorage.setItem(
              "userOtpData",
              JSON.stringify(data?.data?.result)
            );
        },
      });
    } catch (error) {}
  };
  const handleOnEnterSubmit = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.which === 13) {
      e.preventDefault();
      contactNo?.length === 10
        ? onOTPSend()
        : () => {
            document.getElementById("contact_no").focus();
          };
    }
  };

  // const responseGoogle = (response) => {}

  async function setUserDataInSlice(data) {
    try {
      const loginDetails = {
        userAccessToken: data?.accessToken,
        userType: data?.user?.type?.toLowerCase(),
      };
      dispatch(login(loginDetails));
      if (data?.user?.type?.toLowerCase() === "b2b") {
        const response = await api.get(`/retailer/one/${data?.user?.user_id}`);
        dispatch(userDetails(response?.data?.users));
      } else {
        const response = await api.get(`/customer/one/${data?.user?.user_id}`);
        dispatch(userDetails(response?.data?.users));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="flex w-full justify-center">
        <Image
          width={80}
          height={80}
          src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000"
          alt="Sample image"
        />
      </div>
      <div className="text-center">
        <p className="mt-2 mb-5 pt-2 text-sm font-bold capitalize sm:text-2xl">
          welcome
        </p>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Stack spacing={3}>
            <RHFTextField name="username" label="Username" />
            <RHFTextField name="password" type="password" label="Password" />
          </Stack>
        </div>

        <AppButton
          type="submit"
          title="Login"
          size="large"
          variant="outlined"
          fullWidth
          loading={isLoading || isSubmitting}
          loadingIndicator="Loading..."
        />
        {/* <AppGoogleLogin /> */}
      </FormProvider>

      <AppButton
        onClick={() => setShowLoginModal(true)}
        type="button"
        title={"Continue with Phone"}
        fullWidth
        size="large"
        variant="contained"
        className="mt-5"
      />

      <div className="text-center lg:text-left">
        <p className="mt-2 mb-0 pt-2 text-sm font-semibold">
          Don't have an account?
          <Link href={"/auth/registration"} legacyBehavior>
            <span className="cursor-pointer text-theme-primary-main transition duration-200 ease-in-out">
              &nbsp; Register
            </span>
          </Link>
        </p>
      </div>
      <AppModal
        open={showLoginModal}
        handleClose={() => {
          setShowLoginModal(false);
          setIsOtpSent(false);
        }}
        title={"Login"}
        maxWidth={"md"}
      >
        <div className="h-full w-80 md:w-96 p-5">
          {isOtpSent ? (
            <OTPValidation
              setUserDataInSlice={setUserDataInSlice}
              isOtpSent={isOtpSent}
              createOtp={createOtp}
              otpLoading={otpLoading}
              setShowLoginModal={setShowLoginModal}
            />
          ) : (
            <div>
              <div className="mb-6">
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "80px",
                      "&.Mui-focused fieldset legend": {},
                    },
                  }}
                  label="Enter Phone Number"
                  value={contactNo}
                  id="contact_no"
                  fullWidth
                  onChange={(e) => {
                    setContactNo(allowOnlyNumbers(e));
                  }}
                  onKeyDown={(e) => handleOnEnterSubmit(e)}
                  values={contactNo}
                />
              </div>
              <AppButton
                type="button"
                title="Send Code"
                variant="contained"
                loading={isLoading || isSubmitting}
                loadingIndicator="Loading..."
                size="large"
                onClick={() => onOTPSend()}
                fullWidth
              />
            </div>
          )}
        </div>
      </AppModal>
    </div>
  );
};
