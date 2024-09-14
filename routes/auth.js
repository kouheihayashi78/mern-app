const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('authRouter');
});

module.exports = router;