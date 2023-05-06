import { useState } from "react";
import Link from "next/link";
import logopng from "../../assets/hercoPowerImages/logo.png";
import MobileSideBar from "./MobileSideBar";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import AppIconButton from "../basics/AppIconButton";
import { BsPersonCircle } from "react-icons/bs";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { MdFormatListBulleted, MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import SearchSideBar from "./SearchSideBar";

export default function MobileNavbar({ userData, userType }) {
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [scrolled, setScrolled] = useState(false)
  // const changeNavbarShadow = () => {
  //   if (window.scrollY >= 80) {
  //     setScrolled(true)
  //   } else {
  //     setScrolled(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', changeNavbarShadow)
  // }, [])
  const handlePageBack = () => {
    if (window.history.length > 1) {
      Router.back();
    } else {
      Router.replace("/");
    }
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //logout function
  const handleLogout = () => {
    dispatch(logout());
    push("/auth/login");
  };

  return (
    <>
      {/* <div
        className={`w-screen z-50 py-3  transition-all duration-300 
        ${
          pathname === '/'
            ? scrolled
              ? 'fixed bg-shade-blue  '
              : 'absolute left-0 top-0 w-screen custom-max-screen:bg-shade-blue '
            : 'fixed bg-shade-blue '
        }
        `}
      > */}
      <div className="w-screen z-50 py-1 bg-shade-blue fixed  transition-all duration-300">
        <div className="flex md:hidden justify-between w-full items-center w-11/12 mx-auto relative">
          <div className="flex px-2 z-10">
            {pathname !== "/" && (
              <div onClick={handlePageBack} className=" p-2">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 64L0 32L32 0L37.7 5.6L15.3 28H64V36H15.3L37.7 58.4L32 64Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            )}

            {pathname == "/" && (
              <MobileSideBar userType={userType} userData={userData} />
            )}
          </div>

          <div className="flex items-end">
            <div className="hover:cursor-pointer flex justify-center absolute top-1 left-0 w-full">
              <Link href={"/"}>
                <div>
                  <Image
                    loading="lazy"
                    src={logopng}
                    alt="Picture of the author"
                    width={75}
                    height={30}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex z-10 px-2">
            <div>
              <SearchSideBar />
            </div>
            <div>
              {userData == null ? (
                <Link className="cursor-pointer " href="/account/profile">
                  <AppIconButton
                    Icon={<BsPersonCircle className="text-white " />}
                  />
                </Link>
              ) : (
                <div>
                  <Tooltip title="My Account">
                    <AppIconButton
                      onClick={handleClick}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      Icon={<BsPersonCircle className="text-[#3d3c7c]" />}
                    />
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <MenuItem onClick={() => push("/account/profile")}>
                      <MdFormatListBulleted className="mr-2" />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <MdLogout className="mr-2" />
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
