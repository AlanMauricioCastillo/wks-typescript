import { Response, Request, NextFunction } from "express";
const { User } = require("../../models/User");

const getUser = (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users: any) => {
      res.send(users);
    })
    .catch((error: any) => next(error));
};

const postUser = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  User.create(user)
    .then((createdUser: any) => {
      res.send(createdUser);
    })
    .catch((error: any) => next(error));
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((userToDelete: any) => {
      console.log(userToDelete);
      userToDelete
        .destroy()
        .then(() => {
          User.findAll()
            .then((users: any) => {
              res.send(users);
            })
            .catch((error: any) => next(error));
        })
        .catch((error: any) => next(error));
    })
    .catch((error: any) => next(error));
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
};
