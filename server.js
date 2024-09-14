// requireでexpress呼び出す
const express = require("express");
// インスタンス化
const app = express();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
// port指定
const PORT = 3306;

// ミドルウェア
// users.jsで設定したルートは下記をデフォルトルートとして使う
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

// api作成
app.get("/", (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log("listenでサーバー起動する"))