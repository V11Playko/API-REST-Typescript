
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar } from "../services/item";

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
};

export { postItem };
