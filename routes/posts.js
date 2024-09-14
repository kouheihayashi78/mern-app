const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('postRouter');
});

module.exports = router;