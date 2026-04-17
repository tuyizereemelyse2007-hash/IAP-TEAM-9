const express = require('express');
const app = express();
const fs = require("fs")
app.use(express.json);
const port = 3000;




function save_users(users) {
    fs.writeFileSync("users.json", JSON.stringfy(null, 2))
}
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body

    if (!name || !password || !email) {
        return res.status(400).json({ message: "Enter your username and password" })
    }
    const users = get_users();
    const userExists = users.find(u => u.name === name);
    if (userExists) {
        return res.send("username arleady existed");

    }
    const newuser = {
        id: id.Date.now(),
        name,
        password,
    }
    save_users(users);
    users.push(newuser);
    res.send("new user signup successfuly");
});
app.get("/", (req, res) => {
    res.send("server is run now");
});
app.get("/signup", (req, res) => {
    res.send("using post method to run signup now");
});
app.listen(port, () => {
    console.log("server is running on port 3000");
});