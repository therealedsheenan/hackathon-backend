const express = require('express');
const { format, compareAsc } = require('date-fns');
const { sequelize, Consumption } = require('../configs/db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { start_time, end_time } = req.query;
        const timeStart = format(new Date(start_time), 'yyyy-MM-dd HH:mm:ss');
        const timeEnd = format(new Date(end_time), 'yyyy-MM-dd HH:mm:ss');

        const cost = await sequelize.query(`
            SELECT SUM(amount) AS total_amount
            FROM consumptions
            WHERE valid_from >= '${timeStart}'
              AND valid_to <= '${timeEnd}'
            LIMIT 1;
        `);

        console.log(cost)

        return res.json({ data: cost });
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;

