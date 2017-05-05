import { Person } from './person';

export default class Dish{
    name: string;
    image: string;
    description: string;
    cook: Person;
    serving: Number;
    price: Number;
    id: string;

    constructor(id: string, name: string, image: string, description: string, cook: Person, serving: Number, price:Number){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.cook = cook;
        this.serving = serving;
        this.price = price;
    }

    public with(cook: Person){
        return new Dish(this.id, this.name, this.image, this.description, cook, this.serving, this.price);
    }
}