//index トップページ
import Hero from "components/hero";
import Container from "components/container";
import Layout from "components/layout";
import Meta from "components/meta";
import Posts from "components/posts";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";
import Pagination from "components/pagination";

export default function Home({ posts }) {
  return (
    <>
      {/* もちろんLayoutコンポーネントにContainerを入れ込めば一括で幅を指定することができる。今回はページごとに細かい調整が可能なように別々にくくっている */}
      <Container>
        <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />

        {/* ブログ記事のうち最新4件を表示する */}
        <Posts posts={posts} />

        {/* 記事一覧ページへのリンク Nextのみ指定することで右寄せになる*/}
        <Pagination nextUrl="/blog" nextText="More Posts" />
      </Container>
    </>
  );
}

// 記事を取得する非同期処理(最新4件分)
export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataUrl = { base64 };
  }

  return {
    props: {
      posts: posts,
    },
  };
}
