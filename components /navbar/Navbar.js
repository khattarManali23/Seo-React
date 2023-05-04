// import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { useSelector } from 'react-redux'

const Navbar = () => {
  //user data from slice
  const { userData, userType } = useSelector((state) => state.user)
  return (
    <div className="w-full">
      <div className="md:block hidden">
        <DesktopNavbar userType={userType} userData={userData} />
      </div>
      <div className="md:hidden">
        <MobileNavbar userType={userType} userData={userData} />
      </div>
    </div>
  )
}

export default Navbar
