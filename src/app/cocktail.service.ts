import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }

  getData() {
    // Création de l'observable
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      // Abonnement à l'observable (et donc déclenchement de la requête)
      .subscribe((data) => {
      });
  }

}
