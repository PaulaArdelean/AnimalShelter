import { Injectable } from '@angular/core';
import { CONFIG } from '../core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Animal } from '../_models/animal';
import { Observable } from 'rxjs';

@Injectable()
export class AnimalService {
  URL = CONFIG.baseUrls.apiUrl;
  headers = new HttpHeaders({  'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor( private http: HttpClient) {
  }

  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.URL}/animals`, this.options) as Observable<Animal[]>;
  }

  getAnimal(animalId: number): Observable<Animal> {
      return this.http.get(`${this.URL}/animals/${animalId}`, this.options) as Observable<Animal>;
  }

  addAnimal(animal: Animal): Observable<Animal> {
    const body = JSON.stringify(animal);
    return this.http.post(`${this.URL}/animals`, body, this.options) as Observable<Animal>;
  }

  // updateUser(user: User, userId: number): Observable<User> {
  //   const body = JSON.stringify(user);
  //   return this.http.put(`${this.URL}/users/${userId}`, body, this.options)
  //   .pipe(catchError(this.handleError('updateUser', []))) as Observable<User>;
  // }

  deleteAnimal(animalId: string): Observable<Animal> {
    return this.http.delete(`${this.URL}/animals/${animalId}`, this.options) as Observable<Animal>;
  }
}
