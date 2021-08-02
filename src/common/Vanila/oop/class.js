

class DeleteUserAction{
constructor(userId) {
    this.type = 'DELETE_USER';
        this.payload = {
            userId: userId
        }
}
}
const action1 = new DeleteUserAction(432432);
const action2 = new DeleteUserAction(423342);
console.log(action1);
console.log(action2);

class User{
    _name = '';
    constructor(name, city, dob) {
        this._name = name;
        this.city = city;
        this.dateOfBirth = dob;
        this.counter = 0;
    }
    get name(){
        return this._name + '!!!';
    }
    set name(value){
        if(value === 'Vanya') throw Error('Vanya is not allowed name');
        this._name = value;
    }
    hello(){
        this.counter++
        console.log(`I am ${this._name} from ${this.city}`);
    }
}
const u1 = new User("Bob", "Grodno", new Date(1999, 1, 23))
u1.name = 'Mike'
console.log(u1.name)

class Coder extends User{
    constructor(name, city, dob, tech) {
        super(name, city, dob);
        this.tech= tech;
    }
    code(){
        console.log(`I am ${this._name}, here is my code${this.tech}: const sum=(a,b)=>a+b`)
    }
    hello() {
        super.hello();
        console.log('go away')
    }
}
const coder = new Coder('Vika', 'Rome', new Date(2000, 10, 27), 'js');

class Hacker extends Coder{
    constructor(a,b,c,d) {
        super();
        this.tech = 'XXX';
        this._name = 'XXX'
    }
    code(){
        console.log(`I'll hack everything`)
    }
}