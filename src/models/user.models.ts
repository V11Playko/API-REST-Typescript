import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";


const UserSchema = new Schema<User> (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: "Soy la descripcion :v"
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;