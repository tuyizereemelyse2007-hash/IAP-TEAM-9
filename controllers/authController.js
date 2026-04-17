import fs from 'fs'
export const Login = (req, res) => {
    const { name, password } = req.body;
    const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
    const user = users.find((u) => u.name === name && u.password === password);
    if (!user) {
        return res.status(404).json({ message: "user not found" });


    }
    if (user.password !== password) {
        return res.status(400).json({ message: "Invalid password" })
    }
    res.json({
        message: "login successfully",
        user,
    });


};



function getUsers() {
    const data = fs.readFileSync("./users.json", "utf-8");
    return JSON.parse(data);
}

function saveUsers(users) {
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
}
export const signup = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(404).json({ message: "field empty" });
    }
    const users = getUsers()
    const userExisted = users.find(u => u.email === email);
    if (userExisted) {
        res.status(400).json({ message: "user already existed" });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    }
    users.push(newUser);
    saveUsers(users);

    res.json({
        message: "signup successfully",
        user: newUser

    });
};
export const deleteUser = (req, res) => {
    const { id } = req.params;


    const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));


    const userIndex = users.findIndex(user => user.id == id);


    if (!userIndex) {
        return res.status(404).json({ message: "User not found" });
    }


    users.splice(userIndex, 1)

    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User deleted successfully" });
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

    //const userIndex = users.findIndex(user => user.id == id);

    const userIndex = users.findIndex(user => user.id === Number(id));

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users[userIndex] = {
        ...users[userIndex],
        name: name || users[userIndex].name,
        email: email || users[userIndex].email,
        password: password || users[userIndex].password
    };

    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User updated successfully",
        user: users[userIndex]
    });
};