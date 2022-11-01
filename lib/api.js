// microCMSのAPIを受け取るためのクライアントモジュール
import { createClient } from "microcms-js-sdk";

// ドメインとAPIキーを読み出す
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

//slugで指定した記事のデータを持ってくる
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("--getPostBySlug--");
    console.log(err);
  }
}

//すべての記事のslugを取得する
export async function getAllSlugs(limit = 100) {
  //記事の取得上限 microCMSのデフォルトは5
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    //タイトルとslugで記事を取得し投稿日で並べ替えた配列を取得

    return slugs.contents;
  } catch (error) {
    console.log("--getAllSlugs--");
    console.log(err);
  }
}

//すべての記事のタイトル、アイキャッチを取得（記事一覧用）
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (error) {
    console.log("--getAllPosts--");
    console.log(err);
  }
}

//カテゴリを取得　※apiの名前が違う
export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (error) {
    console.log("--getAllCategories--");
    console.log(err);
  }
}

//カテゴリページに表示する記事を取得
//引数でカテゴリIDを指定(slugとIDは異なるので)
export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(err);
  }
}
