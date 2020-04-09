const prueba = () => {
  console.log('Hola mundo');
}
// prueba()

const convertCToF = (value, type) => {
  if (type === 'F' || type === 'f') {
    let c = ((value - 32)*(5 / 9));
    console.log(c)
  } else {
    let f = ((value*9/5) + 32);
    console.log(f)
  }
  return
}
// convertCToF(90, 'f')

function strings() {
  let nombre = 'Alex'
  let apellido = 'Ballera'
  
  let nombreCompleto = nombre + ' ' + apellido
  let nombreCompletoLiteralString = `${nombre} ${apellido}`
  
  console.log(nombreCompleto)
  console.log(nombreCompletoLiteralString)
}
// strings()

/* Crear un algoritmo, que basado en la nota 
imprima si el alumno aprueba la materia 
nota aprobatoria 60
si tiene menos de 50
imprimir: "Por favor, estudie más" */

function aprobo(nota) {
  if (nota >= 60) {
    console.log('Aprobó')
  } else if (nota < 50) {
    console.log('Por favor estudie más')
  } else {
  console.log('No aprobó')
  }
}
// aprobo(51)

function nota(nota) {
  let notaLetra = ''
  if(nota < 60) {
    notaLetra = 'F'
  } else if (nota > 59 && nota < 70) {
    notaLetra = 'D'
  } else if (nota > 69 && nota < 80) {
    notaLetra = 'C'
  } else if (nota > 79 && nota < 90) {
    notaLetra = 'B'
  } else {
    notaLetra = 'A'
  }
  console.log('La nota es ', notaLetra)
}
// nota(40)

function diaHoy(dia) {
  switch (dia) {
    case 0:
      console.log('Es Domingo')
      break;
      case 1:
        console.log('Es Lunes')
        break;
      case 2:
        console.log('Es Martes')
        break;
      case 3:
        console.log('Es Miércoles')
        break;
      case 4:
        console.log('Es Jueves')
        break;
      case 5:
        console.log('Es Viernes')
        break;
      case 6:
        console.log('Es Sábado')
        break;
    default:
      console.log('No es válido')
      break;
  }
}
// diaHoy(10)

function taxi(cantidad) {
  let gasolina = cantidad

  while (gasolina > 0) {
    console.log('Gasolina restante ', gasolina)
    gasolina--
  }
  console.log('Ya no tiene gasolina')
}
// taxi(100)

function multiplicar(base, limite) {
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} x ${i} = ${base*i}`)
  }
}
// multiplicar(10, 20)

function getNombre(nombre) {
  return nombre
}
function saludar(nombre) {
  let saludo = `Hola ${getNombre(nombre)}`
  console.log(saludo)
}
// saludar('Pedro')


// ARRAYS
let flores = ['Rosa', 'Girasol', 'Lirio']

// console.log(flores[0])


function arrays() {
  let personas = ['Alex', 'Maria', 'Sara']
  let salario = ['1000', '2000', '2500']
  for (let i = 0; i < personas.length; i++) {
    console.log(`${personas[i]} tiene un salario de ${salario[i]}`)
  }
}
// arrays()

// Objetos
let persona = {
  nombre: 'Alexander',
  edad: '49',
  estatura: '1,73cm'
}
function getPersona(p) {
  console.log(`${p.nombre} tiene ${p.edad} años de edad y mide ${p.estatura} de estatura`)
}
// getPersona(persona)

let persona1 = {
  nombre: 'Alexander',
  edad: '49',
}
let persona2 = {
  nombre: 'Melissa',
  edad: '27',
}
let persona3 = {
  nombre: 'Juan',
  edad: '40',
}
let personas = [persona1, persona2, persona3]

// console.log(personas[0])
function getPersonas(p) {
  for (let i = 0; i < p.length; i++) {
    let persona = p[i]
    console.log(`${persona.nombre} -- ${persona.edad}`)
    
  }
}
// getPersonas(personas)

// Clases - POO
// let carro = {
//   marca: 'Toyota',
//   tipo: 'Sedan',
//   puertas: '3'
// }
class Carro {
  constructor(marca1, tipo1, puertas) {
    this.marca = marca1;
    this.tipo = tipo1;
    this.puertas = puertas;
    this.creadoEn  = new Date();
    this.encendido = false;
    this.gasolina = 100
  }

  encenderCarro() {
    if (this.encendido) {
      console.warn('Ya el carro está encendido! No lo intentes otra vez')
    } else {
      this.encendido = true;
      console.log('El carro está encendido')
    }
    return this;
  }

  realizarViaje(consumo) {
    if (this.gasolina >= consumo && this.encendido) {
      this.gasolina = this.gasolina - consumo
      return `Le queda ${this.gasolina} de gasolina`
    } else if (this.gasolina < consumo) {
      return `No tiene gasolina suficiente para hacer este viaje, le queda ${this.gasolina} de gasolina`
    } else {
      return 'Por favor encienda el carro'
    }
  }
}

let carro = new Carro('Mazda', 'Sedan', '2')
// console.log(carro)

// Ejercicios

// Convertir de Libras a Kilogramos
function librasKilogramos(value, unit) {
  if (unit === 'kg' || unit === 'Kg') {
    value = value*2.2046
    unit = 'lbs'
  } else {
    value = value/2.2046
    unit = 'kgs'
  }
  value *= 100
  value = Math.round(value)
  value /= 100
  console.log(value.toString(), unit)
  return value
}
// librasKilogramos(3, 'lb')

function kmMi(value, unit) {
  if (unit === 'km' || unit === 'Km') {
    value = value*0.62
    unit = 'mi'
  } else {
    value = value/0.62
    unit = 'kms'
  }
  value *= 100
  value = Math.round(value)
  value /= 100
  console.log(value.toString(), unit)
  return value
}
// kmMi(2, 'mi')

function areaTriangulo(b,h) {
  let area = b*h/2;
  console.log(area)
}
// areaTriangulo(10, 5)

function numeroMayor() {
  let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
  let mayor = 0
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= mayor) {
      mayor = numeros[i]
    }
  }
  console.log('El número mayor es ', mayor)
}
numeroMayor()