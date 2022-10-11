// ソーシャルアイコン部分のコンポーネント　ここにだけアイコンをインポートすればいいので効率が良い

import styles from "styles/social.module.css";
// FontAwsomeそのものの読み込み
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 個別のアイコンの読み込み faつきキャメルケースに変更する必要がある点注意
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} style={{ "--icon-size": iconSize }}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          {/* sr-only:FontAwsomeにあるクラス テキストを非表示にする */}
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  );
}
