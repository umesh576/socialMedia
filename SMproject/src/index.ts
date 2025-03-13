import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/social.mogo.database";
import userCreate from "./routes/user.routes";
dotenv.config();
const server = express();

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 4000;
// console.log(MONGO_URI);
connectDatabase(MONGO_URI);

server.use(express.urlencoded({ extended: true }));
server.use("/user", userCreate);

server.listen(PORT, () => {
  console.log("server is started at port: ", PORT);
});
