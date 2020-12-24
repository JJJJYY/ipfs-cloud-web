module.exports = {
  devServer: {
    port: 8081,
    disableHostCheck: true,
    open: false,
    proxy: {
      '/api': {
        target: 'http://api.ipfscloud.c28e9d7b637474c3a98b2ed559c29434c.cn-hongkong.alicontainer.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
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
  }
};