// Blog index 記事一覧
import { getAllPosts } from "lib/api";
import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import Posts from "components/posts";
//初期画像のプラグイン
import { getPlaiceholder } from "plaiceholder";
//ローカルのアイキャッチ画像
import { eyecatchLocal } from "lib/constants";

//記事一覧出力用
export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
}

//データ取得用
export async function getStaticProps() {
  // 記事データを取得
  const posts = await getAllPosts();

  // アイキャッチ画像の有無をforで判定する
  //プロパティeyecatchが値を持たない場合はeyecatchLocalを設定
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    //ぼかし画像の設定
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataUrl = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
