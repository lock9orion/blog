// サイトの情報をまとめておくコンポーネント
// このへんのimportを1回で全部まとめてしまえるのでコンポーネント化する必要がある
import Head from "next/head";
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;
// 現在のパスとかを取得するためのセット
import { useRouter } from "next/router";
// 汎用(無指定の場合の)OGP画像の読み込み
import siteImg from "images/ogp.jpg";

export default function Meta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) {
  // ページタイトル：pageTitleが未指定の場合(siteTitleだけを表示する)の処理を挟む
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  // ページの説明：pageDesc未指定の場合siteDescを表示する
  const desc = pageDesc ?? siteDesc;
  // ページのURL：siteUrl+next/routerから現在ページのパスを取得したもの
  const router = useRouter(); //ルーティング情報のセットをオブジェクトrouterとして取得
  const url = `${siteUrl}${router.asPath}`;
  // OGP画像の情報取得：指定されていない場合、汎用OGP画像の情報を入れる
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  //画像のURLがサーバ上のものになっているか(外部からアクセスできるものになっているか)→なっていなければサイトURLを付け足しそのようにする
  //startsWith():文字列が指定された部分文字列で始まるかどうか判定する
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      {/* タイトル */}
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {/* 説明 */}
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      {/* 正規化されたURL情報：index.htmlの有無、末尾スラッシュの有無などで別ページと思われるのを避けるためのもの */}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      {/* サイトに関する情報 */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:rocale" content={siteLocale} />
      {/* ファビコン */}
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      {/* OGP画像 */}
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
    </Head>
  );
}
