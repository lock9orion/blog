import Hero from "components/hero";
import Container from "components/container";
import Layout from "components/layout";
import Meta from "components/meta";

export default function Home() {
  return (
    <>
      {/* もちろんLayoutコンポーネントにContainerを入れ込めば一括で幅を指定することができる。今回はページごとに細かい調整が可能なように別々にくくっている */}
      <Container>
        <Meta />
        <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    </>
  );
}
