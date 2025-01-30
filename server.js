import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3200;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "chinweiketwitter@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "<https://github.com/Chinweike99>",
  };
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server successfully running on http://localhost:${port}`);
});
