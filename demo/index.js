const express = require("express");
const students = require("./student");
const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log("Server was runing Successfully ");
});

app.get("/", (req, res) => {
  //res.send("<h1>HELLO WELCOME BACK</h1>")
  res.json({ message: "API is working" });
});

app.get("/api/students", (req, res) => {
  res.json(students);
});
app.post("/api/students", (req, res) => {
  if (!req.body.email) {
    res.status(400);
    return res.json({ Error: "API is not working" });
  }

  const user = {
    id: students.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  };

  students.push(user);
  res.json(user);
});

app.put("/api/students/:id", (req, res) => {
  let id = req.params.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let gender = req.body.gendr;
  let ip_address = req.body.ip_address;

  let index = students.findIndex((students) => {
    return students.id == Number.parseInt(id);
  });

  console.log(id, req.body, index);

  if (index >= 0) {
    let std = students[index];
    (std.first_name = req.body.first_name),
      (std.last_name = req.body.last_name),
      (std.email = req.body.email),
      (std.gender = req.body.gender),
      (std.ip_address = req.body.ip_address);

    res.json(std);
  } else {
    res.status(404);
    res.end();
  }

  console.log(id);
  res.json(id);
});

app.delete("/api/students/:id", (req, res) => {
  let id = req.params.id;

  let index = students.findIndex((students) => {
    return students.id == Number.parseInt(id);
  });

  if (index >= 0) {
    let std = students[index];
    students.splice(index, 1);

    res.json(std);
  } else {
    res.status(404);
  }

  console.log(id);
  res.json(id);
});
