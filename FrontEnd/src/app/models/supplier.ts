export class Supplier {
    _id!: string;
    number: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    company: string;

    constructor(){
        this.number = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.email = '';
        this.company = '';
    }
    
}
