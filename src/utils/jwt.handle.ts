import { sign, verify } from "jsonwebtoken"
import { User } from "../interfaces/user.interface";
const JWT_SECRET = process.env.JWT_SECRET || "QueDiosNosCuide11"

const generateToken = (id: string, user: User) => {
    const {email} = user;
    const jwt = sign({id, email}, JWT_SECRET, {
        expiresIn: '7d'
    });
    return jwt;
};

const verifyToken  = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken };