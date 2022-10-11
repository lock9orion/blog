import Logo from "components/logo";
import Container from "components/container";

import styles from "styles/footer.module.css";
import Social from "components/social";

export default function Footer() {
  return (
    <div>
      <footer className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <Logo />
            <Social />
          </div>
        </Container>
      </footer>
    </div>
  );
}
