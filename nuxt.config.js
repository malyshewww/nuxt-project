// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   // Возможность подключения сторонних ресурсов непосредственнр в head
   app: {
      pageTransition: { name: "page", mode: "out-in" },
      head: {
         link: [
            // {
            //    rel: "stylesheet",
            //    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
            // },
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
});
