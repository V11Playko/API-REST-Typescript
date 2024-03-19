import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({_id: id})
    return responseItem
}

const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

export { getCar, getCars, insertCar }