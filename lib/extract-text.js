//記事本文のHTMLから冒頭のテキストだけを切り出して返す関数。記事ページのメタデータの説明部分に使う
import { convert } from "html-to-text";

export function extractText(html, length = 80, more = "…") {
  const text = convert(html, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
    ],
  });

  return text.slice(0, length) + more;
}
