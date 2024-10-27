const mongoose = require('mongoose');

// スキーマをインスタンス化
const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        tweet: {
            type: String,
            max: 200,
            required: true,
        },
        img: {
            type: String, // パス指定
        },
        likes: {
            type: Array, // 誰がいいねをしたのか格納する配列
            default: [],
        }
    }, 
    { timestamps: true }
);

// 他のファイルでも使えるようにエクスポート
module.exports = mongoose.model('Post', PostSchema);