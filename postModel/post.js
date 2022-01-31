import { mongoose } from "../config.js";

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        unique : true
    },
    desc : {
        type : String,
        required : true,
    },
    slug : {
        type : String,
        required : true,
        index : true,
        unique : true
    },
    categories : [{
        type : mongoose.Types.ObjectId,
        ref : "Category"
    }], 
    users : [{
        type : mongoose.Types.ObjectId,
        ref : "User"
    }]
})

const Post = mongoose.model('post', postSchema);
export {Post};