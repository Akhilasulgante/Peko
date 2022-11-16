var express = require("express");
var router = express.Router();

const databaseManager = require("../db/MyMongoDB");

/* GET all dishes. */
router.post("/api/dishes", async (req, res) => {
  console.log(req.body.type);
  console.log(req.body.taste);
  console.log(req.body.price);
  let data;
  try {
    data = await databaseManager.read("dishes", {
      price: { $lt: parseInt(req.body.price) },
      type: req.body.type,
      taste: req.body.taste,
    });
  } catch (err) {
    console.log("err", err);
  }
  res.json(data);
});

//Akhila
router.post("/register", async (req, res) => {
  console.log("sending to backend", req.body.fname);
  // res.status(200);
  try {
    let dbstate = await databaseManager.insertuser("users", req.body);
    if (dbstate) {
      res.status(200).json({ success: true });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  console.log("sending to login req backend");
  // res.status(200);
  try {
    let dbstate = await databaseManager.auth("users", req.body);
    res.status(200).json({ success: true });
    if (dbstate) {
      console.log("in db");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
