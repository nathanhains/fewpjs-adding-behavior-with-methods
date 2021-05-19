class Cat {
    constructor (name){
        this.name = name
    }

    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor (name) {
        this.name = name
    }

    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor (name, sex) {
        this.name = name
        this.sex = sex
    }

    speak(){
        let s = this.sex === "female" ? `${this.name} says squawk!` : `It\'s me! ${this.name}, the parrot!`
        return s
    }
}