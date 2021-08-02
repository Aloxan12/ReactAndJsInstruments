function DeleteUserAction(userId){
        this.type = 'DELETE_USER',
        this.payload = {
            userId: userId
        }
}
const action1 = new DeleteUserAction(432432);
const action2 = new DeleteUserAction(423342);

function User (name, city, dob){
        this.name = name,
        this.city = city,
        this.dateOfBirth = dob;
}
User.prototype.hello = function (){
    console.log(`I am ${this.name} from ${this.city}`);
}
const u1 = new User('Alex', 'Minsk', new Date(1990, 12, 31));
const u2 = new User('Bob', 'Kiev', new Date(1994, 1, 31));
u1.hello();