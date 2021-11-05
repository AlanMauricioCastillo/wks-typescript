//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?
let mati2: {
    nombre: string,
    edad: number
} = {
    nombre: 'Matias',
    edad: 29
}

interface Persona {
    nombre: string;
    edad: number
}

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo?: boolean
}

let diego:  Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
}

// Investiga la palabra reservada implements

// Existe otra alternativa para realizar lo mismo?
// Si, types.

abstract class Personas {
  nombre!: string;
  edad!: number;
}
class Estudiantes implements Personas {
  nombre!: string;
  edad!: number;
  //nombre!: string;
  //edad!: number; 
  esActivo?: boolean;
}

let diego1:  Estudiantes = {
  nombre: "Diego",
  edad: 29,
  esActivo: false //que pasa si comento alguno?
}

//console.log(new Estudiante() instanceof A) // true
console.log(new Estudiantes() instanceof Personas) // false



type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias

export {}