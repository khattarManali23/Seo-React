import { DefaultSeo, LogoJsonLd } from "next-seo";

import { FadeRight } from "components/animate";
import GlobalSEO from "data/next-seo.data";
import RegistrationForm from "components/forms/RegistrationForm";
const Registration = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/auth/registration"]} />

      <FadeRight durationTime={"1s"}>
        <RegistrationForm />
      </FadeRight>
    </>
  );
};

export default Registration;
