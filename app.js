const express = require("express");
const app = express();
app.get("/", (req, res) => {
  return res.json({ message: "hello express home" });
});
app.get("/abdulaziz", (req, res) => {
  return res.json({ message: "Abdulaziz ali murad" });
});
app.listen(8000, () => {
  console.log("It works");
});
