const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error/error");
const { v4: uuid } = require('uuid')

class ChildRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Name has to be between 3 - 55 characters')
        }


        this.id = obj.id;
        this.name = obj.name;
        this.desc = obj.desc;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        }
        await pool.execute("INSERT INTO `children` (`id`, `name`, `desc`) VALUES(:id, :name, :desc)", {
            id: this.id,
            name: this.name,
            desc: this.desc,
        });
        return this.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
        return results
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `children` WHERE `id` = :id", {
            id,
        });
        return results.length === 0 ? null : new ChildRecord(results[0]);
    }

    async update() {
        console.log('this giftid', this.giftId)
        await pool.execute("UPDATE `children` SET `name` = :name, `desc` = :desc, giftId = :giftId WHERE `id` = :id", {
            id: this.id,
            name: this.name,
            desc: this.desc,
            giftId: this.giftId
        });

    }
}
module.exports = {
    ChildRecord
}