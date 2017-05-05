import Dish from './models/dish';
import { DataSource } from './services/data-source';
import LocalDataSource from './services/local-data-source';
import {inject} from 'aurelia-framework'; 

@inject(LocalDataSource)
export class Cook{
    public dishes: Map<string, Dish> = new Map<string, Dish>();
    public newDish: Dish = new Dish(null,null,null,null,null, 0, 0);
    private userEmail: string;
    dataSource: DataSource<Dish>;

    constructor(dataSource: DataSource<Dish>){
        var self = this;
        this.userEmail = "nick@home.com";
        this.dataSource = dataSource;
        this.dataSource.items
            .filter(dish => dish.cook.identity.email == this.userEmail)
            .subscribe(dish => self.dishes.set(dish.id, dish));
    }

    createNewDish(){
        this.dataSource.add(this.newDish);
    }
}