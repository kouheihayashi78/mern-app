const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

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

// 投稿を更新する
router.put('/:id', async (req, res) => {
    try {
        // urlのpostのidから投稿を探して取得する
        const post = await Post.findById(req.params.id);
        // 投稿があり、そのuserIdがbodyに含まれるuserId(つまり投稿者本人)の場合、編集できる
        if (post.userId === req.body.userId) {
            await post.updateOne({
                $set: req.body
            })
            return res.status(200).json('投稿が編集されました。')
        } else {
            return res.status(403).json('投稿者本人しか編集できません。')
        }
    } catch (error) {
        return res.status(403).json(error)
    }
})

// 投稿を削除する
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            return res.status(200).json('投稿を削除しました。')
        } else {
            return res.status(403).json('投稿者本人しか削除できません。');
        }
    } catch (error) {
        return res.status(403).json(error);
    }
})

// 特定の投稿を取得する
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        const {updatedAt, ...other} = post._doc;
        return res.status(200).json(other)
    } catch (error) {
        return res.status(500).json(error);
    }
})

// 特定の投稿にいいね!を押す
router.put('/like/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // 投稿にいいねが押されていなければ、いいねする
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: { // $pushで配列に追加
                    likes: req.body.userId
                }
            })
            return res.status(200).json('投稿にいいねを押しました。')
        // 投稿にいいねがすでに押されていたら、いいねを取り除く
        } else {
            await post.updateOne({
                $pull: {
                    likes: req.body.userId
                }
            })
            return res.status(200).json('投稿のいいねを削除しました。')
        }
    } catch (error) {
        return res.status(500).json(error);
    }
});

// タイムラインの投稿を取得
// またurlを下記のように命名したのは、特定の投稿を取得するapiが「/:id」としており、「timeline」だけだと「/:id」と認識されてしまうから
router.get('/timeline/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }
        // 自分の投稿を全て取得
        const userPosts = await Post.find({
            userId: currentUser._id
        })
        // 自分がフォローしているユーザーの投稿を全て取得
        // Promise.allを使う理由は、currentUserはawaitを使っており、いつ戻ってくるかわからないため、このように記述していつでも取得できるように待つ
        const followingPosts = await Promise.all(
            // followingsは配列のため、map関数を用いて一人一人取り出して、検索する
            (currentUser.followings || []).map((followId) => {
                // 該当する投稿を全て取得する
                return Post.find({ userId: followId });
            })
        )
        // concatで配列を組み合わせる、スプレッド構文で一つ一つ投稿を取り出す
        return res.status(200).json(userPosts.concat(...followingPosts));
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;