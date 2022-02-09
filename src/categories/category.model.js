import {mongoose} from ".../config.js"

let categorySchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true,
    },
    slug : {
        type : String,
        required : true,
        index : true,
        unique : true,
    }
})

const Category = mongoose.model('Category', categorySchema);
export {Category};