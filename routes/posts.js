const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('postRouter');
});

// 投稿を作成する
router.post('/', async(req,res) => {
    // インスタンス化
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (error) {
        // 文字数オーバーや型のエラーなどでここを通る
        return res.status.json(error);
    }
})

module.exports = router;