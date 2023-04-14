class Person {
  constructor(name, age) {
    this.name1 = name;
    this.age1 = age;
  }

  get name() {
    return this.name1;
  }

  set age(age) {
    this.age = age1;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name1} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name1} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
