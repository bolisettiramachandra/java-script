class human {
    constructor(){
        this.gender = 'male';
        this.colour = 'white';
    }
    printGender (){
        console.log(this.gender);
    }
}


class person extends human {
    constructor(){
        super();
        this.name = 'ram';
        this.age = 23;
        this.gender = 'female';
    }
    printMyDetails(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender)
        console.log(this.colour)
    }
}

const myPerson = new person();
myPerson.printMyDetails();
console.log(myPerson.name);

const myHuman = new human();
myHuman.printGender();