module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#ff7f15',
            'input-height-lg': '54px'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/css/variable.less']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        network: '@/network',
        views: '@/views',
      },
    },
  },
};