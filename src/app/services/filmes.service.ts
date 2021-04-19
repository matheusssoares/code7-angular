import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  constructor(
    private http: HttpClient,
  ) {

  }

  getFilmes() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/filmes.json').subscribe((data: any) => {        
        if(data.length > 0) {
          resolve(data);
        }
      }, err => {
        reject(err);
      })
            
    })
  }
}
