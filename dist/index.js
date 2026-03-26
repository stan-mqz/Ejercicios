"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }
    get nuevoSaldo() {
        return this.saldo;
    }
    set nuevoSaldo(valor) {
        if (valor >= 0) {
            this.saldo = valor;
        }
        else {
            console.log('El valor debe ser mayor a 0');
        }
    }
    mostrar() {
        console.log('Saldo: ' + this.saldo);
    }
}
class Movimientos extends Banco {
    constructor(nombre, saldo, deposito) {
        super(nombre, saldo);
        this.deposito = deposito;
        this.deposito = deposito;
    }
    comision(nuevoMonto) {
        let salida = nuevoMonto - 1;
        console.log(`Te cobre por la transfer nuevo saldo $${salida}`);
    }
    procesoDeposito() {
        const nuevoMonto = this.nuevoSaldo + this.deposito;
        console.log(`Nuevo saldo: ${nuevoMonto}`);
        this.comision(nuevoMonto);
    }
}
// let objeto = new Banco('Porfirio', 200)
//console.log(objeto)
let mov = new Movimientos('Stan', 200, 25);
mov.procesoDeposito();
//# sourceMappingURL=index.js.map