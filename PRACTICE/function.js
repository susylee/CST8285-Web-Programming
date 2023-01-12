'use strict';

 class Person {
    //constructor
    constructor(name,age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: Hello!`)
    }
 }

 const suyeon = new Person('Suyeon', 20);
 console.log(suyeon.name);
 console.log(suyeon.age);
 suyeon.speak();