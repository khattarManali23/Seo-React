import { FadeRight } from "components/animate";
import { LoginForm } from "components/forms";
import GlobalSEO from "data/next-seo.data";
import { DefaultSeo, LogoJsonLd } from "next-seo";

const Login = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/auth/login"]} />

      <FadeRight durationTime={"1s"}>
        <LoginForm />
      </FadeRight>
    </>
  );
};

export default Login;
