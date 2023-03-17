//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//https://inversify.io/     !!!!!!!!!!!!!!!!!!!!!!!!1

import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router()

const userRepo = new MongoRepository()//Iniciar repositorio

const userUseCase = new UserUseCase(userRepo)//Iniciamos casos de uso

const userCtrl = new UserController(userUseCase)

route.post(`/user`, userCtrl.insertCtrl)
route.get(`/user`, userCtrl.getCtrl)

export default route