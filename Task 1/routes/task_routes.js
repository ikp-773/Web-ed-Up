const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('inner_page')

});

router.get('/keri', (req, res) => {
    res.render('outer_page')

});

router.get('*', (req, res) => {
    res.render('error')
});

module.exports = router;