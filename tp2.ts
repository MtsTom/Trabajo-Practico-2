
/*DESCRIPCIÓN: Crear una clase de Auto con los atributos (marca, modelo, potencia,
max. velocidad)
 Crear 5 autos en un array
 Iterar el array y mostrar los autos por pantalla
 Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda
en forma óptima en recorrer x kms*/



class Auto {
    marca: string;
    modelo: string;
    potencia: number;
    maxVelocidad: number;

    constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVelocidad = maxVelocidad;
    }

    calcularTiempo(distancia: number): number {
        const tiempo: number = distancia / this.maxVelocidad;
        return tiempo;
    }
}

// Crear los autos
const auto1 = new Auto("Ford", "Mustang", 300, 250);
const auto2 = new Auto("Chevrolet", "Camaro", 350, 270);
const auto3 = new Auto("BMW", "M5", 400, 280);
const auto4 = new Auto("Mercedes-Benz", "AMG GT", 450, 300);
const auto5 = new Auto("Porsche", "911", 500, 320);

// Guardar los autos en un array
const autos: Auto[] = [auto1, auto2, auto3, auto4, auto5];

// Mostrar los autos por pantalla
for (const auto of autos) {
    console.log("Marca:", auto.marca);
    console.log("Modelo:", auto.modelo);
    console.log("Potencia:", auto.potencia);
    console.log("Velocidad máxima:", auto.maxVelocidad);
    console.log("--------------------");
}

// Distancia a recorrer en kilómetros
const distancia: number = 100;

// Calcular y mostrar el tiempo óptimo de cada auto
for (const auto of autos) {
    const tiempoOptimo: number = auto.calcularTiempo(distancia);
    console.log(`Tiempo óptimo para recorrer ${distancia} kilómetros con el ${auto.marca} ${auto.modelo}: ${tiempoOptimo} horas`);
}


/*DESCRIPCIÓN: Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
le asignan Alumnos (2)*/

class Alumno {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Curso {
    nombre: string;
    alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    asignarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }
}

class Escuela {
    cursos: Curso[];

    constructor() {
        this.cursos = [];
    }

    agregarCurso(curso: Curso): void {
        this.cursos.push(curso);
    }
}

// Crear alumnos
const alumno1 = new Alumno("Juan", 20);
const alumno2 = new Alumno("María", 22);
const alumno3 = new Alumno("Pedro", 19);

// Crear cursos
const curso1 = new Curso("Matemáticas");
const curso2 = new Curso("Historia");

// Asignar alumnos a los cursos
curso1.asignarAlumno(alumno1);
curso1.asignarAlumno(alumno2);
curso2.asignarAlumno(alumno3);

// Crear escuela
const escuela = new Escuela();

// Agregar cursos a la escuela
escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);

// Mostrar los cursos y sus alumnos
for (const curso of escuela.cursos) {
    console.log(`Curso: ${curso.nombre}`);
    console.log("Alumnos:");
    for (const alumno of curso.alumnos) {
        console.log(`- ${alumno.nombre}, Edad: ${alumno.edad}`);
    }
    console.log("--------------------");
}

/*DESCRIPCIÓN: Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
sacar fondos
 • Si le asignamos más de 500000 disparamos una alarma
 • Si intentamos sacar más de lo que disponemos disparamos otra alarma
 • Si intentamos sacar más de 100000 disparamos otra alarma */


 class CuentaBancaria {
    private fondos: number;

    constructor() {
        this.fondos = 0;
    }

    asignarFondos(monto: number): void {
        if (monto > 500000) {
            this.dispararAlarma("Se asignaron más de 500000 fondos");
        }
        this.fondos += monto;
    }

    sacarFondos(monto: number): void {
        if (monto > this.fondos) {
            this.dispararAlarma("Se intentó sacar más de lo que se dispone");
        } else if (monto > 100000) {
            this.dispararAlarma("Se intentó sacar más de 100000 fondos");
        } else {
            this.fondos -= monto;
        }
    }

    private dispararAlarma(mensaje: string): void {
        console.log("¡ALARMA!", mensaje);
    }
}

// Crear una cuenta bancaria
const cuenta = new CuentaBancaria();

// Asignar fondos y disparar una alarma
cuenta.asignarFondos(600000);

// Sacar fondos y disparar una alarma
cuenta.sacarFondos(2000000);

// Sacar fondos y disparar otra alarma
cuenta.sacarFondos(150000);

// Mostrar el saldo actual
console.log("Saldo actual:", cuenta.saldo);



/*DESAFIÓ:Supongamos que queremos crear un programa que trabaje con diferentes
formas geométricas, como rectángulos y círculos. Podemos utilizar interfaces para definir
las propiedades y métodos comunes que deben tener estas formas.*/


interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

class Rectangulo implements FormaGeometrica {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

class Circulo implements FormaGeometrica {
    private radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Crear instancias de las formas geométricas
const rectangulo = new Rectangulo(5, 3);
const circulo = new Circulo(4);

// Calcular y mostrar el área y el perímetro de cada forma
console.log("Rectángulo:");
console.log("Área:", rectangulo.calcularArea());
console.log("Perímetro:", rectangulo.calcularPerimetro());

console.log("--------------------");

console.log("Círculo:");
console.log("Área:", circulo.calcularArea());
console.log("Perímetro:", circulo.calcularPerimetro());
