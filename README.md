# UniversalDemoV5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Lancer l'appli

A la racine du projet, lancer `ng serve` pour démarrer le serveur. Se rendre ensuite sur `http://localhost:4200/` pour accéder à l'application.

## Services

Dans le app.module.ts, nous n'utilisons que les FakeServices. Il y a également des Services qui utilisent l'API mais ils ne sont pas terminés et fonctionnent mal.

## Authentification

L'authentification des utilisateurs se fait sur la page http://localhost:4200/login. Par défaut, le FakeAuthService est utilisé pour gérer le login mais le AuthService fonctionne aussi et stocke le jeton de session dans le localStorage.
