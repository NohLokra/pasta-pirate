import {
	HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


export class ApiInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if ( req.url.indexOf("localhost:9000") === -1 ) {
			next.handle(req);
		} else {
			let access_token = localStorage.getItem("access_token");

			let resultRequest = req.clone();
			if ( !!access_token ) {
				resultRequest = resultRequest.clone({
					setParams: {
						access_token: access_token
					}
				});
			}
			
			return next.handle(resultRequest).do((event: HttpEvent<any>) => {
				// L'API nous renvoie un résultat de forme différente que ce que l'on trouve dans les fakeDataService
				// Ici on fait un sorte de respecter le format attendu
				if (event instanceof HttpResponse) {
					event.body = event.body.rows;
				}
			}, (err: any) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						// redirect to the login route
						// or show a modal
					}
				}
			});
		}

	}
}
