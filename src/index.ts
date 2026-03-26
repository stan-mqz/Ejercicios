class Banco {
    constructor(public cliente: string, protected saldo: number){

    }

    get nuevoSaldo(): number{
        return this.saldo
    }

    set nuevoSaldo(valor: number){
        if (valor >= 0) {
            this.saldo = valor
        } else {
            console.log('El valor debe ser mayor a 0')
        }
    }

    mostrar(){
        console.log('Saldo: ' + this.saldo)
    }
}


class Movimientos extends Banco {
    constructor(nombre: string, saldo: number, public deposito: number){
        super(nombre, saldo)
        this.deposito = deposito
    }

    comision(nuevoMonto: number){
        let salida = nuevoMonto-1
        console.log(`Te cobre por la transfer nuevo saldo $${salida}`)
    }

    procesoDeposito(){
        const nuevoMonto = this.nuevoSaldo + this.deposito;
        console.log(`Nuevo saldo: ${nuevoMonto}`);
        this.comision(nuevoMonto)
    }

    
}

// let objeto = new Banco('Porfirio', 200)
//console.log(objeto)
let mov = new Movimientos('Stan', 200, 25)
mov.procesoDeposito()