const router = require('express').Router();
// ユーザースキーマを呼び出す
const User = require('../models/User');

router.get('/', (req, res) => {
    res.send('authRouter');
});

// ユーザー登録
router.post('register', async(req, res) => {
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

module.exports = router;