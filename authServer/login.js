import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../model/user.js';

const app = express();

app.get('/', async (req, res) => {
    const user = await User.find({});
    res.json(user);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("goo...");
})

app.post('/login', async (req, res) => {
    //const {email, password} = req.body;
    //const user = await User.findOne({ email });

    // let passwordHash = await bcrypt.hash(user.password, 10);
    // const isMatch = await bcrypt.compare(password, passwordHash);

    //const accessToken = jwt.sign(email, password, process.env.ACCESS_TOKEN_SECRET)
    
    //res.json({ accessToken });
    // if(!user) {
    //     console.log("not matched"); 
    // } else if(!isMatch) {
    //     console.log("not matched"); 
    // } else {
    //     res.send("everything is okay");
    // }
})
app.listen(3001); 