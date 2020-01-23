const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res)=>{
    const queryText = `SELECT * FROM "movies" ORDER BY "id" ASC;`;
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        res.sendStatus(500)
        console.log('error in get movies router,', err)
    })
})







module.exports = router;