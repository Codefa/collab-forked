const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue2-google-maps',
    {
      src: '~/plugins/siema-slider.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://rocketgo.it'
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // if (!process.client) {
      //   // This instructs Webpack to include `vue2-google-maps`'s Vue files
      //   // for server-side rendering
      //   config.externals.splice(0, 0, function (context, request, callback) {
      //     if (/^vue2-google-maps($|\/)/.test(request)) {
      //       callback(null, false)
      //     } else {
      //       callback()
      //     }
      //   })
      // }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://rocketgo.it',
    gAPIKey: 'AIzaSyCe1exctmeJjIb4guyT6newSpyJ7kA3aLc'
  }
}
