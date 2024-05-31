// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: false },
   // components: [
   //    // импорт компонентов, основываясь только на их имени, а не на пути (pathPrefix: false)
   //    {
   //       path: "~/components",
   //       pathPrefix: false,
   //    },
   //    // Импорт компонентов из других директорий, помимо components
   //    { path: "~/calendar-module/components" },
   //    { path: "~/user-module/components", pathPrefix: false },
   //    { path: "~/components/special-components", prefix: "Special" },
   // ],
   modules: ["@pinia/nuxt", "@nuxt/content"],
   // Возможность подключения сторонних ресурсов и дополнительных мета тегов непосредственно в head
   app: {
      // pageTransition: { name: "page", mode: "out-in" },
      head: {
         link: [
            {
               rel: "preload",
               href: "/fonts/Montserrat-Regular.woff2",
               as: "font",
               type: "font/woff2",
               crossorigin: "anonymous",
            },
         ],
         meta: [
            { charset: "utf-8" },
            {
               "http-equiv": "X-UA-Compatible",
               content: "IE=edge",
            },
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1, user-scalable=no",
            },
            {
               hid: "apple-mobile-web-app-title",
               name: "apple-mobile-web-app-title",
               content: "Название",
            },
            {
               hid: "apple-mobile-web-app-capable",
               name: "apple-mobile-web-app-capable",
               content: "yes",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "telephone=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "address=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "email=no",
            },
            {
               hid: "format-detection",
               name: "format-detection",
               content: "date=no",
            },
            {
               name: "robots",
               content: "noindex,follow",
            },
         ],
      },
   },
   // Подключение файлов как строк
   // css: ["animate.css"],
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: '@use "~/assets/scss/variables.scss" as *;',
            },
         },
      },
   },
   defaultLocale: "ru",
});
