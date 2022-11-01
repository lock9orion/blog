//記事一覧用コンポーネント
import styles from "styles/posts.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                  //★ブラーの読み込みで謎のエラーが起こってるので後で直す★
                  //★未設定時の画像読み込みには問題なし★
                  // placeholder="blur"
                  // blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
