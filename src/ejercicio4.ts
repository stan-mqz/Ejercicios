abstract class Empleado {

    constructor(public nombre: string ){

    }

    abstract calcularSalario(): void
}

class EmpleadoPorHoras extends Empleado {
    
    constructor(nombre: string,public tarifa: number){
        super(nombre)
    }
    calcularSalario(): void {
        const salario = this.tarifa * 10;
        return console.log(`El sueldo final es de: $${salario}`)
    }
}

class EmpleadoFijo extends Empleado {
    
    constructor(nombre: string){
        super(nombre)
    }
    calcularSalario(): void {
        return console.log(`El salario mensual del empleado es $${1000}`)
    }
}

class EmpleadoPorComision extends Empleado {
    
    constructor(nombre: string, public venta : number){
        super(nombre)
    }
    calcularSalario(): void {
        let comision;

        if (this.venta > 15000) {
            comision = this.venta * 0.15
            return console.log(`Su comision total es de ${comision}`)
        } else {
            comision = this.venta * 0.05
            return console.log(`Su comision total es de ${comision}`)
        }
    }
}

const empleadoFijo = new EmpleadoFijo('Samuel')
empleadoFijo.calcularSalario() 
const empleadoPorHoras = new EmpleadoPorHoras('Stan', 6) 
empleadoPorHoras.calcularSalario() 
const empleadoPorComision = new EmpleadoPorComision('Toño', 12000) 
empleadoPorComision.calcularSalario() 

