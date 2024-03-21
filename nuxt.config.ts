// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          name: "title",
          content:
            "CMS expert, Shopify expert, and fullstack website developer.",
        },
        {
          name: "description",
          content:
            "I have been working on essential CMS frameworks like Shopify, and Wordpress CMS, as well as Figma, PHP, and HTML. Expert in HTML, CSS, Magento.",
        },
        {
          name: "keywords",
          content:
            "Shopify expert, full-stack website developer, WordPress CMS expert",
        },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "revisit-after", content: "7 days" },
        { name: "author", content: "Mizanur Rahman" },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
        {
          rel: "stylesheet",
          href: "/themify-icons/themify-icons.css",
        },
        {
          rel: "stylesheet",
          href: "/slick/slick.css",
        },
      ],
      script: [
        // { src: "/jQuery/jquery.min.js" },
        { src: "/js/bootstrap.min.js" },
        { src: "/slick/slick.min.js" },
        { src: "/shuffle/shuffle.min.js" },
        { src: "/js/script.js" },
        { src: "https://kit.fontawesome.com/6908033352.js" },
      ],
    },
  },
  css: [
    "~/assets/plugins/bootstrap/css/bootstrap.min.css",
    "~/assets/css/style.css",
  ],
});
