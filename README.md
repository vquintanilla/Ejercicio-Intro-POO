"# Ejercicio-Intro-POO" 

Ejercicios: Intro a POO

1. Haz una clase llamada Persona que siga las siguientes condiciones: 
       Sus atributos son: nombre, apellido, edad, ID, sexo, peso y altura.

       Debe tener los métodos:

1. calcularIMC()
2. esMayorDeEdad()
3. generarID()
4. El constructor unicamente pide nombre, apellido, edad, sexo, peso y altura.


NOTA: el ID se genera concatenando las primeras tres letras del nombre, la primeras tres letras del apellido, año de nacimiento y sexo.


2. Haz una clase llamada Password que siga las siguientes condiciones:

   2.1 Que tenga los atributos longitud y contraseña. Como regla de negocio, la contraseña no puede ser menor a 8 caracteres.
   2.2 El constructor solo recibe longitud.


Los métodos que implementa serán:

1. esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener más de 2 mayúsculas, más de 1 minúscula y mas de 5 números.
2. generarPassword(): genera la contraseña del objeto con la longitud que tenga. La contraseña debe generarse de manera aleatoria.
3. Método get para contraseña y longitud.
4. Método set para longitud.
