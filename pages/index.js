import Posts from "components/Posts";
import { DefaultSeo } from "next-seo";

function Home() {
  return (
    <div>
      <DefaultSeo title="Blog App" description="Blog App" />
      <h1 className="header">Welcome to blog app</h1>
      <Posts />
    </div>
  );
}

export default Home;
