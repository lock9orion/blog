// microCMSのAPIを受け取るためのクライアントモジュール
import { createClient } from "microcms-js-sdk";

// Node.jsで環境変数を扱うAPIであるprocess.envを使ってドメインとAPIキーを読み出す
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoont: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
  } catch (error) {
    console.log("--getPostBySlug--");
    console.log(err);
  }
}
