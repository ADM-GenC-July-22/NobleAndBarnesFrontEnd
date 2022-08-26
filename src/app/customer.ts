import { Address } from "./address";

export class Customer {
constructor(
    public customerID : number,
    public firstName : string,
    public lastName : string,
    public phoneNumber : number,
    public email : string,
    public addressObj : Address
    
    ){}
}