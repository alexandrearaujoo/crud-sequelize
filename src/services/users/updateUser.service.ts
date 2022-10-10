import AppError from "../../errors/app.error";
import bcrypt from "bcrypt";
import { User } from "../../models/User";

interface IUpdateUser {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export const updateUserService = async (id: string, data: IUpdateUser) => {
  const user = await User.findByPk(id);

  if (!user) throw new AppError("User not found", 404);

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  await User.update(data, { where: { id } });

  return 
};
