import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";


const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

export { getCars, insertCar }