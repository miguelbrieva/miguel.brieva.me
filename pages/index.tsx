import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import Layout from "@/src/components/layout";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <Layout home>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
