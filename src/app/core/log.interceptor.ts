import { Injectable } from  '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.urlWithParams);
    const started = Date.now();
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          const duration = Date.now() - started;
          console.log(duration)
        }
      }));
  }
}
