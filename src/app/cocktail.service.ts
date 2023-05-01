import { Injectable } from '@angular/core';
import {Cocktail} from "./models/cocktail.model";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public getCocktails(): Cocktail[]{
    return [
    new Cocktail('Mojito', 10, 'assets/images/cocktail-tropical-kamasutra.jpg'),
    new Cocktail('Perroquet', 8, 'assets/images/cocktail-tropical-kamasutra.jpg'),
    new Cocktail('Ti Punch', 12, 'assets/images/cocktail-tropical-kamasutra.jpg'),
    new Cocktail('Daiquiri', 13, 'assets/images/cocktail-tropical-kamasutra.jpg'),
    new Cocktail('Pina Colada', 14, 'assets/images/cocktail-tropical-kamasutra.jpg')
   ]

  }

}
