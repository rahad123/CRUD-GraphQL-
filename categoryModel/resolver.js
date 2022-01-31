import { Post } from '../postModel/post.js';
import { Category } from './category.js'

const categoryResolvers = {
    Query: {
        getAllCategory: async () => {
            return await Category.find({});
        },
        getSingleCategory: async (_, args, ctx, info) => {
            const { id } = args;
            return await Category.findById(id);
        },
        deleteCategory: async(_, args, ctx, info) => {
            const { id } = args;
            await Category.findByIdAndDelete(id); 
            return "deleted successful";
        }
    },

    Mutation: {
        createCategory: async(_, args, ctx, info) => {
            const { name, slug } = args.category;
            const post = new Category({ name, slug });
            await post.save();
            return post;
        },
        updateCategory: async(_, args, ctx, info) => {
            const { id } = args;
            const { name, slug } = args.category;
            const category = await Category.findByIdAndUpdate(
                id,
                {
                    name,
                    slug
                },
                {new: true}
            )
            console.log("category updated");
            return category;
        }
    }
}

export {categoryResolvers};