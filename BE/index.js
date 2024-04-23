import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookroute from "./route/book.route.js"
import cors from 'cors';
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_DB_URI;

// connect to mongodb

mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.use("/book",bookroute);
app.use("/user",userRoute)
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })