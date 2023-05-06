import { Box } from "@mui/material";
import { AppNoProducts, ErrorScreen, LoadingScreen } from "components /basics";
import { ProductsCard } from "components /cards";
import { NavbarFooterLayout } from "components /layouts";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useGetAllProductsByAnyCategoryById } from "services/productServices";

const SubCategorySlugPage = () => {
  // console.log(product, categories)
  const { query } = useRouter();
  const { subCategorySlug, categorySlug } = query;
  const { userType, userData } = useSelector((state) => state.user);
  // const [anchorEl, setAnchorEl] = useState(null)
  // const [sort, setSort] = useState('')
  // const [category, setCategory] = useState('')
  // const [brand, setBrand] = useState('')
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsByAnyCategoryById(subCategorySlug);

  if (isLoading) return <LoadingScreen />;

  if (isError) return <ErrorScreen />;

  // ---------------------------------------------------------------------
  // const open = Boolean(anchorEl)

  // const handleSortBy = (key) => {
  //   setAnchorEl(null)
  //   setSort(key)
  //   if (products?.length >= 2) {
  //   }
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }
  // const handleCategoryFilter = (e) => {
  //   if (e.target.checked) {
  //     // console.log(e.target.value)
  //     setCategory(e.target.value)
  //   }
  // }
  return (
    <NavbarFooterLayout>
      <div className="container mx-auto">
        {/* <Box className="mx-auto mt-0 flex w-11/12 items-center justify-end space-x-4 sm:mt-10">
          <ProductFilterSideBar
            categories={categories}
            handleCategoryFilter={handleCategoryFilter}
          />
          <Box>
            <AppButton
              onClick={(event) => setAnchorEl(event.currentTarget)}
              size="small"
              sx={{ ml: 2 }}
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
          </Box>
        </Box> */}
        <Box className="mx-auto bg-blue-900 w-11/12">
          {products?.length > 0 ? (
            <ProductsCard
              data={products}
              userType={userType}
              userData={userData}
              // redirectUrl={'/p'}
              redirectPath="/categories/[categorySlug]/[subCategorySlug]/p/[productSlug]"
              redirectUrl={`/categories/${categorySlug}/${subCategorySlug}/p`}
            />
          ) : (
            <div className="my-5 sm:my-10">
              <AppNoProducts />
            </div>
          )}
        </Box>
      </div>
    </NavbarFooterLayout>
  );
};

export default SubCategorySlugPage;

// export async function getServerSideProps({ params }) {
//   const response = await api.get('/category/all')
//   const categories = await response.data.categorys
//   const { slug } = params
//   const id = slug?.split('-')?.pop()

//   const res = await api.get(`/product/byAnyCategory/${id}`)
//   const product = await res.data.product

//   return {
//     props: {
//       product,
//       categories,
//     },
//   }
// }
