import React from "react";

export default function Home() {
  const subtitle = "アウトプットしていくサイト";

  // コンポーネントのpropsをオブジェクトで指定することもできる
  const props01 = { title: "記事のタイトル1", url: "post01.html" };
  const props02 = { title: "記事のタイトル2", url: "post02.html" };

  //React要素を返す関数としてコンポーネントを定義することができる
  //コンポーネント「EachPost」は各記事の書式を返すコンポーネント
  //props(関数に対する引数のようなもの)で代入を行うこともできる
  //ここではurl,titleというpropsを代入するよう設定する
  //※funciton(props)~ {props.url}{props.title}というように書くこともできる propsというオブジェクトだから
  // 下記で用いているのはES6の分割代入というやり方 オブジェクトから指定の要素を抜き出すことができる この場合引数指定の段階で与えられたpropsのオブジェクトからurlとtitleを抜き出している(多分)
  function EachPost({ url, title }) {
    return (
      <article>
        <a href={url}>
          <h3>{title}</h3>
        </a>
      </article>
    );
  }

  // 子要素を持つコンポーネント(＝任意の要素を囲って適用するためのコンポーネント)を作れる
  // 子要素はprops.childrenで受け取ることができる
  function Decoration({ children }) {
    return <div style={{ color: "red" }}>{children}</div>;
  }

  return (
    <>
      <header>HEADER</header>

      <main>
        <div>
          <Decoration>
            <h1>CUBE</h1>
          </Decoration>
          <p>アウトプットしていくサイト</p>
          {/* コンポーネントは要素として挿入できる 何度でも使える */}
          {/* コンポーネントの可変部分をpropsとし、属性で内容を指定すると同じフォーマットで内容を変えられる */}
          {/* propsをオブジェクトで指定した場合、属性に入れ込むにはスプレッド構文...を使う */}
          <EachPost title {...props01} />
          <EachPost title {...props02} />
        </div>
      </main>

      <footer>FOOTER</footer>
    </>
  );
}
