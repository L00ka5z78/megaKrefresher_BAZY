const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error/error");
const { v4: uuid } = require('uuid')

class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Gifts name has to be between 3 - 55 characters')
        }

        if (!obj.count || obj.count < 1 || obj.count > 99999) {
            throw new ValidationError('Gifts count has to be between 1 - 999999 pieces')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.count = obj.count;
        this.desc = obj.desc;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        }
        await pool.execute("INSERT INTO `gifts` VALUES(:id, :name, :count, :desc)", {
            id: this.id,
            name: this.name,
            count: this.count,
            desc: this.desc,
        });
        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `gifts`");
        return results.map(obj => new GiftRecord(results[0]));
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `gifts` WHERE `id` = :id", {
            id,
        });
        return results.length === 0 ? null : new GiftRecord(results[0]);
    }

    async countGivenGifts() {
        const [{ count }] = await pool.execute("SELECT COUNT(*) AS `count` FROM `children` WHERE `giftId` = :id", {
            id: this.id,
        });
        return count;
    }
}
module.exports = {
    GiftRecord
}