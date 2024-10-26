// なぜわざわざディレクトリを分けるか、api/usersとなるのでエンドポイントを見ればどういうルートか分かりやすくするため
const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('userRouter');
});

// ユーザーの取得
router.get('/:id', async (req, res) => {    
    try {
        const user = await User.findById(req.params.id);
        // 分割代入でパスワードと更新日時を表示させないようにする
        // スプレッド構文で上記二つ以外のものを格納してそれらをjson形式で渡す
        // _docはMongooseでRaw値を格納するプロパティ
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (error) {
        return res.status(500).json(error)
    }

})

// ユーザーの更新
// /:idとすることで、ランダムな文字列に対応できるということ
// mongodbだと、ObjectId（ランダムな文字列）でユーザーを判別する
router.put('/:id', async (req, res) => {
    // 「req.params.パラメーター名」でurlに指定されたデータが取得でき、あらかじめパラメータ名をidとしているので、idを取得できる
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            // mongooseでfindByIdAndUpdateが用意されており、一つのユーザーを見つけてそれを更新する
            // urlに入力されたidのユーザーを更新する
            const user = await User.findByIdAndUpdate(req.params.id, {
                // $setは全てのパラメーターという意味
                $set: req.body,
            });

            res.status(200).json('ユーザー情報が更新されました。');
        } catch (error) {
            return res.status(500).json(error)
        }

    } else {
        return res.status(403).send('自分のアカウントの時に情報を更新できます。')
    }
})

// ユーザーの削除
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json('ユーザー情報が削除されました。');
        } catch (error) {
            return res.status(500).json(error)
        }

    } else {
        return res.status(403).send('自分のアカウントの時に情報を削除できます。')
    }
})


// jsにおいて、ファイルに存在する変数や関数を別のファイルで実行する（改めて言語化）
module.exports = router;