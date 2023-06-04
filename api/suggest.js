const express = require('express');
const { format, compareAsc } = require('date-fns');
const { sequelize, Consumption } = require('../configs/db');

const router = express.Router();

router.get('/day', async (req, res) => {
    try {
        const { start_time, end_time } = req.query;
        const suggestions = await sequelize.query(
          `SELECT valid_from, valid_to, id, amount
            FROM consumptions
            WHERE valid_from >= NOW()
              AND valid_to <= NOW() + INTERVAL 10 HOUR;
        `)
        console.log(suggestions);
        res.json({ data: suggestions[0] })
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;

