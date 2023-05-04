import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { FadeRight } from 'src/components/animate'
import { ErrorScreen } from 'src/components/basics'
import { BlogsCard } from 'src/components/cards'
import GlobalSEO, { SITE_LOGO, SITE_URL } from 'src/data/next-seo.data'
import api from 'src/services/api'

const Blogs = ({ blogsData }) => {
  // const { data, isLoading, isError } = useGetAllBlog()

  // if (isLoading) return <LoadingScreen />
  const { status, blog } = blogsData
  if (!status) return <ErrorScreen />

  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO['/blogs']} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={'1s'}>
        <BlogsCard data={blog} />
      </FadeRight>
    </>
  )
}

export default Blogs

export async function getStaticProps() {
  const res = await api.get('/blog/all')
  const blogsData = res.data
  return {
    props: {
      blogsData,
    },
  }
}
