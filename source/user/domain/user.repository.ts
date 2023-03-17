//Aquí tengo la capa de abstraccion haciendo referencia a los métodos que usaré

import { UserEntity } from "./user.entity";

export interface UserRepository {//referencia a los métodos que usaré en la CAPA DE DATOS
  findUserById(uuid: string): Promise<UserEntity | null>;
  registerUser(user:UserEntity): Promise<UserEntity | null>;
  listUser(): Promise<UserEntity[] | null>;
}

//Aquí defino los métodos que no me interesa con qué capa o servicio externo estén conectando sino a nivel de "negocio" ==> ¿Qué necesito? Buscar un usuario, registrar un usuario, listarlos...