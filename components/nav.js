import Logo from "components/logo";
import Link from "next/link";
import styles from "styles/nav.module.css";
import { useState } from "react"; //useStateをインポート

export default function Nav() {
  //ハンバーガーメニュー用useStateの設定
  //navIsOpen:state変数 配列の形で初期値が入っている
  //setNavIsOpen:stateを更新するための関数
  //false:初期値(ここではfalseに設定つまり初期値ではnavが開いてない)
  const [navIsOpen, setNavIsOpen] = useState(false);

  //navの開閉を切り替える関数をsetNavIsOpenに入れる【1⃣メニューボタンを押すとオンオフを切り替える】
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
    //prevは更新前のstate prev=>!prev、つまり反対の状態にするということで、prevがfalseならtrueを、trueならfalseを返す
  };

  //navを閉じる関数をsetNavIsOpenに入れる【2⃣メニューを選択すると閉じる】
  const closeNav = () => {
    setNavIsOpen(false); //閉じた状態にする
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {/* navIsOpenであればopenを、それ以外の場合closeをクラス名として付与 */}
      {/* buttonにはonClick属性でstateを変化させる関数をイン */}

      {/* メニューが開いている時にスクロールしないようにするCSS module.cssではグローバルなセレクタbodyを指定できないので、styled-jsxを使用 */}
      {navIsOpen && (
        <style jsx global>
          {`
            @media (max-width: 767px) {
              body {
                overflow: hidden;
                position: fixed;
                wdth: 100%;
              }
            }
          `}
        </style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        {/* ハンバーガー部分 */}
        <span className={styles.bar}></span>
        {/* リーダー用テキスト */}
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="\">
            {/* リンクにはメニューを閉じるための関数をonClickでイン */}
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
