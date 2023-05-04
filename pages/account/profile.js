// import React from 'react'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { useSelector } from 'react-redux'
import { FadeRight } from 'src/components/animate'
import { LoginForm } from 'src/components/forms'
import MyAccount from 'src/components/my-account/MyAccount'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'

const Profile = () => {
  //user data from slice
  const { userData, userAccessToken, userType } = useSelector(
    (state) => state.user
  )
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/account/profile']} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        {userData == null ? (
          <LoginForm />
        ) : (
          <MyAccount
            userData={userData}
            userAccessToken={userAccessToken}
            userType={userType}
          />
        )}
      </FadeRight>
    </>
  )
}

export default Profile
