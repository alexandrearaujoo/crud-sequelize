import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { getUserService } from "../services/users/getUser.service";
import { getUsersService } from "../services/users/getUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

class UserController {
  static async create(req: Request, res: Response) {
    const { firstName, lastName, password } = req.body;

    const user = await createUserService({ firstName, lastName, password });

    return res.status(201).json(user);
  }
  static async index(req: Request, res: Response) {
    const users = await getUsersService();

    return res.json(users);
  }
  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await getUserService(id);

    return res.json(user);
  }
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;

    await updateUserService(id, { firstName, lastName, password });

    return res.json({ message: "User updated" });
  }
  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteUserService(id);

    return res.status(204).json();
  }
}
export default UserController;
