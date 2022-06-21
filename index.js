let nombre = prompt ("Ingrese su Nombre")
let apellido = prompt ("Ingrese su Apellido")

if (nombre !== "" && apellido !== ""){
    alert ( `¡Bienvenido ${nombre} ${apellido}!`)
} else{
    alert ("Tiene que ingresar su nombre y apellido")
}

let edad = parseInt (prompt ("Ingrese su Edad"))

if (edad < 0 || edad > 99 ){
        alert ("La edad no es correspondiente")
    }else { 
        if (edad >=18){
        alert ("Usted es Mayor de Edad")
    }
        if (edad <18){
        alert ("Usted es menor de edad")
    }
}

let paises = parseInt (prompt ( "A cuál selección apoyara para el mundial: \n 1.Argentina \n 2.Uruguay \n 3.Mexico \n 4.España" ) )

if (isNaN (paises)){
    alert ("Tiene que seleccionar un número")
} else{
    if (paises === 1){
        alert ("Usted va con Argentina")
    } else if (paises ===2){
        alert ("Usted va con Uruguay")
    } else if (paises === 3){
        alert ("Usted va con Mexico")
    } else if (paises === 4){
        alert ("Usted va con España")
    } else {
        alert ("Tiene que seleccionar una opción")
    }
}

function sumarGoles (golesUno, golesDos, golesTres){
    let sumatoria = golesUno + golesDos + golesTres
    return sumatoria
}

function golesPromedio (){
    let golUno = parseInt (prompt ("Cuantos goles cree que meterá su selección en el 1er partido"))
    let golDos = parseInt (prompt ("Cuantos goles cree que meterá su selección en el 2do partido"))
    let golTres = parseInt (prompt ("Cuantos goles cree que meterá su selección en el 3er partido"))

    let resultadoGoles = sumarGoles (golUno, golDos, golTres)
    let promedio = resultadoGoles

    alert ( "La cantidad de goles que meterá su selección en la fase de grupos es: " + promedio )
}

golesPromedio()