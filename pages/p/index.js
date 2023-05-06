import { useSelector } from "react-redux";
// import { ErrorScreen } from "../../components/basics"
// import { ProductListCard } from "../../components/cards";
import api from "../../services/api";
// import { useGetAllCategories } from 'src/services/categoryServices'
import { DefaultSeo, LogoJsonLd } from "next-seo";
import { useRouter } from "next/router";
import GlobalSEO, { SITE_LOGO } from "../../data/next-seo.data";
import { ErrorScreen } from "components /basics";
import { ProductListCard } from "components /cards";

const Products = ({ productsData }) => {
  const { query } = useRouter();
  const { userType, userData } = useSelector((state) => state.user);
  const initialUrl = `/product/all/${userType}`;
  // const [anchorEl, setAnchorEl] = useState(null)
  // const [sort, setSort] = useState('')
  // const [category, setCategory] = useState('')
  // const [brand, setBrand] = useState('')
  // const initialUrl = `${
  //   sort == '' && brand === '' && category == ''
  //     ? '/product/all/'
  //     : '/product/allProductSort/'
  // }`
  // const productFetchUrl =
  //   userType?.toLowerCase() +
  //   '?category=' +
  //   category +
  //   '&brand=' +
  //   brand +
  //   '&sort=' +
  //   sort

  // const {
  //   data,
  //   isLoading : productIsLoading ,
  //   isError,
  // } = useGetAllFilteredProducts(initialUrl + productFetchUrl)
  // const {
  //   data: categories,
  //   isLoading: categoriesLoading,
  //   isError: categoriesError,
  // } = useGetAllCategories()

  // ---------------------------------------------------------------------

  // const open = Boolean(anchorEl)

  // const handleSortBy = (key) => {
  //   setAnchorEl(null)
  //   setSort(key)
  //   if (data?.length >= 2) {
  //   }
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }
  // const handleCategoryFilter = (e) => {
  //   if (e.target.checked) {
  //     setCategory(e.target.value)
  //   }
  // }
  // console.log(initialUrl, productFetchUrl, category, sort)
  const { status } = productsData;
  // ---------------------------------------------------------------------
  // if (
  //   // isLoading ||
  //   categoriesLoading
  // )
  //   return <LoadingScreen />
  if (
    // isError ||
    !status
  )
    return <ErrorScreen />;
  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/p"]} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <ProductListCard
        querySearchValue={query.search}
        redirectPath={"/p/[slug]"}
        redirectUrl={"/p"}
        initialUrl={initialUrl}
        userType={userType}
        userData={userData}
      />
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const res = await api.get("/product/all");
  const productsData = res.data;
  return {
    props: {
      productsData,
    },
  };
}
