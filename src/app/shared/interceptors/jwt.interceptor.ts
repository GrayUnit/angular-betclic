import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/login/services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthenticationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authService.currentUserValue;
    request = request.clone({
      setHeaders :{
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': ['GET', 'POST', 'DELETE']
      }
    })
    if(currentUser?.token) {
      request = request.clone({
        setHeaders :{
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}
