import Home from "../pages";
import Logo from "./logo";
import Nav from "./nav";
import Container from "components/container";
import styles from "styles/header.module.css";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          {/* boxOn:ロゴのボックスデザインを有効にする属性値 */}
          <Nav />
        </div>
      </Container>
    </header>
  );
}
