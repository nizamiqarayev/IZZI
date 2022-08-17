export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IZZI',
    htmlAttrs: {
      lang: 'en'
    },
    script: [{src: 'https://kit.fontawesome.com/5221f8b839.js', async: true, crossorigin: 'anonymous'},],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/v-calendar.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],
  loading: { color: "#5920BC" },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next'

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://izzi-api-rest.herokuapp.com/api/v1/',
    
  },
  // proxy: {
  //   '/api/': {
  //     target: 'http://izzi-api-rest.herokuapp.com/api/v1',
  //     pathRewrite: { "^/api/": "" }
  // },

  // },
  auth: {
    

    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: "auth."
        },
        token: {
          prefix: "access",
          property: "access",
          data: "access",
          maxAge: 86400,
          type: "Bearer"
        },
        refreshToken: {
          prefix: "refresh",
          property: "refresh",
          data: "refresh",
          maxAge: 60 * 60 * 24 * 15
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "auth/login/", method: "post" },
          refresh: { url: "auth/refreshToken/", method: "post" },
          user: { url: "auth/user/", method: "get" }
        }
      }
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
}

