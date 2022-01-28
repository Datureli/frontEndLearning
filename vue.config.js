module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // modify the options...
        options.compilerOptions = { whitespace: 'condense' };
        return options;
      });
  },
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    host: 'localhost'
  },

  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ]
    }
  }
}
