import { getPost } from "api/posts";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { withCSR } from "HOC/with-CSR";
import Error from "components/Error";
import PostPage from "containers/PostPage";
import { DefaultSeo } from "next-seo";
import { usePost } from "hooks/api/posts";
import { useRouter } from "next/router";

const News = () => {
  //show custom error component if there is an error
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = usePost(id);
  console.log(data);

  return (
    <>
      <DefaultSeo title="rrr Blog App" description="rrr Blog App" />

      <h3>
        {data?.id} {data?.title}
      </h3>
    </>
  );
};

export default News;
