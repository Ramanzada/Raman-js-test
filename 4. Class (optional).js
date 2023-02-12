class Person {
    constructor(firstName) {
      this.firstName = firstName;
    }
  
    sayHello() {
      console.log(`Hello my name is ${this.firstName}`);
    }
  }
  
  const peter = new Person("Raman");
  peter.sayHello(); // 'Hello my name is Raman'
  