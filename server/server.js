const express = require("express");
const cors = require("cors");

const cache = {};

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/github/:username", async (req, res) => {
  try {
    const username = req.params.username;

    if (
      cache[username] &&
      Date.now() - cache[username].timestamp < 60000
    ) {
      console.log(`Serving ${username} from cache`);
      return res.json(cache[username].data);
    }

    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    const data = await response.json();

    cache[username] = {
      data,
      timestamp: Date.now(),
    };

    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
});

app.get("/api/github/:username/repos", async (req, res) => {
  try {
    const username = req.params.username;
    const repoKey = `${username}-repos`;

    if (
      cache[repoKey] &&
      Date.now() - cache[repoKey].timestamp < 60000
    ) {
      console.log("Serving repos from cache");
      return res.json(cache[repoKey].data);
    }

    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const data = await response.json();

    cache[repoKey] = {
      data,
      timestamp: Date.now(),
    };

    res.json(data);

  } catch (error) {
    res.status(500).json({
      error: "Server Error",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});