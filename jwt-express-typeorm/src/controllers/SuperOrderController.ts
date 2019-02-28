import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import SuperOrder from "../entity/SuperOrder"
import config from "../config/config";

class SuperOrderController {

    static getAll = async (req: Request, res: Response) => {
        
        //Get user from the database
        const superOrderRepository = getRepository(SuperOrder);
        const superOrders= await superOrderRepository.find({});
      
        res.send(superOrders);
    };
}
export default SuperOrderController;