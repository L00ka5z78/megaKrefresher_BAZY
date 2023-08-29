const { Router } = require("express");
const { ChildRecord } = require("../../records/child.record");
const giftRouter = Router();

giftRouter
    .get('/', (req, res) => {
        // const childrenList = ChildRecord.listAll();

        res.render('gift/list', {
            // childrenList
        })
    })

module.exports = {
    giftRouter
}