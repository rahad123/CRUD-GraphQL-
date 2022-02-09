
import { User } from "./user.model.js";
const userResolvers = {
    Query: {
        hello: () => {
            return "hello world";
        },
        getAllUsers: async () => {
            return await User.find({});
        },
        getSingleUser: async(parent, { id }, context, info) => {
            return await User.findById(id);
        },
        deleteUser: async(_, args) => {
            const { id } = args;
            await User.findByIdAndDelete(id);
            return "ok, item has been deleted";
        }
    },

    Mutation: {
        createUser: async(parent, args, context, info) => {
            const {username, email, password} = args.user;
            const user = new User({username, email, password})
            await user.save();
            return user;
            console.log(args.user);
        }, 
        updateUser: async(_, args, context, info) => {
            const { id } = args;
            const {username, email, password} = args.user;
            const user = await User.findByIdAndUpdate( 
                id,
                {
                    username,
                    email,
                    password
                },
                {new: true}
            )
            return user;
        }
    }
    // Mutation: {
    //     createCat: async (_, { name }) => {
    //         const kitty = new Cat({ name });
    //         return kitty.save();
    //     }
    // }
}

export { userResolvers };