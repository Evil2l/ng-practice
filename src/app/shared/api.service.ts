import { Injectable } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class ApiService {
  title = 'Api';
  recipes: Recipe[] = [
    { name: 'dummy',
      description: 'zummy',
      imagePath: 'http://www.animemaru.com/wp-content/uploads/2015/07/da3w3eds.jpg'
    },
    {
      name: 'givi',
      description: 'kivi',
      imagePath: 'http://19201080.ru/anime/3-anime-oboi-kartinki-foto-1920x1080.jpg'
    }
  ];
}
