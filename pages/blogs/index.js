import { DefaultSeo, LogoJsonLd } from "next-seo";
import { FadeRight } from "components/animate";

import { ErrorScreen } from "components/basics";
import { BlogsCard } from "components/cards";
import GlobalSEO from "data/next-seo.data";
import api from "services/api";

const Blogs = ({ blogsData }) => {
  // const { data, isLoading, isError } = useGetAllBlog()

  // if (isLoading) return <LoadingScreen />
  const { status, blog } = blogsData;
  if (!status) return <ErrorScreen />;

  return (
    <>
      <DefaultSeo {...GlobalSEO.global} {...GlobalSEO["/blogs"]} />
      <LogoJsonLd logo={SITE_LOGO} url={SITE_URL} />
      <FadeRight durationTime={"1s"}>
        <BlogsCard data={blog} />
      </FadeRight>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await api.get("/blog/all");
  const blogsData = res.data;
  return {
    props: {
      blogsData,
    },
  };
}
