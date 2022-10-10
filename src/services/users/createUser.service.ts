import bcrypt from "bcrypt";
import { User } from "../../models/User";

interface ICreateUser {
  firstName: string;
  lastName: string;
  password: string;
}

export const createUserService = async (data: ICreateUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    password: hashedPassword,
  });

  return newUser;
};
