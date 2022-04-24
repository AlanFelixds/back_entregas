import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {

    async handle(request: Request, response: Response){
        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;

        //isso em cima transformou id em id_delivery, para na parte mais em baixo chamar somente id_delivery

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

        const delivery = await updateDeliverymanUseCase.execute({
            id_deliveryman,
            id_delivery,
        });

        return response.json(delivery);

    }
}