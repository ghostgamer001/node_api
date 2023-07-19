const express = require("express");
const axios = require("axios");
const db = require("./database");

const app = express();

app.get("/initialize_database", async (req, res) => {
  const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
  const data = response.data;

  for (const product of data) {
    db.insertProduct(product);
  }

  res.send("Database initialized");
});

app.get("/statistics", async (req, res) => {
  const month = req.query.month;
  const data = await db.getStatistics(month);

  res.send(data);
});

app.get("/bar_chart", async (req, res) => {
  const month = req.query.month;
  const data = await db.getBarChart(month);

  res.send(data);
});

app.get("/pie_chart", async (req, res) => {
  const month = req.query.month;
  const data = await db.getPieChart(month);

  res.send(data);
});

app.get("/combined_data", async (req, res) => {
  const month = req.query.month;
  const statistics = await db.getStatistics(month);
  const barChart = await db.getBarChart(month);
  const pieChart = await db.getPieChart(month);

  const data = {
    statistics: statistics,
    barChart: barChart,
    pieChart: pieChart,
  };

  res.send(data);
});

app.listen(3000, () => console.log("Server started"));
