import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import LoginForm from 'src/components/forms/LoginForm'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'
const Login = () => {
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/auth/login']} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        <LoginForm />
      </FadeRight>
    </>
  )
}

export default Login
