// requireでexpress呼び出す
const express = require("express");
// インスタンス化
const app = express();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
// port指定
const PORT = 3306;

// mongoose読み込み
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// dotenvのconfig関数を宣言し、envファイルを使えるようにする
require('dotenv').config();

// db接続（今回はmongodb）
mongoose.connect(
    // 「process.env.〇〇」でenvファイルに記述した内容を読み込める
    process.env.MONGOURL
).then(() => {
    console.log('mongodbとの接続中です・・・');
}).catch((err) => {
    console.error(err);
})

// ミドルウェア
app.use(express.json());
// routeディレクトリ配下で作成したファイルの設定したルートは下記をデフォルトルートとして使う
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log("listenでサーバー起動する"))