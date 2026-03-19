abstract class Pago {
  constructor(public total: string) {}

  abstract procesarPago(total: string): void;
}

class Efectivo extends Pago {
  constructor(total: string) {
    super(total);
  }

  procesarPago(efectivo: string): void {
    let exec = parseFloat(efectivo) - parseFloat(this.total);
    return console.log(`Su pago ha sido completado`);
  }
}

class Tarjeta extends Pago {
  constructor(total: string) {
    super(total);
  }

  procesarPago(saldo: string): void {
    let exec;
    let nuevoSaldo;
    if (saldo > this.total) {
      exec = parseFloat(saldo) - parseFloat(this.total);
      nuevoSaldo = exec;
      return console.log(
        `Pago completado correctamente. Su nuevo saldo es: $${nuevoSaldo}`,
      );
    } else {
      return console.log(`Declinada`);
    }
  }
}

class Transferencia extends Pago {
  constructor(
    total: string,
    private transferencia: number,
  ) {
    super(total);
    this.procesarPago();
  }

  procesarPago(): void {
    if (parseFloat(this.total) === this.transferencia) {
      console.log(`Pago realizado exitosamente`);
    } else {
      console.log(`Hubo inconvenientes en su transacción`);
    }
  }
}
