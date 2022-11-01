// アコーディオンメニューのコンポーネント
import styles from "styles/accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function Accordion({ heading, children }) {
  const [textIsOpen, setTextIsOpen] = useState(false);
  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };
  const refText = useRef(null); //テキスト欄の要素の高さを取得する

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      {/* 外側のdivは開閉アニメーション用 中のテキストはinnerTextで */}
      <div
        className={styles.text}
        ref={refText}
        style={{
          "--text-height": refText.current
            ? `${refText.current.scrollHeight}px`
            : "0px",
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
}
