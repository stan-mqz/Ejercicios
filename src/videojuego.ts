//Crea una clase abstracta donde se solicite de manera publica el nickname de un jugador y el total de vida que es 100% en privado, Crear la clase mundo 1 que séra una clase hija, donde se creara un método aventura y en ese método se le restara el 30% de vida al jugador, Crear el metodo acuatico donde se le restara el 50% de vida y luego se le sumara el 10% y crear el método endgame donde se le restara el 50% de vida.  Cada método debe de imprimir el dato restante de vida que le quedo al jugador.

abstract class Jugador {
  constructor(
    public nickname: string,
    private vida: number,
  ) {}

  protected restarVida(porcentaje:number){
    if (this.vida <=0) {
        this.vida = 0
    }
    const vidaRestante = this.vida * porcentaje
    this.vida -= vidaRestante
  }


  protected sumarVida(porcentaje:number){
    const vidaRestante = this.vida * porcentaje
    this.vida += vidaRestante
  }

  get mostrarVida() {
    console.log(`Vida restante: ${this.vida}`)
    return this.vida;
  }
}

class MundoUno extends Jugador {
  constructor(nickname: string, vida: number) {
    super(nickname, vida);
  }

  aventura() {
    this.restarVida(0.30)
    this.mostrarVida
}

  acuatico() {
    this.restarVida(0.50)
    this.sumarVida(0.10)
    this.mostrarVida
  }

  endgame() {
    this.restarVida(0.50)
    this.mostrarVida
  }
}

const mundo = new MundoUno("stanmqz", 100);
mundo.aventura();
mundo.acuatico();
mundo.endgame();
