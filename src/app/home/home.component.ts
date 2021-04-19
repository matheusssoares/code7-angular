import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  treze() {
    this.router.navigateByUrl('questao-13');
  }

}
