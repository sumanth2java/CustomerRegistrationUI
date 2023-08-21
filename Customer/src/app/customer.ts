export class Customer {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    streetAddress: string;
    city: string;
    state:string;
    zipcode: string;
    userName:string;
    password: string;

    constructor(firstName: string, lastName: string, dateOfBirth: string, streetAddress: string, city: string,state:string, zipcode: string, userName:string, password: string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dateOfBirth=dateOfBirth;
        this.streetAddress=streetAddress;
        this.city=city;
        this.state=state;
        this.zipcode=zipcode;
        this.userName=userName;
        this.password=password;
    }
}
