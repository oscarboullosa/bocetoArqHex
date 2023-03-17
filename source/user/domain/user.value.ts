//Se encarga de mapear los datos que van a representar a la entidad
//Entidad ==> Interfaz que hace referencia a lo que quiero guardar en mi BBDD. Tiene identificador único y con el value lo que hago es un mapeo
//Dicho mal y pronto: "Cojo y valido" (middleware)


import { v4 as uuid } from "uuid";
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  email: string;
  description: string;

  constructor({ name, email, description }: { name: string; email: string, description?:string }) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.description = description  ?? "default";
  }
}

//Es que a ver lo que se hacía con el modelo vista controlador era ir un poco a saco y simplemente hacer envíos de lo que le interesaba digamos al "negocio".
//Es decir, yo hago un POST y se lo paso al controlador y luego a servicios. Pero es que en servicios estoy ya atacando a infraestructura (BBDD)

//