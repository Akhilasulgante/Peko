import express from "express";
import { databaseManager } from "../db/MyMongoDB.js";

const router = express.Router();

// By Zhiyi Jin
/* Get all dishes */
router.get("/api/getAllMeals", async (req, res) => {
  let data;
  try {
    data = await databaseManager.read("dishes", {});
  } catch (err) {
    console.log("err", err);
  }
  res.json(data);
});

/* Filter dishes by options */
router.post("/api/filterMeals", async (req, res) => {
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

// When clicking the refresh button of the brower in the url like /meals,
// there will be a cannot get /meals error. This is because the browser 
// will make a GET request to /meals which will fail since there is no logic
// for handling that request. Here is a blog about this:
// https://ui.dev/react-router-cannot-get-url-refresh

export default router;
