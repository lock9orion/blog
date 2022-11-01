//カテゴリページ
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import { eyecatchLocal } from "lib/constants";
import Posts from "components/posts";
import Meta from "components/meta";
import { getPlaiceholder } from "plaiceholder";

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

//生成したいページのslugを渡す非同期処理
export async function getStaticPaths() {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
}

//カテゴリデータを取ってくる
export async function getStaticProps(context) {
  //↑で指定したカテゴリのスラッグを取得
  const catSlug = context.params.slug;

  //↑のスラッグと同じカテゴリのデータを取得する
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

  //指定したスラッグのカテゴリに適合する記事を取得
  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  };
}
