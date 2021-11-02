import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "blog",
    name: "ブログ",
    bio:
      "自分に関することを書いていくブログ",
    avatarSrc: "/avatars/blog.png",
    sources: [
      "https://blog.yukyu.net/rss.xml",
    ],
  },
  {
    id: "john_doe",
    name: "John Doe",
    role: "SRE",
    bio: "Site Reliability Engineer.",
    avatarSrc: "/avatars/doe.jpg",
    sources: ["https://note.com/catnose/rss"],
    excludeUrlRegex: "n3a59e3cdd820",
    twitterUsername: "catnose99",
  },
  {
    id: "amanda",
    name: "Amanda",
    role: "Frontend dev",
    bio: "Frontend developer,",
    avatarSrc: "/avatars/amanda.jpg",
    sources: ["https://qiita.com/catnose99/feed.atom"],
    twitterUsername: "catnose99",
  },
  {
    id: "takada_junji",
    name: "Takada Junji",
    role: "Designer",
    bio: "Designing all of the apps in Foo company.",
    avatarSrc: "/avatars/junji.jpg",
    sources: [],
  },
  {
    id: "ota_naoko",
    name: "太田 直子",
    role: "Researcher",
    bio: "Some texts here",
    avatarSrc: "/avatars/naoko.jpg",
    sources: [],
  },
  {
    id: "alexandria",
    name: "Alexandria",
    role: "Tech Lead",
    bio: "IT professional with 3 years of experience",
    avatarSrc: "/avatars/alexandria.jpg",
    sources: [],
  },
];
