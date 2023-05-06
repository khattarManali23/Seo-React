import { DefaultSeo, LogoJsonLd } from "next-seo";

import { FadeRight } from "components/animate";
import GlobalSEO from "data/next-seo.data";
import DealerRegistrationForm from "components/forms/DealerRegistrationForm";
const Registration = () => {
  return (
    <>
      <DefaultSeo
        {...GlobalSEO.global}
        {...GlobalSEO["/auth/dealership-registration"]}
      />

      <FadeRight durationTime={"1s"}>
        <DealerRegistrationForm />
      </FadeRight>
    </>
  );
};

export default Registration;
