"use strict";
//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
