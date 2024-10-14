const router = require('express').Router();
// ユーザースキーマを呼び出す
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('authRouter');
});

// ユーザー登録
router.post('/register', async(req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        const createUser = await newUser.save();
        return res.status(200).json(createUser);
    } catch (err) {
        return res.status(500).json(err)
    }
})

// ログイン
router.post('/login', async (req, res) => {
    try {
        // mongooseのfindOneメソッドを使い、Userから一人だけ取得
        const user = await User.findOne({ email: req.body.email });

        // もしuser変数がなければ、ユーザーが見つかりませんと表示する
        if(!user) return res.status(404).send('ユーザーが見つかりません');

        // 入力があったパスワードと登録してあるパスワードの整合性を確かめる
        const validatedPassword = req.body.password === user.password;

        // 400はクライアントの不正なリクエストでサーバーが処理できなかったことを示す
        if(!validatedPassword) return res.status(400).json('パスワードが違います');

        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;