
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";


export class MySqlRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({uuid})
        return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = await UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user
    }
    
} //Creo que no vamos a usar MySQL, pero como CREO y no sé 100% por si acaso voy a dejar esto por aquí.
//También haré un mock por si acaso. Pero esto es igual o sea son alternativas que nunca vienen mal tener por aquí