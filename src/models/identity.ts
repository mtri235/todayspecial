export default class Identity{
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly email: string;
    public readonly address: string;

    constructor(firstName: string, lastName: string, email: string, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email; 
        this.address = address;
    }
}