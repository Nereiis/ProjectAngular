import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authApi: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //INTECEPTAMOS/PARAMOS/COJEMOS LA REQUEST DE MI PETICION HTTP

    //A NUESTRA PETICION
    const token = this.authApi.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    })

    //DEVOLVEMOS LA REQUEST Y CONTINUAMOS CON ELLA
    return next.handle(request);
  }
}
