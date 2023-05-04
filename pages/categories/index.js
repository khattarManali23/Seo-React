import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import { ErrorScreen } from 'src/components/basics'
import { CategoriesCard } from 'src/components/cards'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'
import api from '../../services/api'

const CategoriesPage = ({ categories }) => {
  console.log('categories', categories)
  // const {
  //   data,
  //   isLoading = { isLoadingCategories },
  //   isError,
  // } = useGetAllCategories()

  // if (isLoading) return <LoadingScreen />

  if (!categories?.status) return <ErrorScreen />

  return (
    <>
      <section className="mx-auto my-10 w-11/12 sm:my-40 sm:w-w-main">
        <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/categories']} />
        <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
        {/* <AppHeading title="Categories" /> */}
        <FadeRight durationTime={'1s'}>
          <CategoriesCard
            // isLoadingCategories={}
            data={categories.data}
            // redirectPath="/categories/[categorySlug]"
            // redirectUrl={`/categories`}
            // redirect path and url use by id
            redirectPath="/categories/[id]"
            redirectUrl={`/categories`}
          />
        </FadeRight>
      </section>
    </>
  )
}

export default CategoriesPage

export async function getStaticProps() {
  const res = await api.get('category/list')

  const categories = res.data

  return {
    props: {
      categories,
    },
  }
}
