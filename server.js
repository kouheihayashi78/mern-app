// requireでexpress呼び出す
const express = require("express");
// インスタンス化
const app = express();
// port指定
const PORT = 3306;

// api作成
app.get("/", (req, res) => {
    res.send('hello world')
})
app.get("/users", (req, res) => {
    res.send('ユーザーです')
})

app.listen(PORT, () => console.log("listenでサーバー起動する"))