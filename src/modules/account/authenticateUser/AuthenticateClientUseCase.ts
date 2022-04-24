import { prisma } from "../../../database/prismaClient";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient{
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {

    async execute({username, password} : IAuthenticateClient){

        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        })

        if (!client) {
            throw new Error("Username or password invalid");
        }
        
        const compareMatch = await compare(password, client.password);
        if(!compareMatch){
            throw new Error("Username or password invalid");
        }

        const token = sign({username}, "12345", { subject: client.id, expiresIn: "1d"});


        return token;

    }
}