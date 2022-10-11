import styles from "styles/container.module.css";

// containerの幅などを指定するコンポーネント

export default function Container({ children, large = false }) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
