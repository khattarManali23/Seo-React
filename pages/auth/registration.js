import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import RegistrationForm from 'src/components/forms/RegistrationForm'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'
const Registration = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/auth/registration']} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        <RegistrationForm />
      </FadeRight>
    </>
  )
}

export default Registration
