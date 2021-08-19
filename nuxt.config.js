export default {
  target: 'server',
  ssr: true,

  router: {
    base: '/albin/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Фотостудия Albin team studio, фото/видео съёмка',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'format-detection', content: 'telephone=no'},
      {
        hid: 'description',
        name: 'description',
        content:
          'Кинематограф для вашего бизнеса\n' +
          'Креативный видеопродакшн полного цикла, Москва\n' +
          'Реклама, имиджевые и корпоративные фильмы'
      },
      {name: "robots", content: "index, follow"},
      {
        name: "keywords",
        content:
          "фотостудия, " +
          "видео, " +
          "фотосъёмка, " +
          "фото со свадьбы, " +
          "короткометражки, " +
          "съёмка мероприятий, " +
          "видеосъемка всего мероприятия, " +
          "Креатив"
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/css/main.css',
    '@/assets/font/stylesheet.css',
    '@assets/scss/_var.scss'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', { duration: 300, easing: "ease", offset: -100,}],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
