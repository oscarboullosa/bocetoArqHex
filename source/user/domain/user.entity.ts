export interface UserEntity {
    uuid:string;//Mantengo desacoplado de la infraestructura. Si yo uso un _id, dejo que mongodb me genere el id y lo que quiero es *desacoplar*
    name:string;
    email:string;
    description:string
}