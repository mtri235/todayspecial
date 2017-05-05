import Dish from '../models/dish';
import Observable from 'rx';

export interface DataSource<T>{
    items: Observable<T>;
    add(item: T);
}