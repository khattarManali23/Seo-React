import { Box } from "@mui/material";
import {
  AppNoProducts,
  AppSearchBox,
  ErrorScreen,
  LoadingScreen,
} from "../basics";
import { FadeRight } from "../animate";
import { ProductFilterSideBar } from "../product";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
import { useGetAllFilteredProducts } from "../../services/productServices";
import { useGetAllCategories } from "../../services/categoryServices";

const ProductListCard = ({
  initialUrl,
  querySearchValue,
  userType,
  userData,
  redirectPath,
  redirectUrl,
}) => {
  //   const [anchorEl, setAnchorEl] = useState(null)
  const [searchValue, setSearchValue] = useState(null);
  const [filterState, setFilterState] = useState({
    category: "",
    search: "",
  });

  const productFetchUrl = `?category=${filterState?.category}&search=${filterState?.search}`;

  const {
    data,
    isLoading: productIsLoading,
    isError,
  } = useGetAllFilteredProducts(initialUrl + productFetchUrl);
  // const {
  //   data: categories,
  //   // isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useGetAllCategories()
  const categories = [];

  // ---------------------------------------------------------------------

  //   const open = Boolean(anchorEl)

  // const handleSortBy = (key) => {
  //   setAnchorEl(null)
  //   setSort(key)
  //   if (data?.length >= 2) {
  //   }
  // }
  //   const handleClose = () => {
  //     setAnchorEl(null)
  //   }
  useEffect(() => {
    if (searchValue === null && querySearchValue) {
      setFilterState({ ...filterState, ["search"]: querySearchValue });
    } else {
      const slugTimer = setTimeout(() => {
        setFilterState({ ...filterState, ["search"]: searchValue || "" });
      }, 1000);
      return () => {
        clearTimeout(slugTimer);
      };
    }
  }, [searchValue, querySearchValue]);
  console.log(querySearchValue);
  const handleCategoryFilter = (e) => {
    let categoryArray = filterState?.category?.split(",");
    if (e.target.checked) {
      categoryArray = [...categoryArray, e.target.value];
      setFilterState({
        ...filterState,
        ["category"]: categoryArray?.join(","),
      });
    } else {
      let newArray = categoryArray?.filter((item) => item !== e.target.value);
      setFilterState({ ...filterState, ["category"]: newArray?.join(",") });
    }
  };
  // ---------------------------------------------------------------------
  if (isError || categoriesError) return <ErrorScreen />;
  console.log("querySearchValue", querySearchValue);
  return (
    <>
      <div className="w-11/12 sm:container mx-auto py-2 sm:py-5">
        <FadeRight durationTime={"1s"}>
          <div className=" flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between w-mobile-w sm:w-11/12 mx-auto ">
            <div className="sm:w-5/12 w-full">
              <AppSearchBox
                value={
                  searchValue === null && querySearchValue
                    ? querySearchValue
                    : searchValue
                }
                handleSearch={() =>
                  setFilterState({ ...filterState, ["search"]: searchValue })
                }
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search for items..."
              />
            </div>

            <Box className="mx-auto flex w-10/12 items-center justify-start sm:justify-end space-x-0 sm:space-x-4 mt-4 sm:mt-0">
              <ProductFilterSideBar
                categories={categories}
                categoryState={filterState?.category}
                handleCategoryFilter={handleCategoryFilter}
              />
              {/* <Box>
                <AppButton
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                  size="small"
                  className="text-[gray] opacity-60"
                  sx={{ ml: 2, color: 'gray' }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  title="Sort By"
                  endIcon={<BsSortDown />}
                />
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={() => handleSortBy('low')}>
                    Low To High
                  </MenuItem>
                  <MenuItem onClick={() => handleSortBy('high')}>
                    High To Low
                  </MenuItem>
                </Menu>
              </Box> */}
            </Box>
          </div>

          <Box className="mx-auto w-w-main sm:container my-16 sm:my-10">
            {productIsLoading ? (
              <LoadingScreen />
            ) : (
              <>
                {data?.length > 0 ? (
                  <ProductsCard
                    productIsLoading={false}
                    data={data}
                    userType={userType}
                    userData={userData}
                    redirectPath={redirectPath}
                    redirectUrl={redirectUrl}
                  />
                ) : (
                  <div className="my-5 sm:my-14">
                    <AppNoProducts />
                  </div>
                )}
              </>
            )}
          </Box>
        </FadeRight>
      </div>
    </>
  );
};

export default ProductListCard;
