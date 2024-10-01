import { User } from "./user";

export class UserDeliberyPerson extends User{
    override role: 'DeliveryPerson';
    address: string;
    enabled: boolean;

    constructor(){ super();
        this.role = 'DeliveryPerson';
        this.address = '';
        this.enabled = true;
    }
}
