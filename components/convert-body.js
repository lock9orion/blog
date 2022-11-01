//ブログ記事部分をreact要素に変換するコンポーネント
import parse from "html-react-parser";
import Image from "next/image";

export default function ConvertBody({ contentHTML }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      //imgタグはnext/imageに置き換える
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            layout="responsive"
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width:768px) 768px,100%"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
}
