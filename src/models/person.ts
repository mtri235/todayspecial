import Identity from './identity';

enum Role{ Cook = 1, Eater = 2 };

export default class Person{
    identity: Identity;
    image: string;
    roles: Set<Role>;
}