import { Injectable } from '@angular/core';
import { CONFIG } from '../core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../core/http-error-handler.service';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
  URL = CONFIG.baseUrls.apiUrl;
  headers = new HttpHeaders({  'Content-Type': 'application/json' });
  options = { headers: this.headers };
  private handleError: HandleError;

  constructor( private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/users`, this.options)
      .pipe(catchError(this.handleError('getAllUseri', []))) as Observable<User[]>;
  }

  getUser(userId: number): Observable<User> {
      return this.http.get(`${this.URL}/users/${userId}`, this.options)
      .pipe(catchError(this.handleError('getUser', []))) as Observable<User>;
  }

  addUser(user: User): Observable<User> {
    const body = JSON.stringify(user);
    return this.http.post(`${this.URL}/users`, body, this.options) as Observable<User>;
  }

  // updateUser(user: User, userId: number): Observable<User> {
  //   const body = JSON.stringify(user);
  //   return this.http.put(`${this.URL}/users/${userId}`, body, this.options)
  //   .pipe(catchError(this.handleError('updateUser', []))) as Observable<User>;
  // }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete(`${this.URL}/users/${userId}`, this.options)
    .pipe(catchError(this.handleError('deleteUser', []))) as Observable<User>;
  }
}
