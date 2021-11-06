// function Bike(model, color){
//     this.model = model;
//     this.color = color;
// }
// Bike.prototype.getDetails = function (){
//     return this.model + ' bike has ' + this.color + ' color';
// }

class Bike {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    getDetails(){
        return this.model + ' bike has ' + this.color + ' color';
    }
}
const bike = new Bike('BMX', 'Black')

console.log(bike.getDetails())
