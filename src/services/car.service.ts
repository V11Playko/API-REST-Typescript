import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/car.model";

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

const updateCar = async (id: string, data: Car) => {
    const responseUpdated = await ItemModel.findOneAndUpdate(
        {_id: id},
         data,
         {
            new: true,
         }
         );
    return responseUpdated;
}

const deleteCar = async (id: string) => {
    const responseDeleted = await ItemModel.findOneAndDelete({_id: id})
    return responseDeleted;
}

export { getCar, getCars, insertCar, updateCar, deleteCar }