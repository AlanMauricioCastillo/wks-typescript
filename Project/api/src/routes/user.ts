import { Router } from "express";

const {
  getUser,
  postUser,
  deleteUser
} = require("./controller/user");

const userRoutes = Router();

userRoutes.get("/", getUser);

userRoutes.post("/", postUser);

userRoutes.delete("/:id", deleteUser);

export default userRoutes;
