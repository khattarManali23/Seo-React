import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import DealerRegistrationForm from 'src/components/forms/DealerRegistrationForm'
import GlobalSEO, { SITE_LOGO } from 'src/data/next-seo.data'
const Registration = () => {
  return (
    <>
      <DefaultSeo
        {...GlobalSEO.global}
        {...GlobalSEO['/auth/dealership-registration']}
      />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        <DealerRegistrationForm />
      </FadeRight>
    </>
  )
}

export default Registration
