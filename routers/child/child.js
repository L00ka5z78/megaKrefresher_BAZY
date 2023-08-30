const { Router } = require("express");
const { ChildRecord } = require("../../records/child.record");
const { GiftRecord } = require("../../records/gift.record");
const { ValidationError } = require("../../utils/error/error");
const childRouter = Router();

childRouter
    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();
        res.render('children/list', {
            childrenList,
            giftsList
        })
    })

    .post('/', async (req, res) => {

        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child')
    })

    .patch('/gift/:childId', async (req, res) => {
        const child = await ChildRecord.getOne(req.params.childId)

        if (child === null) {
            throw new ValidationError('Child with given ID not found...')
        }
        // console.log(child)
        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId)

        child.giftId = gift?.id ?? null;
        await child.update();

        res.redirect('/child')

    })

module.exports = {
    childRouter
}