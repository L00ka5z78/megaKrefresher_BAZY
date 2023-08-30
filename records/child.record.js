const { pool } = require("../utils/db");
const { ValidationError } = require("../utils/error/error");
const { v4: uuid } = require('uuid')

class ChildRecord {
    static async listAll() {
        const [results] = await pool.execute("SELECT * FROM `children`ORDER BY `name` ASC");
        return results
    }
}
module.exports = {
    ChildRecord
}