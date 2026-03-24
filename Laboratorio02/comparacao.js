// console.log('Testando valores falsy e truthy');

// console.log(false,`é ${Boolean(false)}.`); //false
// console.log(0,`é ${Boolean(0)}.`); //false
// console.log("",`é ${Boolean("")}.`); //false
// console.log(null,`é ${Boolean(null)}.`); //false
// console.log(undefined,`é ${Boolean(undefined)}.`);//false
// console.log(NaN,`é ${Boolean(NaN)}.`);//false
// console.log(true,`é ${Boolean(true)}.`);//true
// console.log(1,`é ${Boolean(1)}.`);//true
// console.log("Olá",`é ${Boolean("Olá")}.`);//true
// console.log([],`é ${Boolean([])}.`);//false  //true
// console.log({},`é ${Boolean({})}.`);//false  //true
 
// console.log("Testando Comparações");

// console.log(1==1); //true
// console.log(1=="1");//true
// console.log(1===1);//true
// console.log(1==="1");//false
// console.log(true == 1);//true
// console.log(1 == [1]);//true
// console.log(null == null);//true
// console.log(null == undefined);//true
// console.log([] == false);//true
// console.log([] == []);//false

// console.log ("Testando Operadores");
// let num1 = 2;
// let num2 = 5;

// if (num1 > num2) {
//     console.log(`${num1} é maior que ${num2}`);
// }
// else if (num1 < num2) {
//     console.log(`${num1} é menor que ${num2}`);
// } else {
//     console.log(`${num1} é igual a ${num2}`);
// }

// console.log("Testando Operador Lógico AND (&&)");
// let idade = 25;
// let possuiCNH = true;

// if (idade >= 18 && possuiCNH === true) {
//     console.log('pode dirigir');
// } else {
//     console.log('Não pode dirigir');
// }

// console.log("Testando Operador OR");
// let temDinheiro = false;
// let temCartaoDeCredito = false;

// if (temDinheiro || temCartaoDeCredito) {
//     console.log("Você pode fazer a compra.");
// } else{
//     console.log("Você não pode fazer a compra")
// }

// console.log("Testando a combinação dos operadores lógicos AND e OR");
// let estaChovendo = true;
// let temGuardaChuva = true;
// let temCapaDeChuva = false;

// if ((estaChovendo && (temCapaDeChuva || temGuardaChuva)) || !estaChovendo) {
//     console.log('pode sair de casa');
// }
// else{
//     console.log('Não pode sair de casa');
// }
