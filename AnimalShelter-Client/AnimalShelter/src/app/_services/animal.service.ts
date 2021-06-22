import { Injectable } from '@angular/core';
import { CONFIG } from '../core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../core/http-error-handler.service';
import { Animal } from '../_models/animal';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AnimalService {
  URL = CONFIG.baseUrls.apiUrl;
  headers = new HttpHeaders({  'Content-Type': 'application/json' });
  options = { headers: this.headers };
  private handleError: HandleError;

  constructor( private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AnimalService');
  }

  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.URL}/animals`, this.options)
      .pipe(catchError(this.handleError('getAllAnimals', []))) as Observable<Animal[]>;
  }

  getAnimal(animalId: number): Observable<Animal> {
      return this.http.get(`${this.URL}/animals/${animalId}`, this.options)
      .pipe(catchError(this.handleError('getAnimal', []))) as Observable<Animal>;
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

  deleteAnimal(animalId: number): Observable<Animal> {
    return this.http.delete(`${this.URL}/animals/${animalId}`, this.options)
    .pipe(catchError(this.handleError('deleteAnimal', []))) as Observable<Animal>;
  }
}
