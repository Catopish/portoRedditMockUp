const { default: axios } = require("axios");
const express = require("express");
const app = express();
const path = require("path");

const eldenring = require("./eldenring.json");
const chickens = require("./chicken.json");
const unixporn = require("./unixporn.json");

app.use(express.urlencoded({ extended: true }));
// app.use(express.json);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/show", (req, res) => {
  a;
});

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/r/eldenring", (req, res) => {
  const redditApi = eldenring.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

app.get("/r/chickens", (req, res) => {
  const redditApi = chickens.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

app.get("/r/unixporn", (req, res) => {
  const redditApi = unixporn.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

const { default: axios } = require("axios");
const express = require("express");
const app = express();
const path = require("path");

const eldenring = require("./eldenring.json");
const chickens = require("./chicken.json");
const unixporn = require("./unixporn.json");

app.use(express.urlencoded({ extended: true }));
// app.use(express.json);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/show", (req, res) => {
  a;
});

app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/r/eldenring", (req, res) => {
  const redditApi = eldenring.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

app.get("/r/chickens", (req, res) => {
  const redditApi = chickens.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

app.get("/r/unixporn", (req, res) => {
  const redditApi = unixporn.data.children;
  console.log(redditApi);
  if (redditApi) {
    res.render("subreddit", { redditApi });
  } else {
    res.send("failed");
  }
});

// app.get("/r/:subreddit", async (req, res) => {
//   try {
//     console.log(`Fetching subreddit: ${req.params.subreddit}`);
//     const { subreddit } = req.params;
//     const response = await axios.get(
//       uDpKkmEd0OYwwR006SPlB6R3efpRHw`https://www.reddit.com/r/${subreddit}/hot.json`,
//     );
//     console.log(`Reddit API response status: ${response.status}`);
//     const redditApi = response.data.data.children;
//
//     if (redditApi && redditApi.length > 0) {
//       console.log(`Rendering subreddit page with ${redditApi.length} posts.`);
//       res.render("subreddit", { redditApi });
//     } else {
//       console.log("No posts found or subreddit does not exist.");
//       res.send("No posts found or subreddit does not exist.");
//     }
//   } catch (error) {
//     console.error(`Error fetching subreddit data: ${error.message}`);
//     res.status(500).send("An error occurred while fetching subreddit data.");
//   }
// });
app.get("/r/:subreddit", async (req, res) => {
  const { subreddit } = req.params;
  const response = await axios.get(
    `https://www.reddit.com/r/${subreddit}/hot.json`,
  );
  const redditApi = response.data.data.children;
  try {
    if (redditApi) {
      res.render("subreddit", { redditApi });
    } else {
      res.send("failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching subreddit data.");
  }
});

app.listen(3000, () => {
  console.log("Port 3000");
});

// app.get("/r/:subreddit", async (req, res) => {
//   try {
//     console.log(`Fetching subreddit: ${req.params.subreddit}`);
//     const { subreddit } = req.params;
//     const response = await axios.get(
//       uDpKkmEd0OYwwR006SPlB6R3efpRHw`https://www.reddit.com/r/${subreddit}/hot.json`,
//     );
//     console.log(`Reddit API response status: ${response.status}`);
//     const redditApi = response.data.data.children;
//
//     if (redditApi && redditApi.length > 0) {
//       console.log(`Rendering subreddit page with ${redditApi.length} posts.`);
//       res.render("subreddit", { redditApi });
//     } else {
//       console.log("No posts found or subreddit does not exist.");
//       res.send("No posts found or subreddit does not exist.");
//     }
//   } catch (error) {
//     console.error(`Error fetching subreddit data: ${error.message}`);
//     res.status(500).send("An error occurred while fetching subreddit data.");
//   }
// });
// app.get("/r/:subreddit", async (req, res) => {
//   const { subreddit } = req.params;
//   const response = await axios.get(
//     `https://www.reddit.com/r/${subreddit}/hot.json`,
//   );
//   const redditApi = response.data.data.children;
//   try {
//     if (redditApi) {
//       res.render("subreddit", { redditApi });
//     } else {
//       res.send("failed");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred while fetching subreddit data.");
//   }
// });

app.listen(3000, () => {
  console.log("Port 3000");
});
