import { Component } from '@angular/core';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = "Fábio";
  humor = "sad";
  checked_humor = false;
  cores = ["primary", "danger", "success", "warning"];
  idx = 0;
  // cor = "primary";

  constructor() { }

  // trocarCor(): void {
  //   if (this.idx >= this.cores.length) {
  //     this.idx = 0;
  //   }
  //   this.cor = this.cores[this.idx];
  //   this.idx += 1;
  // }

  trocarCor(): void {
    if (this.idx < this.cores.length - 1) {
      this.idx += 1;
    } else {
      this.idx = 0;
    }
  }

  mudaHumor(): void {
    console.log('Chamou mudaHumor!');
    this.checked_humor = !this.checked_humor;
    if (this.checked_humor == true) {
      this.humor = "happy";
    } else {
      this.humor = "sad";
    }
  }
}
