class Person {
    protected name: string;
    protected age: number;
    //private mail: string;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public getName(): string {
      return this.name;
    }
    public getAge(): number {
      return this.age;
    }
  }
  
  class Student extends Person {
    protected regular: boolean;
    
    constructor(name: string, age: number, regular: boolean) {
      super(name, age);
      this.regular = regular;
    }

    public getRegular(): boolean {
      return this.regular;
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
  }
  
  const student = new Student("Franco", 26, true);
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  student.getName; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.getAge; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.getRegular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!
  export {}