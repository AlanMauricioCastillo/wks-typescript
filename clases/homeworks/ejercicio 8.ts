//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}