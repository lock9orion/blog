import Link from "next/link";
import styles from "styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    //hrefはLinkにつける→Linkは"クライアントサイドで"遷移を行う機能なのでここにつけてあげる、そうでないと遷移のためにいちいちレンダリングが行われる事になりかねない
    <Link href="/">
      {/* Linkの中にはaを入れる。なくても遷移できるがsemanticであることとSEOのためにつけておく */}
      {/* ロゴのスタイルを三項演算子「?」で条件分岐により切り替える
        item = conditon ? ifTrue : ifFalse
        上記の場合、conditionに設定した状態がtrueの場合ifTrueを、falseの場合はifFalseを返すことになる */}
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  );
}
