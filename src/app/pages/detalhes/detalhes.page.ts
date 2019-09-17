import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  nome: string;
  cor: string;
  sexo: string;
  humor: string;


  constructor(private route: ActivatedRoute) {
  }

  ionViewDidLoad() {
    console.log('Detalhes: ionViewDidLoad');
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.nome = params.nome;
        this.sexo = params.sexo;
        this.cor = params.cor;
        this.humor = params.humor;
      }
    });
    console.log('Detalhes: ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('Detalhes: ionViewWillLeave');
  }

  ionViewDidEnter() {
    console.log('Detalhes: ionViewDidEnter');
  }

  ionViewDidLeave() {
    console.log('Detalhes: ionViewDidLeave');
  }

  ngOnInit() {
  }

}
