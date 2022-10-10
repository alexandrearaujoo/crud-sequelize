import AppError from "../../errors/app.error";
import { User } from "../../models/User";

export const deleteUserService = async (id: string) => {
  const user = await User.findByPk(id);

  if (!user) throw new AppError("User not found", 404);

  await User.destroy({ where: { id } });

  return 
};
