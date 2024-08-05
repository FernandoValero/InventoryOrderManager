import { User } from "./user";

export class UserAdministrator extends User {
    override role: 'Administrator';
    address: string;
    enabled: boolean;

    constructor() {
        super();
        this.role = 'Administrator';
        this.address = '';
        this.enabled = true;
    }
}
