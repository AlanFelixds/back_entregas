import { Request, Response } from "express";
import { TestUseCase } from "./TestUseCase";


export class TestController {


    async handle(request: Request, response: Response){

        const { tempo } = request.body;
        const testeUseCase = new TestUseCase();

        const result = await testeUseCase.execute(tempo);

        return response.json(result);
    }
}