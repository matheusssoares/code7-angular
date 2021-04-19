import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-treze',
  templateUrl: './treze.component.html',
  styleUrls: ['./treze.component.css']
})
export class TrezeComponent implements OnInit {
  dados: any = [];
  constructor(
    private filmesService: FilmesService,
    private router: Router
  ) {
    const retorno = this.filmesService.getFilmes();

    this.dados = retorno;
   }

  ngOnInit(): void {
  }

  home() {
    this.router.navigateByUrl('');
  }

}
