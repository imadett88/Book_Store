const mongoose = require("mongoose")
const bookShema = new mongoose.Schema({
    name: {type: String,required:true},
    description: {type: String,required:true},
    isbn: {type: String,required:true},
    auteur: {type: String,required:true},
    editeur: {type: String,required:true},
    dat_publication: {type: Date,default:Date.now()},
    image: {type: String},
    category:{
        type:mongoose.Types.ObjectId,
        ref: "Category"
    }
})

const Book=mongoose.model("Book",bookShema)
module.exports=Book