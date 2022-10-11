//カスタムDocumentコンポーネント
//Documentコンポーネントにオーバーライドするためのコンポーネント(Appのときと同じ)
//基本形はhttps://nextjs.org/docs/advanced-features/custom-documentからコピー
import { Html, Head, Main, NextScript } from "next/document";

// サイトの情報をconstantsから引っ張る
import { siteMeta } from "lib/constants";
const { siteLang } = siteMeta; //言語設定

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
