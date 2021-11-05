"use strict";
function infoInstructor(inst) {
    console.log(inst.name + " - " + inst.age + " years old");
}
var noTypeVar = { name: "Franco", age: 26 };
infoInstructor(noTypeVar); // "Franco - 26 years old "
