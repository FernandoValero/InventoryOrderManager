import { User } from "./user";

export class UserClient extends User{
    override role: 'Client';
    address: string;
    enabled: boolean;

    constructor() {
        super();
        this.role = 'Client';
        this.address = '';
        this.enabled = true;
    }
}
