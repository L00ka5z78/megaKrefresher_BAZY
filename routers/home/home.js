const { Router } = require("express");

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        res.redirect('/children')
    })

module.exports = {
    homeRouter
}