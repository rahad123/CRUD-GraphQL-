import { Post } from "./post.js";
import { User } from "../model/user.js";
import { Category } from "../categoryModel/category.js";
import { postTypeDefs } from "./typeDef.js";

const postResolvers = {
    Query: {
        hel: () => {
            return "hello rahad";
        },
        getAllPosts: async () => {
            return await Post.find({});
        },
        getSinglePost: async(_, args, ctx, info) => {
            const { id } = args;
            return await Post.findById(id).populate('categories').populate('users');
        },
        deletePost: async(_, args, ctx, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "ok, item has been deleted";
        }
    },

    Mutation: {
        createPost: async(_, args, ctx, info) => {
            const { title, desc, slug } = args.post;
            const post = new Post({ title, desc, slug });
            await post.save();
            return post;
        },

        updatePost: async(_, args, ctx, info) => {
            const { id } = args;
            const { title, desc, slug } = args.post;
            const post = await Post.findByIdAndUpdate(
                id,
                {
                    title,
                    desc,
                    slug
                },
                {new: true}
            )
            console.log("updated");
            return post;   
        }
    }
}

export{ postResolvers};