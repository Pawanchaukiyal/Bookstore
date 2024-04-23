import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    tag:String,
    image:String,
    genere:String
})

const Book =mongoose.model("Book",bookSchema);

export default Book;