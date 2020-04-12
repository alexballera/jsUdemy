import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  palabra = 'AGUACATE';

  palabraOculta = '_ ';

  intentos = 0;

  gano = false;

  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length)
  }

  comprobar(letra: string) {
    this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraArrEvaluar = palabraArr.join('');
    if (palabraArrEvaluar === this.palabra) {
      this.gano = true;
      console.log('Usuario Ganó');
    }

    if (this.intentos >= 9) {
      this.perdio = true;
      console.log('Usuario PErdió');
    }
  }

  existeLetra(letra: string) {
    if (this.palabra.indexOf(letra) >= 0) {
    } else {
      this.intentos ++;
    }
  }
}
