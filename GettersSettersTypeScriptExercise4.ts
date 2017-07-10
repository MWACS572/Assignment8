class Person{
    _firstName: string="";
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    
}

var person = new Person();
person.firstName="Nol";
console.log(person.firstName);
