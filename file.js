// 01
/*****************************************************************
 * Completar las condiciones
 */
// === o !==
if(1 !== 2){
    console.log("Debe entrar");
}
// === o !==
if(2 === 2) {
    console.log("NO debe entrar");
}
// >, >= o <
if(1 >= 1) {
    console.log("Debe entrar");
}

if(
    1 !== 2 // >, >=, !==
    && 
    5 >= 5 // <, <=, >, >=
) {
    console.log("Debe entrar");
}


// 02
/*************************************************************************************
 * Pedir dos prompts, deben ser largoPelo y barba.
 * Largo pelo pueden ser dos valores, "largo" o "corto". 
 * Barba puede ser "si" o "no".
 * Hacer if-elseif-else para ofrecer corte de pelo si el pelo es largo, y afeitada si
 * barba es "si". 
 * alert("Corte y afeitada") o alert("Corte").
 * Poner un alert en caso de que no se haga ni corte ni afeitada.
 ****************************************************************************************/

let largoPelo = prompt("¿Tenés pelo largo o corto?");
let barba = prompt("¿Tenés barba?");

if(largoPelo === "largo" && barba === "Sí") {
    alert("Corte y afeitada");
}
else if(largoPelo === "largo" && barba === "No") {
    alert("Corte");
}
else if (largoPelo === "corto" && barba === "No") {
    alert("No se va a hacer corte ni afeitada");
}
else {
    alert("Si sólo tenés barba, no me hagas perder el tiempo. Rajá de acá hipster palermitano.");
}




// 03
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/

 // 04
 /******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/