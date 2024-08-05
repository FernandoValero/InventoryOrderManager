export class User {
    _id!: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;

    constructor(){
        this.userName = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
        this.role = '';
    }
}
