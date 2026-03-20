abstract class Notificacion {
    constructor(public mensaje: string) {}
    abstract enviar(): void;
  }
  
  class Email extends Notificacion {
    constructor(mensaje: string) {
      super(mensaje);
      
    }
    enviar(): void {
      console.log(`el mensaje: ${this.mensaje}, se envio correctamente por Email`);
    }
  }
  
  class SMS extends Notificacion {
    constructor(mensaje: string) {
      super(mensaje);
      
    }
    enviar(): void {
      console.log(`el mensaje: ${this.mensaje}, se envio correctamente por SMS`);
    }
  }
  
  class WhatsApp extends Notificacion {
    constructor(mensaje: string) {
      super(mensaje);
      
    }
    enviar(): void {
      console.log(`el mensaje: ${this.mensaje}, se envio correctamente por WhatsApp`);
    }
  }
  
  const email = new Email('Reunión mañana a las 9am');
  email.enviar()
  const sms = new SMS('Tu código de verificación es 4821');
  sms.enviar()
  const whats = new WhatsApp('Que ondas chelito');
  whats.enviar()
