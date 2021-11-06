import { Response, Request, Router, NextFunction } from "express";
const {User} = require("../models/User");

const userRoutes = Router();

userRoutes.get("/", (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users: any) => {
      res.send(users);
    })
    .catch((error: any) => next(error));
});

userRoutes.post("/", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser: any) => {
      res.send(createdUser);
    })
    .catch((error: any) => next(error));
});

export default userRoutes;
