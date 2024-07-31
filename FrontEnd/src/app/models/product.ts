import { Supplier } from "./supplier";

export class Product {
    _id!: string;
    number: string;
    barCode: string;
    name: string;
    price: string;
    quantity: number;
    description: string;
    category: string;
    expirationDate: Date;
    creationDate: Date;
    supplier: Supplier;

    constructor(){
        this.number = '';
        this.barCode = '';
        this.name = '';
        this.price = '';
        this.quantity = 0;
        this.description = '';
        this.category = '';
        this.expirationDate = new Date();
        this.creationDate = new Date();
        this.supplier = new Supplier();
    }
}
