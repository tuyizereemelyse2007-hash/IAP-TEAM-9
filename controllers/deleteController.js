import fs from('fs');
export const deleteusers = (req, res) => {
    const { name, email, password } = req.body
    const users = JSON.stringify(fs.writeFileSync("./user.json", "utf-8"));
    const user = user.find((u) => u.name === name, u.email === email, u.password === password);
    res.json({
        message: "delete user successfully",
        user,
    });

};