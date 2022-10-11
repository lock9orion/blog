// ブログの個別ページ(猫とスケジュール管理)を構成するページコンポーネント
import { client } from "lib/api";

// 記事本体部分
export default function Schedule() {
  return <h1>記事のタイトル</h1>;
}

// 非同期処理によるgetStaticProps
export async function getStaticProps() {
  // promiseオブジェクトでAPIを受け取る
  const resPromise = client.get({
    endpoint: "blogs",
  });

  // try-cacth構文：try→例外が起きそうな処理→catch→例外時処理、と記述する
  try {
    // await:後ろにつなげたPromiseオブジェクトを「待つ」。その間処理を進めない。左辺にはPromiseオブジェクトの結果またはその値自体が代入される。
    const res = await resPromise;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {},
  };
}
