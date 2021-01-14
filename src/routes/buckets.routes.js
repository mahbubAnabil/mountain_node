const router = require('express').Router();

//buckets
router.get('/', (req, res) => {
    res.render('pages/buckets');
})

module.exports = router;