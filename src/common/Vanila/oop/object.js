const deleteUser =(userId)=>{
    const action ={
        type: 'DELETE_USER',
        payload: {
            userId: userId
        }
    }
    return action
}
const action1 = deleteUser("43242342");
const action2 = deleteUser("42342342");
console.log(action1);
console.log(action2);

const userFabric =(name)=>{
    const user ={
        name: name,
        city: 'Minsk',
        dateOfBirth: new Date(1976, 3, 32),
        sayHello(){
            console.log(`I am ${this.name} from ${this.city}`);
        }
    }
    return user
}
const u1 = userFabric('Alex');
const u2 = userFabric('Mike');
console.log(u1);
console.log(u2);