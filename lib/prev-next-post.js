//ページネーション用に前後の記事のslugを取得する

export function prevNextPost(allSlugs, currentSlug) {
  //allSlugs:記事のタイトルとスラッグ全体
  //currentSlug：現在の記事のスラッグ

  const numberOfPosts = allSlugs.length; //配列の長さ＝記事の総数

  //現在記事の位置を取得
  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  //前の記事のタイトル・スラッグデータを取得
  //ただし配列の最後の記事(＝一番昔の記事)の場合は空データを返す
  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  //次の記事のタイトル・スラッグデータを取得
  //ただし配列の最初の記事(＝最新の記事)の場合は空データを返す
  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
}
