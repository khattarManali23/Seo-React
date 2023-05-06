import { useState, useEffect } from "react";
import Link from "next/link";
import { MdLogout, MdFormatListBulleted } from "react-icons/md";
import { NAVBAR_LINKS } from "../../data/app-data-links";
import Image from "next/image";
import { CartSideBar } from "../cart";
import AppIconButton from "../basics/AppIconButton";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { logout } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import logoImage from "../../assets/hercoPowerImages/logo.png";
import { BsPersonCircle } from "react-icons/bs";
import { useGetAllCategories } from "../../services/categoryServices";
// import { AppCarousel } from '../basics'
import { FadeIn } from "../animate";
import SearchSideBar from "./SearchSideBar";
export default function DesktopNavbar({ userData }) {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  // const { data } = useGetAllCategories()
  const data = [];
  console.log(data, "danbnta");

  const changeNavbarShadow = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarShadow);
  }, []);
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
  const { pathname } = useRouter();

  return (
    <>
      <div
        className={`w-screen z-50 py-5 transition-all duration-300 
        ${
          pathname === "/"
            ? scrolled
              ? "fixed bg-shade-blue"
              : "absolute left-0 top-0 w-screen pt-12 custom-max-screen:bg-shade-blue"
            : "fixed bg-shade-blue"
        }
        `}
      >
        <div className="w-full">
          <nav className="mx-auto w-w-main">
            <div className="flex h-12 w-full items-center justify-between">
              <div>
                <Link href={"/"}>
                  <div className="flex items-center justify-start hover:cursor-pointer">
                    <Image
                      src={logoImage}
                      alt="Picture of the author "
                      width={150}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>

              <div className="flex justify-end">
                <ul className="relative ml-5  flex w-full gap-2">
                  {NAVBAR_LINKS?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link className="cursor-pointer" href={item?.link}>
                          <li className="group rounded-md px-3 py-2 font-inter text-custom-15 font-medium uppercase leading-7 tracking-wider text-white">
                            {item?.name}
                            <span style={{ transition: " all 0.5s ease-out" }}>
                              {item.name === "products" && (
                                <div className="absolute right-[17vw] z-100 top-10 mx-auto hidden h-fit w-fit overflow-hidden group-hover:block">
                                  <NavbarCategoryList data={data} />
                                </div>
                              )}
                            </span>
                          </li>
                        </Link>
                      </div>
                    );
                  })}
                </ul>
                <div className="flex gap-1 py-5 text-white">
                  {/* <Link href="/account/profile?tab=wishlist">
                    <span className="text-xl cursor-pointer">
                      <AppIconButton
                        Icon={<AiOutlineHeart className="text-white" />}
                      />
                    </span>
                  </Link> */}
                  {/* <span className="text-2xl cursor-pointer">
                    <AppIconButton
                      Icon={<AiOutlineSearch className="text-white" />}
                    />
                  </span> */}
                  <SearchSideBar />
                  <div className="cursor-pointer text-xl">
                    {userData == null ? (
                      <Link className="cursor-pointer " href="/account/profile">
                        <AppIconButton
                          Icon={<BsPersonCircle className="text-white" />}
                        />
                      </Link>
                    ) : (
                      <>
                        <Tooltip title="My Account">
                          <AppIconButton
                            onClick={handleClick}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            Icon={<BsPersonCircle className="text-white" />}
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
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
                      </>
                    )}
                  </div>

                  <CartSideBar />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export const NavbarCategoryList = ({ data }) => {
  console.log(data, "khattar");
  return (
    <FadeIn durationTime="0.5s">
      <div className="flex w-fit mt-8 justify-around overflow-hidden rounded-lg bg-clay-blue p-4 shadow-shadow-harco">
        {/* <div className="grid grid-flow-col grid-rows-6 gap-2"> */}
        <div>
          {data?.length > 0 &&
            data?.map((items, index) => {
              return (
                <Link
                  href="/categories/[categorySlug]"
                  as={`/categories/${items?.slug}`}
                  key={index}
                >
                  <p className="m-0 h-auto max-h-fit w-auto overflow-hidden whitespace-nowrap rounded-md p-2 font-inter text-sm font-medium text-white hover:cursor-pointer hover:bg-white hover:text-shade-blue">
                    {items?.name}
                  </p>
                </Link>
              );
            })}
        </div>
        {/* <div className="m-auto w-60 overflow-hidden px-2">
          <AppCarousel
            {...{
              slidesToShow: 1,
              fade: false,
              autoplay: true,
              infinite: data?.length > 1 ? true : false,
              // autoplaySpped: 1000,
              autoplaySpeed: 2000,
            }}
          >
            {data?.map((item, index) => {
              return (
                <div key={index} className="max-h-fit px-3">
                  <FadeIn durationTime="1s">
                    <Link
                     <Link 
                    href="/categories/[categorySlug]"
                    as={`/categories/${items?.slug}`}
                    >
                    >
                      <Image
                        // loading="lazy"
                        width={200}
                        height={200}
                        src={item?.icon}
                        className="w-full animate-opacityAnimation object-cover"
                        alt={item?.title}
                      />
                    </Link>
                  </FadeIn>
                </div>
              )
            })}
          </AppCarousel>
        </div> */}
      </div>
    </FadeIn>
  );
};
