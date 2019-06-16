import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
// import { AuthService } from './auth.service';

@Injectable({
 providedIn: 'root'
})
export class FirebaseService {

 constructor(private http: HttpClient) { }

 private handleError(res: HttpErrorResponse) {
  console.error(res);
  return throwError(res.error || 'Server error');
 }
}