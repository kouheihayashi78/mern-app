// なぜわざわざディレクトリを分けるか、api/usersとなるのでエンドポイントを見ればどういうルートか分かりやすくするため
const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('userRouter');
});

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

// jsにおいて、ファイルに存在する変数や関数を別のファイルで実行する（改めて言語化）
module.exports = router;