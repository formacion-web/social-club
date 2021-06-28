import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
interface Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  getHeroes(){
    const heroes = of(HEROES);
    return heroes;
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/');
  }
}
