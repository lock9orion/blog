import "styles/globals.css";
import Layout from "components/layout";

// これは何？→カスタムAppコンポーネント：ページの初期化に使われるAppコンポーネント(※これを直接触ることはできない)をオーバーライドするためのもの

// FontAwesome用の設定 CSS読み込みの遅延により一瞬クソデカアイコンが表示されるのを防ぐもの(公式サイトより)
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* この部分が基本的な読み込み→これをLayoutコンポーネントでくくってしまうことであらゆるページにLayoutコンポーネントを最初から入れ込むことができる→スッキリ */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
