import styles from "styles/hero.module.css";
import Image from "next/image";
import cube from "images/cube.jpg";

export default function Hero({ title, subtitle, imageOn = false }) {
  // デフォルト引数としてimageOn=falseを指定する(指定しないとundefinedになってバグる)
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {/* &&で条件式の省略ができる(書籍参照) */}
        {/* 画像がresponsive(親要素のサイズに合わせる)、親要素がflex(子要素のサイズに合わせる)だと結果的にサイズが0×0になってしまうのでfigureにクラスを当ててサイズを指定しておく */}
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizez="(min-width:1152px)576px,(min-width:768px)50vw,100vw"
            placeholder="blur"
            priority
          />
        </figure>
      )}
    </div>
  );
}
