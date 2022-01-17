/*
Por convención y buena práctica de programación este es el archivo
que gestionará nuestras rutas de toda la aplicación.

De la línea 1 a 6, se realizan las importaciones necesarias de nuestros componentes.
En la línea 8, se crea una constante que contendrá todas las rutas a las que tendremos
acceso en nuestra aplicación, creando un arreglo de objetos teniendo la ruta y el
componente que hará acción en la misma.
*/

import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {VideojuegosComponent} from "./components/videojuegos/videojuegos.component";
import {VideojuegoComponent} from "./components/videojuego/videojuego.component";
import {BuscadorComponent} from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'videojuego/:id', component: VideojuegoComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
