abstract class Transporte {
    constructor(){

    }


    abstract calcularCosto(distancia: number): void
}



class Taxi extends Transporte {
    constructor(){
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 2
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}


class Autobus extends Transporte {
    constructor(){
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 0.15
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}


class Uber extends Transporte {
    constructor(){
        super()
    }

    calcularCosto(distancia: number): void {
        let costo = distancia * 2
        return console.log(`Su total a pagar es de: ${costo}`)
    }
}


const taxi = new Taxi();
taxi.calcularCosto(10);  

const autobus = new Autobus();
autobus.calcularCosto(10); 

const uber = new Uber();
uber.calcularCosto(10);  