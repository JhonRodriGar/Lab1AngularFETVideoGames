/*
Para crear un servicio el cual va a contener la información de cada videojuego seguiremos los
siguientes pasos, primero se crea una carpeta llamada services que contendrá un
archivo videojuegos.service.ts
 */

import {Injectable} from "@angular/core";

@Injectable()
export class VideojuegosService {

  private videojuegos: Videojuego[] = [
    {
      nombre: 'Fornite',
      descripcion: 'Fornite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor general de juego y las mecánicas. Fue anunciado en los Spike Game Awards en 2011.',
      img: 'assets/img/ps4/fornite.jpg',
      lanzamiento: '2017',
      consola: 'PS4'
    },
    {
      nombre: 'Crash Bandicoot',
      descripcion: 'Crash Bandicoot es un videojuego de plataformas desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para PlayStation . El juego fue lanzado en Norteamérica en septiembre de 1996 y en Europa en noviembre de 1996. Este es el segundo videojuego que Naughty del Dog desarrolla para Universal Interactive Studios, siendo el primero Way of the Warrior',
      img: 'assets/img/ps4/crash.jpg',
      lanzamiento: '2008',
      consola: 'Xbox'
    },
    {
      nombre: 'Gears of War',
      descripcion: 'Gears of War es un videojuego de disparos en tercera persona, del género acción-aventura y estrategia y terror, desarrollado por Epic Games utilizando el motor de videojuego Unreal Engine 3. Gears of War fue publicado por Microsoft Game Studios para la consola Xbox 360 el 1 de noviembre de 2006 en América del Norte, el 5 de noviembre en Europa, el 6 de noviembre en Australia y el 10 de enero de 2007 en Japón.',
      img: 'assets/img/ps4/gears.jpg',
      lanzamiento: '2006',
      consola: 'Xbox'
    },
    {
      nombre: 'Halo Infinite',
      descripcion: 'Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S. El juego es desarrollado por 343 Industries y distribuido por Xbox Game Studios. El juego es secuela de la historia de Halo 5: Guardians y Halo Wars 2 pero catalogado por 343 Industries como un reinicio espiritual para la saga Halo, o el inicio de una nueva era de Halo, se sabe que será un juego con inspiración de mundo abierto recordando a Halo CE que tenía un factor de exploración pero que en secuelas se fue volviendo más lineal.',
      img: 'assets/img/ps4/halo.jpg',
      lanzamiento: '2009',
      consola: 'PS4'
    },
    {
      nombre: 'FIFA 22',
      descripcion: 'FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch. Es la vigésimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global. El primer tráiler del juego fue presentado el día 11 de julio de 20214​ y muestra la nueva tecnología Hypermotion, que según palabras de EA brindará nueva experiencia más realista. Estas innovaciones están disponibles únicamente para PlayStation 5, Xbox Series y Stadia.',
      img: 'assets/img/ps4/fifa.jpg',
      lanzamiento: '2014',
      consola: 'PS4'
    },
    {
      nombre: 'grand theft auto v',
      descripcion: 'Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.4​ Posteriormente, distribuido el 18 de noviembre de 2014 para las consolas de nueva generación PlayStation 4 y Xbox One y la vista en primera persona, luego para Microsoft Windows el 14 de abril de 2015 y finalmente se confirmó su lanzamiento para PlayStation 5, Xbox Series X y Xbox Series S para marzo de 2022.',
      img: 'assets/img/ps4/grand.jpg',
      lanzamiento: '2013',
      consola: 'Xbox'
    },
    {
      nombre: 'Minecraft',
      descripcion: 'Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como "Notch"),2​ y posteriormente desarrollado por su empresa, Mojang Studios. Fue lanzado públicamente el 17 de mayo de 2009, después de diversos cambios fue lanzada su versión completa el 18 de noviembre de 2011.',
      img: 'assets/img/ps4/minecraft.jpg',
      lanzamiento: '2009',
      consola: 'Xbox'
    },
    {
      nombre: 'Burnout Paradise',
      descripcion: 'Burnout Paradise (conocido anteriormente como Burnout 5) es un videojuego de carreras abierto de la serie Burnout. Fue anunciado el 22 de enero de 2008 en América del Norte, y el 25 de agosto de 2008 en Europa, para PlayStation 3 y Xbox 360. en PC fue anunciada el 9 de mayo de 2008, y lanzada el 5 de febrero de 2009; dicha versión incluye mejoras y recibe el nombre de The Ultimate Box.',
      img: 'assets/img/ps4/burnout.jpg',
      lanzamiento: '2008',
      consola: 'PS4'
    },
    {
      nombre: 'Ghost of Tsushima',
      descripcion: 'Ghost of Tsushima es un videojuego de acción-aventura desarrollado por Sucker Punch Productions y publicado por Sony Interactive Entertainment para PlayStation 4 y PlayStation 5. Con un mundo abierto para que los jugadores exploren, el juego gira en torno al último samurái en la isla de Tsushima durante la primera invasión mongola de Japón. El lanzamiento del juego se produjo el 17 de julio de 2020.',
      img: 'assets/img/ps4/ghost.jpg',
      lanzamiento: '2020',
      consola: 'PS4'
    },
    {
      nombre: 'Call of Duty: Vanguard',
      descripcion: 'Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games y distribuido por Activision.1​ Es el decimoctavo título de la franquicia Call of Duty. Fue lanzado internacionalmente el 5 de noviembre de 2021 en PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Microsoft Windows.2​ La campaña se desarrolla durante la Segunda Guerra Mundial y se centra en un equipo de fuerzas especiales compuesto por miembros de las Naciones Aliadas.',
      img: 'assets/img/ps4/call.jpg',
      lanzamiento: '2012',
      consola: 'Xbox'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse.')
  }

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0){
        videojuegosArr.push( videojuego );
      }
    }
    return videojuegosArr;
  }
}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
