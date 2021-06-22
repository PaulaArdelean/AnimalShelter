import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExceptionService {
  constructor() { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const err = errorResponse as HttpResponse<JSON>;
    const emsg = err ?
      (err.body ? err.body : JSON.stringify(err)) :
      (err.statusText || 'unknown error');
    return null;
  }
}
