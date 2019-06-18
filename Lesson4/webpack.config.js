const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path:  path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        //если ты встретишь файл cssпримени эти loader. 
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        //css-loader смотрит css  и применяет его к dist/main.js 
        // - помещает ссылку linr css в head  в dist/index.html
      }
    ]
  }
}