import Header from "components/header";
import Footer from "components/footer";

// 共通部分(ヘッダー、フッター、メインタグ)をまとめたコンポーネント
// childrenで子要素を引っ張れるのでこういうこともできちゃう
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
