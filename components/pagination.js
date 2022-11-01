// 前後記事へのページネーション
import styles from "styles/pagination.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  // 前後ページへのテキストとリンクを引数で取得 初期値は空白
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}) {
  return (
    <ul className={styles.flexContainer}>
      {/* prevTextがある→prevUrlがある→prevの内容を出力 */}
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {/* nextTextがある→nextUrlがある→nextのソースを出力 */}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
              <span>{nextText}</span>
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
}
