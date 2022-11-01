// ブログの個別ページ(猫とスケジュール管理)を構成するページコンポーネント
import Container from "components/container";
import { getPostBySlug, getAllSlugs } from "lib/api"; //記事取得関数
import Link from "next/link";
import PostHeader from "components/post-header";
import Image from "next/image";
import PostBody from "components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import ConvertBody from "components/convert-body"; //記事のHTMLをreact要素に変換
import PostCategories from "components/post-categories"; //カテゴリ部分を取り出す
import { extractText } from "lib/extract-text"; //HTMLから文字列の切り出し：関数
import Meta from "components/meta"; //メタ要素の表示
import { eyecatchLocal } from "lib/constants"; //アイキャッチ画像がないときの画像
import { getPlaiceholder } from "plaiceholder"; //プレースホルダー画像を指定する

import { prevNextPost } from "lib/prev-next-post"; //ページネーション用前後記事
import Pagination from "components/pagination";

// 記事本体部分
export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description, //ページの説明 メタ要素に使う ここでは記事の冒頭を切り出したものを送っている
  prevPost,
  nextPost,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <article>
        {/* 記事のヘッダ部分 */}
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        {/* アイキャッチ */}
        <figure>
          <Image
            key={eyecatch.url} //keyを与えることですべてのImageを異なるコンポーネントと認識させ、再マウントさせる→ブラー効果を与える
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px)1152px,100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>

        {/* ページネーション */}
        <Pagination
          prevText={prevPost.title}
          prevUrl={`${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

//生成したいページのslugを渡す非同期処理
export async function getStaticPaths() {
  //getAllSlugsで取得したデータをallSlugに入れ、mapメソッドでslugを取り出してURLの形に加工して返す
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
}

//ページコンポーネントに渡すPropsを取ってくる非同期処理
//引数contextで↑のpathsを受け取り、ソレに応じた内容を取ってくる
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  const description = extractText(post.content); //記事の中身の最初を切り出したもの、を説明の中身として送る
  const eyecatch = post.eyecatch ?? eyecatchLocal; //アイキャッチ未設定時はローカルから
  //画像ぼかし
  const { base64 } = await getPlaiceholder(eyecatch.url);
  eyecatch.blurDataURL = base64;
  //ページネーション用前後取得
  const allSlugs = await getAllSlugs();
  const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
}
