const express = require('express');
const { format, compareAsc } = require('date-fns');
const { sequelize, Consumption } = require('../configs/db');

const router = express.Router();

router.get('/day', async (req, res) => {
    try {
        const { start_time, end_time } = req.query;
        const date = format(new Date(start_time), 'yyyy-MM-dd')
        console.log(date)
        // const suggest = await sequelize.query(`-- select 'valid_from', 'valid_to', 'id', 'amount' from consumptions limit 3`);
        // const suggestion = await Consumption.
        const suggestions = await sequelize.query(
          `SELECT valid_from, valid_to, id, amount
           from consumptions
           WHERE DATE (valid_from) = '${date}'
           ORDER BY 'amount' ASC LIMIT 5;`
        );
        // console.log(suggestions)
        res.json({data: suggestions})
    } catch (e) {
        console.log(e)
    }
    // const test = await Consumption.findAll();

});

module.exports = router;

