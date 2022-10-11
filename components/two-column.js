import styles from "styles/two-column.module.css";

// 本文の2カラムレイアウトを作るコンポーネント
// このコンポーネント内に3つのコンポーネントを作成するので、デフォルトエクスポートではなく名前付きエクスポートを使う
// デフォルトエクスポート：
// ・1つのモジュールにひとつ
// ・import側で呼び名を変えられる
// 名前付きエクスポート：
// ・1つのモジュールに複数可
// ・export側で決めた名前でないとダメ

// 2カラム全体のレイアウト
export function TwoColumn({ children }) {
  return (
    // メインとサイドバーを横並びにする
    <div className={styles.flexContainer}>{children}</div>
  );
}

// メイン部分
export function TwoColumnMain({ children }) {
  return <div className={styles.main}>{children}</div>;
}

// サイドバー部分
export function TwoColumnSidebar({ children }) {
  return <div className={styles.sidebar}>{children}</div>;
}
