import Dish from './models/dish';
import { DataSource } from './services/data-source';
import LocalDataStore from './services/local-data-source';
import { Observable } from 'rx';
import {inject} from 'aurelia-framework'; 

@inject(LocalDataStore)
export class Eat {
    dishes: Map<string, Dish> =  new Map<string, Dish>();
    query: string;
    skip: Number = 0;
    take: Number = 10;
    constructor(dataSource: DataSource<Dish>){
        var self = this;
        var dataSource = dataSource;
        dataSource.items.subscribe(dish => self.dishes.set(dish.id, dish));
    }
}