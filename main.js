class Persona {

  constructor(nombre, apellido, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura / 100;
    this.id = this.generarID();
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }
  
  esMayorDeEdad() {
    return this.edad > 18;

  }

  calcularAnio() {
    let date = new Date();
    let anio = date.getFullYear();
    return anio - this.edad;
  }
  generarID() {
    this.id = `${this.nombre.substring(0, 3)}${this.apellido.substring(0,3)}${this.calcularAnio()}${this.sexo}`;
        return this.id;
  }
  

}

const valeria = new Persona("Valeria", "Quintanilla", 34, "femenino", 53, 1.6);
console.log("El IMC es: " + valeria.calcularIMC());
console.log("es mayor de edad: " + valeria.esMayorDeEdad());
console.log("el id es: " + valeria.generarID());
//console.log("el id es: " + this.id);