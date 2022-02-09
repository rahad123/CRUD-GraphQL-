import { User } from "../src/users/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const loginResolvers = {
    Mutation: {
        register: async( _, args, ctx, info ) => {
            const { username, email, password } = args.user;
            //console.log(username, email, password);
            try {
                const hashedPassword = await bcrypt.hash(password, 20);
                let user = new User({
                    username: username,
                    email: email,
                    password: hashedPassword
                })
                await user.save();
            } catch {
                console.log("not found");
            }
        },

        // createUser: async(_, args, ctx, info) => {
        //     const 
        // },

        login: async( _, args, context, info) => {
            const { email, password } = args.user;
            const user = await User.findOne({ email });

            if(!user) {
                console.log("user is not available.")
                return null;
            }

            let passwordHash = await bcrypt.hash(user.password, 10);
            const isMatch = await bcrypt.compare(password, passwordHash);

            if(!isMatch) {
                return null;
            }
            
            const accessToken = jwt.sign({user}, 
                 process.env.ACCESS_TOKEN_SECRET, 
                 {  
                     expiresIn: "1min"
                 });
            
            console.log(accessToken);
            return user;
        }
    }
}

export { loginResolvers };