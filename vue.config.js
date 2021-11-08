module.exports = {
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
