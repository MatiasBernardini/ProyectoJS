alert ("¡¡Bienvenido al fixture del mundial de Qatar 2022!!")
alert ("Primero antes que nada, nos gustaria saber como se llama")

let nombre = prompt ("Ingrese su Nombre")
let apellido = prompt ("Ingrese su Apellido")

if (nombre !== "" && apellido !== ""){
    alert ( `¡Bienvenido ${nombre} ${apellido}!`)
} else{
    alert ("Tiene que ingresar su nombre y apellido")
}

alert ("Tambien nos encantaría saber su edad")

let edad = parseInt (prompt ("Ingrese su Edad"))

if (edad < 0 || edad > 99 ){
        alert ("La edad no es correspondiente")
    }else { 
        if (edad >=18){
        alert ("Usted es Mayor de Edad")
    }else {
        alert ("Usted es menor de edad")
    }
}

alert ("Este es un simulador en especifico del grupo C")
alert ("A continuación se le mostrará las selecciones que componen este grupo")

const selecciones = ["Argentina", "Mexico", "Polonia", "Arabia Saudita"];
selecciones.forEach ((seleccion) => {
    alert(seleccion)
})

const jugadoresArgentinos = [ "Messi ", "De Paul ", "Di Maria " ]
const jugadoresMexicanos = [ "Lozano ", "Ochoa ", "Raúl Jiménez " ]
const jugadoresPolacos = [ "Lewandowski ", "Zieliński " ]
const jugadoresArabes = [ "Mohammed Al-Sahlawi " ]

const mejoresJugadores = jugadoresArgentinos.concat(jugadoresMexicanos, jugadoresPolacos, jugadoresArabes)
alert ("Los mejores jugadores de este grupo son: " + mejoresJugadores)

let paises = parseInt (prompt ( "Ya sabiendo los mejores jugadores de este grupo, a cuál selección del grupo C apoyara: \n 1.Argentina \n 2.Arabia Saudita \n 3.Mexico \n 4.Polonia" ) )

if (isNaN (paises)){
    alert ("Tiene que seleccionar un número")
} else{
    if (paises === 1){
        alert ("Usted va con Argentina")
    } else if (paises ===2){
        alert ("Usted va con Arabia Saudita")
    } else if (paises === 3){
        alert ("Usted va con Mexico")
    } else if (paises === 4){
        alert ("Usted va con Polonia")
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

