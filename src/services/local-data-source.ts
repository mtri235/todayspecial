import Dish from '../models/dish';
import { Person, Role } from '../models/person';
import Identity from '../models/identity';
import { Subject, Observable } from 'rx';
import { DataSource} from './data-source';

export default class LocalDataSource{
    public items: Observable<Dish>;
    private people: Observable<Person>;
    private subject: Subject<Dish>;
    public nick: Person;
    constructor(){
        this.nick = new Person(
            new Identity("Nickyboo", "Dovey", "nick@home.com", "Somewhere in the world"),
            "http://google.com/cat",
            new Set<Role>().add(Role.Cook));

        var tri = new Person(
            new Identity("Trickydoo", "doNickyboo", "tri@home.com", "Somewhere in the world"),
            "http://google.com/cat",
            new Set<Role>().add(Role.Cook));
        
        this.people = Observable.from([tri, this.nick]);

        this.subject = new Subject<Dish>();

        this.items = Observable.from([
            new Dish("1","Chicken dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
            new Dish("2","Duck dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
            new Dish("3","Beef dish", "http://data.whicdn.com/images/11976179/original.jpg", "Yummy", tri, 15, 15.5),
            new Dish("4","Terrible dish", "http://occ144datkn3vrjlq7r63p19.wpengine.netdna-cdn.com/wp-content/uploads/2014/06/dog-1.jpg", "ergh..", this.nick, 15, 15.5),
        ]).concat(this.subject);
    }

    add(item: Dish){
        this.subject.next(item.with(this.nick));
    }
}