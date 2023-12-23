import { env } from './src/env'

const baseBuildTranspileList = [
  'bcryptjs',
  'trpc-nuxt',
  'qcloud-cos-sts',
  '@juggle/resize-observer',
  // '@vueuse/nuxt',
]

const devBuildTranspileList = [...baseBuildTranspileList]

const productionBuildTranspileList = [...baseBuildTranspileList, 'naive-ui', 'vueuc', '@css-render/vue3-ssr', 'dayjs']

const isProduction = env.NODE_ENV === 'production'
const isDev = env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devtools: { enabled: true },
  typescript: {
    strict: false,
  },
  modules: [
    '@hebilicious/authjs-nuxt',
    '@nuxtjs/tailwindcss',
    // 'nuxt-lodash', // https://nuxt.com/modules/lodash
    'nuxt-icon', // https://github.com/nuxt-modules/icon
    '@vueuse/nuxt', // https://nuxt.com/modules/vueuse
  ],

  build: {
    transpile: isProduction ? productionBuildTranspileList : devBuildTranspileList,
  },

  sourcemap: {
    server: isDev,
    client: isDev,
  },

  vite: {
    optimizeDeps: {
      include: isDev ? ['naive-ui', 'vueuc'] : [],
    },
    define: {
      'import.meta.vitest': 'undefined',
    },
  },

  devServer: {
    port: parseInt(`${env.PORT || 3000}`, 10),
  },

  // module 的相关配置
  // dayjs: {
  //   locales: ['en', 'zh-cn'],
  //   plugins: ['relativeTime', 'utc', 'timezone'],
  //   defaultLocale: 'zh-cn',
  //   defaultTimezone: 'Asia/Shanghai',
  // },
  alias: {
    cookie: 'cookie',
  },

  runtimeConfig: {
    authJs: {
      secret: env.JWT_SECRET || 'test', // You can generate one with `openssl rand -base64 32`
    },
    public: {
      authJs: {
        baseUrl: env.NEXTAUTH_URL || 'http://localhost:3000', // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
  },

  tailwindcss: {
    config: {
      content: ['src/**/*.{vue}'],
      corePlugins: {
        preflight: false,
      },
      experimental: {
        templateInterpolation: true,
      },
    },
  },
})
