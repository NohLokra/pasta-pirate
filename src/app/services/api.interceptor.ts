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

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	constructor( private _router: Router ) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// Si l'on tape sur localhost et que l'on est pas sur un des endpoints /auth et /user alors on vise un endpoint de données
		let isApiDataEndpoint = (
			req.url.indexOf("localhost:9000") !== -1 &&
			( req.url.indexOf("/auth") === -1 && req.url.indexOf("/users") === -1 )
		);

		// Dans le cas de création d'un user ou authentification on laisse simplement passer la requête
		if ( !isApiDataEndpoint ) {
			let resultRequest = req.clone({
				setParams: {
					access_token: "masterkey"
				}
			});

			return next.handle(resultRequest);
		} else {
			// Sinon on ajoute l'access_token de l'utilisateur s'il est connecté
			let access_token = localStorage.getItem("access_token");

			let resultRequest = req.clone();
			if ( !!access_token ) {
				resultRequest = resultRequest.clone({
					setParams: {
						access_token: access_token
					}
				});
			}

			// Puis on passe la requête à la suite et on ajoute un traitement de la réponse
			return next.handle(resultRequest).do((event: HttpEvent<any>) => {
				// L'API nous renvoie un résultat de forme différente que ce que les components attendent
				// Ici on fait un sorte de respecter le format attendu
				if (event instanceof HttpResponse ) {
					let resultEvent = event.clone({
						body: event.body.rows
					});
					return resultEvent;
				}

				return event;
			}, (err: any) => {
				// Si on prends une erreur de type 401 Unauthorized, le token n'est plus valide donc on redirige vers la page de login
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						this._router.navigate['/login'];
					}
				}
			});
		}

	}
}
