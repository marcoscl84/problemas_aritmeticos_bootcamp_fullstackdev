let salario = gets();
salario = parseFloat(salario);

if (salario<=2000){
  console.log('Isento')
} 
else if (salario<=3000){
  calcula = (salario-2000)*0.08;
  ir = parseFloat(calcula);
  ir = ir.toFixed(2);
  console.log('R$ ' + ir);
} 
else if (salario<=4500){
  calcula1 = salario - 2000;
  calcula2 = salario - 3000;
  calcula = ((calcula1 - calcula2) * 0.08) + (calcula2 * 0.18);
  ir = parseFloat(calcula);
  ir = ir.toFixed(2);
  console.log('R$ ' + ir);
} 
else {
  calcula1 = salario - 2000;
  calcula2 = salario - 3000;
  calcula3 = salario - 4500;
  calcula = ((calcula1 - calcula2) * 0.08) + (((calcula2) - calcula3) * 0.18) + calcula3 * 0.28;
  ir = parseFloat(calcula);
  ir = ir.toFixed(2);
  console.log('R$ ' + ir);
}