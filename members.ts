import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "blog",
    name: "ブログ",
    bio:"自分に関することを書いていくブログ",
    avatarSrc: "/avatars/blog.svg",
    sources: [
      "https://yukyu.net/rss.xml",
    ],
    websiteUrl:"https://blog.yukyu.net",
  },
  {
    id: "zenn",
    name: "Zenn",
    bio: "技術系のアウトプットを書いてます",
    avatarSrc: "/avatars/zenn.svg",
    sources: ["https://zenn.dev/yu_9/feed"],
    websiteUrl:"https://zenn.dev/yu_9",
  },
   {
    id: "anchor",
    name: "anchor.fm",
    bio: "だらだらと話すポッドキャスト",
    avatarSrc: "/avatars/anchor.svg",
    sources: ["https://anchor.fm/s/6f82499c/podcast/rss"],
    websiteUrl:"https://anchor.fm/yukyu30",
  },
  {
    id: "note",
    name: "note",
    bio: "なんか役に立ちそうなことをまとめておく",
    avatarSrc: "/avatars/note.svg",
    sources: ["https://note.com/yukyu30/rss"],
    websiteUrl:"https://note.com/yukyu30",
  },
  {
    id: "youtube",
    name: "YouTube",
    bio: "たまに作ったものを公開する",
    avatarSrc: "/avatars/youtube.svg",
    sources: ["https://www.youtube.com/feeds/videos.xml?channel_id=UCDVJExPDmVXS-TVoKe49JRg"],
    websiteUrl: "https://www.youtube.com/channel/UCDVJExPDmVXS-TVoKe49JRg",
  },
 
];
