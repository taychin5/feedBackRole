export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "FeedbackRole",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon01.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap"
      }
    ]
  },

  axios: {
    debug: false,
    progress: true
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/index.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/style-resources"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/device"],

  serverMiddleware: [{ path: "/api", handler: "~/api/index.js" }],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      babelrc: true
    },
    extractCSS: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
};
