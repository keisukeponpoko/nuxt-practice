module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gomi-cheet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'こちらDescriptionです' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/pwa', { icon: false }],
    ['@nuxtjs/axios']
  ],
  axios: {
    debug: false,
    baseURL: process.env.NODE_ENV == 'production' ? 'https://murmuring-garden-85440.herokuapp.com/' : 'http://localhost:3000',
    proxyHeaders: false,
    credentials: false
  }
  // plugins: [
  //   { src: "~plugins/persistedstate.js", ssr: false }
  // ]
}
