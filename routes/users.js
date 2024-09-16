// なぜわざわざディレクトリを分けるか、api/usersとなるのでエンドポイントを見ればどういうルートか分かりやすくするため
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('userRouter');
});

// jsにおいて、ファイルに存在する変数や関数を別のファイルで実行する（改めて言語化）
module.exports = router;