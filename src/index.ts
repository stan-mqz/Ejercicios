//1. Implementar una clase abtsracta "Vehículo" la cual debe tener el método abstracto "moverse" y la propiedad "marca". 

abstract class Vehiculo {
    protected marca: string;
    abstract moverse(): void;

    constructor(marca: string){
        this.marca = marca
    }
}

class Coche extends Vehiculo {
    moverse(): void {
        console.log('El coche se mueve a lo largo de la carretera');
    }
}

const coche = new Coche('Toyota');
coche.moverse();

class Bicicleta extends Vehiculo{
    moverse(): void {
        console.log('La bicicleta se mueve al pedalear');
    }
}

const bicicleta = new Bicicleta('Merida');
bicicleta.moverse();


//2. Implementar una clase abstracta "Personaje" con la propiedad "nombre" y el método abstracto "atacar"
abstract class Personaje {
    protected nombre: string;
    abstract atacar(): void;

    constructor(nombre: string){
        this.nombre = nombre
    }
}

class Guerrero extends Personaje {
    atacar(): void {
        console.log('El guerrero ataca con su espada');
    }
}

const guerrero = new Guerrero('Aragorn');
guerrero.atacar();

class Mago extends Personaje {
    atacar(): void {
        console.log('El mago lanza hechizos');
    }
}

const mago = new Mago('Gandalf');
mago.atacar();

