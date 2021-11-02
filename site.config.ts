export const config = {
  siteMeta: {
    title: "yukyu-output-hub",
    teamName: "yukyu",
    description: "yukyuが書いた記事や投稿したものを集約するサイト",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://yukyu-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
  ],
};
