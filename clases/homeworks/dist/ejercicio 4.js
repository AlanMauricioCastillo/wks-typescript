"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//tipado inferido
var mati = {
    nombre: 'Matias',
    edad: 29
};
//tipado explicito?
var mati2 = {
    nombre: 'Matias',
    edad: 29
};
var franco = {
    nombre: "Franco",
    edad: 27
};
var diego = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
};
// Investiga la palabra reservada implements
// Existe otra alternativa para realizar lo mismo?
// Si, types.
var Personas = /** @class */ (function () {
    function Personas() {
    }
    return Personas;
}());
var Estudiantes = /** @class */ (function () {
    function Estudiantes() {
    }
    return Estudiantes;
}());
var diego1 = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
};
//console.log(new Estudiante() instanceof A) // true
console.log(new Estudiantes() instanceof Personas); // false
var Fede = {
    name: 'Fede',
    age: 29,
    isActive: false
};
