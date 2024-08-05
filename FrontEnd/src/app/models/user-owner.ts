import { User } from "./user";

export class UserOwner extends User{
    override role: 'Owner';

    constructor(){ super();
        this.role = 'Owner';
    }
}
