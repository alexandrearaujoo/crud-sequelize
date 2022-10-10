import { User } from "../../models/User";

export const getUsersService = async () => {
  const users = await User.findAll();

  return users;
};
