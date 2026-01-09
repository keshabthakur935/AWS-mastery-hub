const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.post("/api/contact", (req, res) => {
  console.log("Contact Data:", req.body);
  res.json({ message: "Form submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
