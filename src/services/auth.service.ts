import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.models";
import { encrypt } from "../utils/bcrypt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email})
    if (checkIs) return "ALREADY_USER";

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({
        email, 
        password: passHash,
        name,
    });

    return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };