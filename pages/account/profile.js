// import React from 'react'
import { FadeRight } from "components/animate";
import { LoginForm } from "components/forms";
import MyAccount from "components/my-account/MyAccount";
import GlobalSEO from "data/next-seo.data";
import { DefaultSeo, LogoJsonLd } from "next-seo";
import { useSelector } from "react-redux";

const Profile = () => {
  //user data from slice
  const { userData, userAccessToken, userType } = useSelector(
    (state) => state.user
  );
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/account/profile"]} />

      <FadeRight durationTime={"1s"}>
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
  );
};

export default Profile;
