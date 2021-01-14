let velEHoras = gets().split(" ");
let horas = velEHoras[0];
let vel = velEHoras[1];
let litros = parseFloat((vel/12)*horas).toFixed(3);

console.log(litros)