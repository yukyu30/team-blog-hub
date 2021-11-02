import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "blog",
    name: "ブログ",
    bio:"自分に関することを書いていくブログ",
    avatarSrc: "/avatars/blog.svg",
    sources: [
      "https://blog.yukyu.net/rss.xml",
    ],
  },
  {
    id: "zenn",
    name: "Zenn",
    bio: "技術系のアウトプットを書いてます",
    avatarSrc: "/avatars/zenn.svg",
    sources: ["https://zenn.dev/yu_9/feed"],
  },
  {
    id: "note",
    name: "note",
    bio: "なんか役に立ちそうなことをまとめておく",
    avatarSrc: "/avatars/amanda.jpg",
    sources: ["https://note.com/yukyu30/rss"],
  },
  {
    id: "youtube",
    name: "YouTube",
    bio: "たまに作ったものを公開する",
    sources: ["https://www.youtube.com/feeds/videos.xml?channel_id=UCDVJExPDmVXS-TVoKe49JRg"],
  },
  {
    id: "anchor",
    name: "anchor.fm",
    bio: "だらだらと話すポッドキャスト",
    avatarSrc: "/avatars/naoko.jpg",
    sources: ["https://anchor.fm/s/6f82499c/podcast/rss"],
  },
];
