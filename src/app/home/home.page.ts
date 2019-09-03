import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome = "";
  humor = "sad";
  checked_humor = false;
  cores = ["primary", "danger", "success", "warning"];
  idx = 0;
  sexo = "";

  constructor(private router: Router) { }

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

  selecionaSexo(event): void {
    console.log(event.detail.value);
    this.sexo = event.detail.value;
  }

  defineNome(event) {
    console.log(event.detail.value);
    this.nome = event.detail.value;
  }

  irParaDetalhes(){
    this.router.navigate(['/detalhes']);
  }
}
