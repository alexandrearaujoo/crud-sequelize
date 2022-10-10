import { Router } from "express";
import UserController from "../controllers/users.controller";

const router = Router();

export const userRouter = () => {
  router.post("", UserController.create);
  router.get("", UserController.index);
  router.get("/:id", UserController.show);
  router.patch("/:id", UserController.update);
  router.delete("/:id", UserController.delete);

  return router;
};
