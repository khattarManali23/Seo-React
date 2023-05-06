import { Tab, Tabs } from "@mui/material";
import { FadeRight } from "components /animate";
import { AppNoProducts, ErrorScreen, LoadingScreen } from "components /basics";
import { ProductsCard } from "components /cards";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsByAnyCategoryById } from "services/productServices";

const SubCategoriesPage = () => {
  const { query } = useRouter();
  const router = useRouter();
  // const id = query?.slug?.split('-')?.pop()
  const slug = query.categorySlug;
  console.log("slug", slug);

  const { userData, userType } = useSelector((state) => state.user);
  const [tabValue, setTabValue] = useState(0);
  const [productFetchId, setProductFetchId] = useState("");
  useEffect(() => {
    setProductFetchId(slug);
  }, [slug]);
  // const { data, isLoading, isError } = useGetSubCategoryById(slug)

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useGetAllProductsByAnyCategoryById(slug);
  console.log("products", products);
  // const {
  //   data: otherProducts,
  //   isLoading: otherProductsLoading,
  //   isError: otherProductsError,
  // } = useGetAllOthersProductByCategory(slug)

  // const {
  //   data: superSubCategories,
  //   isLoading: superSubCategoriesLoading,
  //   isError: superSubCategoriesError,
  // } = useGetSuperSubCategoryById(productFetchId || slug)

  if (
    // isLoading ||
    productsLoading
    // otherProductsLoading ||
    // superSubCategoriesLoading
  )
    return <LoadingScreen />;

  if (
    // isError ||
    productsError
    // || otherProductsError || superSubCategoriesError
  )
    return <ErrorScreen />;

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    setProductFetchId(newValue === 0 ? slug : newValue);
    if (newValue === 0) {
      // push(`slug=?${query.categorySlug}`)
    } else {
      // push(`slug=?${query.categorySlug}?${newValue}`)
    }
  };
  return (
    <>
      <FadeRight durationTime={"1s"}>
        <div className="mx-auto my-10 flex flex-col items-center justify-center md:container">
          <div className="mx-auto w-full md:w-8/12 ">
            {/* <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={true}
            > */}
            {/* <Tab label="All" />
              {data?.map((item, index) => {
                return <Tab key={index} label={item?.name} value={item?.slug} />
              })}
              {otherProducts?.length && <Tabs label="Others" />}
            </Tabs> */}
          </div>
          <div className="mx-auto w-w-main my-10">
            {/* <CategoriesCard
              data={superSubCategories}
              isLoadingCategories={superSubCategoriesLoading}
              redirectPath="/categories/[categorySlug]/[subCategorySlug]/[superSubCategorySlug]"
              redirectUrl={`/categories/${slug}/${tabValue}`}
            />

            <AppHeading title="Explore Products" /> */}
            {/* <NextSeo
            title={'Herco Transformers || Category: ' + oneCategory?.name}
            openGraph={{
              title: oneCategory?.name,
              url: `https://www.hercotransformers.com/categories/subcategories/${oneCategory?._id}`,
              images: [
                {
                  url: oneCategory?.icon,
                  width: 800,
                  height: 600,
                  alt: oneCategory?.name,
                },
              ],
            }}
          /> */}
            {products?.length > 0 ? (
              <ProductsCard
                data={products}
                userType={userType}
                userData={userData}
                // redirectUrl={`/p`}
                redirectPath={`/categories/[categorySlug]/P/[productSlug]`}
                redirectUrl={`/categories/${slug}`}
              />
            ) : (
              <div className="my-10">
                <AppNoProducts />
              </div>
            )}
          </div>
        </div>
      </FadeRight>
    </>
  );
};

export default SubCategoriesPage;
