const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../src/public'),
  devServer: {
    proxy: {
      '/api/v2': {
        target: 'https://carros-springboot.herokuapp.com'
      }
    }
  }
}
