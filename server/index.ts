import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import "./db";

import UserController from "./controllers/UserController";
import ChannelController from "./controllers/ChannelController";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/add-user", UserController.add);
app.get("/get-user/:name", ChannelController.get);

app.post("/enable-channel", ChannelController.enable);
app.post("/update-channel", ChannelController.update);

app.get("/check-name/:name", UserController.checkNameExistence);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
