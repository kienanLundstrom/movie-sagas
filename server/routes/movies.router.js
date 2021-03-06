const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Get all  movies from dataBase
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

// Get genres for each movie from dataBase
router.get('/genres/:id', (req, res) => {
    const queryText = `SELECT "movies_genres".id, "genres".name FROM "movies" JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id JOIN "genres" ON "genres".id = "movies_genres".genres_id WHERE "movies".id = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        }).catch((err) => {
            res.sendStatus(500);
            console.log(err);
        })
})
// Get information for selected movie
router.get('/selectedMovie/:id', (req, res) => {
    const queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error in selectedMovie get router', err)
    })
})



module.exports = router;