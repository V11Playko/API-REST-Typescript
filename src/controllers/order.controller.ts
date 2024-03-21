
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext.interface";

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Esto solo lo ve las personas con sesion JWT",
            user: req.user
        });
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ORDERS', error);
    }
};

export { getOrders };
