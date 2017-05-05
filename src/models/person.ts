import Identity from './identity';

export enum Role{ Cook = 1, Eater = 2 };

export class Person{
    public readonly identity: Identity;
    public readonly image: string;
    public readonly roles: Set<Role>;

    constructor(identity:Identity, image: string, roles: Set<Role>){
        this.identity = identity;
        this.image = image;
        this. roles = roles;
    }
}