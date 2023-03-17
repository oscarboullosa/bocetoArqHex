//Aquí yo creo que se genera un problema y me da "miedo" que nos pueda pasar, que es: ¿Qué defino como caso de uso en un proyecto sencillo?
//Si yo tengo un proyecto complejo un caso de uso podría ser algo como calcular cual es el menor tiempo posible de entrega de un producto de acuerdo a si el envío nos lo hace Correos, otra empresa de repartos...

//Por eso quiero que se entienda que esto es algo muuuuuuuuuuy simple y que simplemente pongo ejemplos "tontos", no significa que sea así tal cual (es una simplificación)
//Lo que te importa que haga la logica de negocio
import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}//inyeccion de dependencias
//readonly==>Modo lectura
public registerUser = async ({ name, email, description }: { name: string, email: string, description?: string }) => {
    const userValue = new UserValue({ name, email });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated
  }

  public  getDetailUSer = async (uuid:string) => {
    const user = await this.userRepository.findUserById(uuid)
    return user
  }
}

//Mucho ojo con el orden y el DDD
//Aplicacion puede conocer a dominio, pero NO a infraetsructura
//Dominio no conoce a nadie de aplicacion ni nadie de infraestructura
