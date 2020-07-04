const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const port = 3000;

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  console.log("...NEW GET REQUEST...");
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    console.log("...new user added...");
    const user = { name: req.body.name, password: hashedPass };
    users.push(user);
  } catch (error) {
    res.status(500).send();
  }
});

app.post("/users/login", async (req, res) => {
  const user = users.find(u => u.name === req.body.name);
  if (user === null) {
    return res.status(400).send("Cannot find user!");
  }
  console.log(user.password);
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("login success..");
    }else{
      res.send('login not allowed..')
    }
  } catch (error) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log(`yo yo.. server.js running on http://localhost:${port}`);
});
