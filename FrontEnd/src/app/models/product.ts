import { Supplier } from "./supplier";

export class Product {
    _id!: string;
    number: string;
    barCode: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    expirationDate: Date;
    creationDate: Date;
    supplier: Supplier;

    constructor(){
        this.number = '';
        this.barCode = 'undefined';
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.description = '';
        this.category = '';
        this.expirationDate = new Date();
        this.creationDate = new Date();
        this.supplier = new Supplier();
    }
}
