import { getPost } from "api/posts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { withCSR } from "HOC/with-CSR";
import Error from "components/Error";
import PostPage from "containers/PostPage";
import { DefaultSeo } from "next-seo";

const Page = ({ isError }) => {
  //show custom error component if there is an error
  if (isError) return <Error />;

  return (
    <>
      <DefaultSeo title="My Blog App" description="My Blog App" />

      <PostPage />
    </>
  );
};

export const getServerSideProps = withCSR(async (ctx) => {
  console.log("getServerSideProps");

  const { id } = ctx.params;

  const queryClient = new QueryClient();

  let isError = false;

  try {
    await queryClient.fetchQuery(["post", id], () => getPost(id));
  } catch (error) {
    isError = true;
    ctx.res.statusCode = error.response.status;
  }

  return {
    props: {
      isError,
      dehydratedState: dehydrate(queryClient),
    },
  };
});

export default Page;
