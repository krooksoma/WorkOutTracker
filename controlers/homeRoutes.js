const router = require('express').Router();
const path = require("path");


// just serve views
router.get("/stats", (req, res) =>{
    console.log(path.join(__dirname, "../public/stats.html"));
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

// router.get("/exercise", (req, res) =>{
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// })


module.exports = router;
