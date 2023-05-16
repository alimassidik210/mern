import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js";

const port = 5000;

const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/fullstack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));

db.once("open", () => console.log("Database Connected ..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
