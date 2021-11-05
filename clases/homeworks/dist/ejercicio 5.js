"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //private mail: string;
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, regular) {
        var _this = _super.call(this, name, age) || this;
        _this.regular = regular;
        return _this;
    }
    Student.prototype.getRegular = function () {
        return this.regular;
    };
    Student.prototype.getFullInfo = function () {
        return this.name + " (" + this.age + " years old) - " + (this.regular ? 'regular' : 'not regular');
    };
    return Student;
}(Person));
var student = new Student("Franco", 26, true);
student.getFullInfo(); // "Franco (26 years old) - not regular"
student.getName; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
student.getAge; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
student.getRegular; // Property 'regular' is private and only accessible within class 'Student'
