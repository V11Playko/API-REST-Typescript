import { json } from "express";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.models";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { Auth } from "../interfaces/auth.interface";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({email})
    if (checkIs) return "A person with that mail already exists";

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({
        email, 
        password: passHash,
        name,
    });

    return registerNewUser;
};

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email})
    if (!checkIs) return "Not found user";

    const passHash = checkIs.password;
    const isCorrect = await verified(password, passHash);

    if (!isCorrect) return "Wrong password";

    return checkIs;
};

export { registerNewUser, loginUser };