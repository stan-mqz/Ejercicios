abstract class Producto {
  constructor(
    protected nombreProducto: string,
    protected precioProducto: number,
  ) {}

  abstract calcularPrecioFinal(subtotal: number): void;
  abstract mostrarInformacion(): void;
}

class Electronicos extends Producto {
  private iva: number;

  constructor(nombre: string, precio: number) {
    super(nombre, precio);
    this.iva = 0.13;
  }

  calcularPrecioFinal(subtotal: number): void {
    const precioConIva = subtotal + subtotal * this.iva;
    let descuento = 0;
    let precioFinal: number;

    if (subtotal > 15000) {
      descuento = subtotal * 0.15;
      precioFinal = precioConIva - descuento;
    } else {
      precioFinal = precioConIva;
    }

    console.log(`--- Electrónico: ${this.nombreProducto} ---`);
    console.log(`  Subtotal      : $${subtotal.toFixed(2)}`);
    console.log(`  IVA (13%)     : $${(subtotal * this.iva).toFixed(2)}`);
    console.log(`  Descuento     : -$${descuento.toFixed(2)}`);
    console.log(`  Precio final  : $${precioFinal.toFixed(2)}`);
  }

  mostrarInformacion(): void {
    console.log(
      `El producto ${this.nombreProducto} tiene un precio de: $${this.precioProducto}`,
    );
  }
}

class Ropa extends Producto {
  private descuento: number;
  private talla: string;

  constructor(nombre: string, precio: number, talla: string) {
    super(nombre, precio);
    this.descuento = 0.1;
    this.talla = talla;
  }

  calcularPrecioFinal(subtotal: number): void {
    const montoDescuento = subtotal * this.descuento;
    const precioFinal = subtotal - montoDescuento;

    console.log(`--- Ropa: ${this.nombreProducto} ---`);
    console.log(`  Subtotal      : $${subtotal.toFixed(2)}`);
    console.log(`  Descuento 10% : -$${montoDescuento.toFixed(2)}`);
    console.log(`  Precio final  : $${precioFinal.toFixed(2)}`);
  }

  mostrarInformacion(): void {
    console.log(
      `El producto ${this.nombreProducto} tiene un precio de: $${this.precioProducto} | Talla: ${this.talla}`,
    );
  }
}

class Alimento extends Producto {
  private iva: number;

  constructor(nombre: string, precio: number) {
    super(nombre, precio);
    this.iva = 0.05;
  }

  calcularPrecioFinal(subtotal: number): void {
    const precioFinal = subtotal + subtotal * this.iva;

    console.log(`--- Alimento: ${this.nombreProducto} ---`);
    console.log(`  Subtotal     : $${subtotal.toFixed(2)}`);
    console.log(`  IVA (5%)     : $${(subtotal * this.iva).toFixed(2)}`);
    console.log(`  Precio final : $${precioFinal.toFixed(2)}`);
  }

  mostrarInformacion(): void {
    console.log(
      `El producto ${this.nombreProducto} tiene un precio de: $${this.precioProducto}`,
    );
  }
}

const laptop = new Electronicos("Laptop Dell", 1200);
const smartTv = new Electronicos('Smart TV 75"', 16000);

const camisa = new Ropa("Camisa Oxford", 40, "M");
const pantalon = new Ropa("Pantalón Chino", 65, "L");

const leche = new Alimento("Leche entera", 2.5);
const yogurt = new Alimento("Yogurt", 1.8);

laptop.mostrarInformacion();
laptop.calcularPrecioFinal(1200);

smartTv.mostrarInformacion();
smartTv.calcularPrecioFinal(16000);

camisa.mostrarInformacion();
camisa.calcularPrecioFinal(40);

pantalon.mostrarInformacion();
pantalon.calcularPrecioFinal(65);

leche.calcularPrecioFinal(15);
yogurt.calcularPrecioFinal(10);

leche.mostrarInformacion();
yogurt.mostrarInformacion();
