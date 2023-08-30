const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error/error");

class GiftRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
            throw new ValidationError('Name has to be between 3 - 55 characters')
        }

        if (!obj.count || obj.count < 1 || obj.count > 99999) {
            throw new ValidationError('Gifts count has to be between 1 - 999999 pieces')
        }
        this.name = obj.name;
        this.count = obj.count;
        this.id = obj.id;
    }

    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `gifts`");
        return results
    }
}
module.exports = {
    GiftRecord
}