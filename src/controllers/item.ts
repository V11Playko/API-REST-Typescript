
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCars, insertCar } from "../services/item";

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error)
    }
};

const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
};

const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
