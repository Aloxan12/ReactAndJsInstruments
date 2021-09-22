//Liskov substitution — принцип подстановки Барбары Лисков
// в формулировке Роберта Мартина: «функции, которые используют базовый тип,
// должны иметь возможность использовать подтипы базового типа не зная об этом».

class Person {
}
class Member extends Person{
    access(){
        console.log('У тебя есть доступ')
    }
}
class Guest extends Person{
    isGuest = true
}
class Frontend extends Member{
    canCreateFrontend(){
    }
}
class Backend extends Member{
    canCreateBackend(){
    }
}
class PersonFromDifferentCompany extends Guest{
    access(){
        throw new Error('У тебя нет доступа! Иди к себе!')
    }
}
function openSecretDoor(member){
    member.access()
}
openSecretDoor(new Frontend())
openSecretDoor(new Backend())
//openSecretDoor(new PersonFromDifferentCompany())

//=======================

class Component {
    isComponent = true
}
class ComponentWithTemplate extends Component{
    render(){
        return `<div>Component</div>`
    }
}
class HOCClass extends Component{

}
class HeaderComponent extends ComponentWithTemplate{
    onInit(){}
}
class FooterComponent extends ComponentWithTemplate{
    afterInit(){}
}
class HOC extends HOCClass{
    render(){
        throw new Error('Render is impossible here')
    }
}
function renderComponent(component){
    console.log(component.render())
}
renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
