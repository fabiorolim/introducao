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
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.nome = params.nome;
        this.sexo = params.sexo;
        this.cor = params.cores;
        this.humor = params.humor;
      }
    });
  }

  ngOnInit() {
  }

}
