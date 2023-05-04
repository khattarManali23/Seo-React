import { yupResolver } from "@hookform/resolvers/yup";
import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { DefaultSeo, LogoJsonLd } from "next-seo";
import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FadeRight } from "../components /animate";
import { AppButton } from "../components /basics";
import { ContactInfo } from "../components /contact";
import { RHFTextField } from "../components /hook-form";
import FormProvider from "../components /hook-form/FormProvider";
import GlobalSEO, { SITE_LOGO, SITE_URL } from "../data/next-seo.data";
import { useCreateContactEnquiry } from "../services/contactServices";
import { allowOnlyCharacters, allowOnlyNumbers } from "../utils/utils-fun";
import * as Yup from "yup";
import contact from "../assets/hercoPowerImages/png/contactpage.jpg";
// ----------------------------------------------------------------------
// export const config = {
//   // eslint-disable-next-line camelcase
//   unstable_runtimeJS: false,
// }

export default function ContactUs() {
  const [pageLoading, setPageLoading] = useState();
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 1000);
  }, []);
  ContactUs.propTypes = {
    isEdit: PropTypes.bool,
    currentUser: PropTypes.object,
  };
  const { mutate, isLoading } = useCreateContactEnquiry();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const ContactUsSchema = Yup.object().shape({
    your_name: Yup.string().required("Name is required"),
    email_id: Yup.string()
      .email("Email must be a valid email address")
      .notRequired(),
    contect_no: Yup.string()
      .min(10, "Contact number must be atleast 10 digits")
      .max(10, "Contact number must be only 10 digits")
      .matches(phoneRegExp, "Contact number is not valid"),
    city: Yup.string().required("City is required"),
  });

  const defaultValues = useMemo(
    () => ({
      your_name: "",
      contect_no: "",
      city: "",
      email_id: "",
      remarks: "",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const methods = useForm({
    resolver: yupResolver(ContactUsSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const values = watch()

  const onSubmit = async (data) => {
    const payload = {
      your_name: data?.your_name,
      contect_no: data?.contect_no,
      city: data?.city,
      email_id: data?.email_id,
      remarks: data?.remarks,
    };
    mutate(payload, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/contact-us"]} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={"1s"}>
        <div className=" mx-auto w-w-main md:w-10/12">
          <div className="mt-5 md:mt-40">
            <ContactInfo />
          </div>
          <Stack className=" my-5 md:my-20">
            <div className="w-full">
              <div className="grid  grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col justify-center">
                  {pageLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="h-full w-full "
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        loading="lazy"
                        fill
                        alt="contact img"
                        className="h-full w-full object-cover"
                        src={contact}
                      />
                    </div>
                  )}
                </div>
                <div className=" ">
                  <p className="mx-0 mb-5 font-inter text-lg font-bold leading:leading:10 sm:leading-[4rem] md:mb-7 md:mt-5 md:text-2xl md:font-black lg:text-4xl mt-0">
                    Transform your power solutions with us - Contact now!
                  </p>

                  <FormProvider
                    methods={methods}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Stack spacing={4}>
                      <RHFTextField
                        sx={{ background: "white", borderRadius: "8px" }}
                        name="your_name"
                        label="Your Name"
                      />
                      <RHFTextField
                        sx={{ background: "white", borderRadius: "8px" }}
                        name="contect_no"
                        label="Contact No."
                        onChange={(e) => {
                          setValue("contect_no", allowOnlyNumbers(e));
                        }}
                      />
                      <RHFTextField
                        sx={{ background: "white", borderRadius: "8px" }}
                        name="email_id"
                        label="Email Id"
                      />
                      <RHFTextField
                        name="city"
                        sx={{ background: "white", borderRadius: "8px" }}
                        label="City"
                        onChange={(e) => {
                          setValue("city", allowOnlyCharacters(e));
                        }}
                      />

                      <RHFTextField
                        multiline
                        rows={6}
                        name="remarks"
                        label="Remarks"
                        sx={{ background: "white", borderRadius: "8px" }}
                      />

                      <AppButton
                        disabled={isSubmitting}
                        type="submit"
                        size="large"
                        variant="contained"
                        title=" Send Message"
                        loading={isLoading || isSubmitting}
                        loadingIndicator="Loading..."
                        fullWidth
                      />
                    </Stack>
                  </FormProvider>
                </div>
              </div>
            </div>
          </Stack>
        </div>
      </FadeRight>
    </>
  );
}
