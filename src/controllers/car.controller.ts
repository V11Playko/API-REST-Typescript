
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCar, getCars, insertCar, updateCar, deleteCar } from "../services/car.service";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const {id} = params
        const response = await getCar(id)
        const data = response ? response : "NOT FOUND"
        res.send(data)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM', error)
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

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const { id } = params
        const responseUpdated = await updateCar(id, body)
        res.send(responseUpdated)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', error)
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

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const {id} = params
        const response = await deleteCar(id)
        res.send(response)
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
