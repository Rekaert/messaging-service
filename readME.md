# MessagingService

## belső üzenetküldő alkalmazás létrehozása

### REST API alkalmazás felépülése - backend

* ng new messagingService_server paranccsal új project létrehozása
* git init paranccsal local repo létrehozása
* git ignore paranccsal figyelmen kívül hagyandó fájlok beállítása
* npm i paranccsal alap package-k telepítése
* npm init paranccsal package.json létrehozása
* npm i express body-parser helmet morgan mongoose passport paranccsal szükséges modulok telepítése

#### Az alkalmazás fájlstruktúrájának felépülése:

* config nevű mappában létrehozom a database.js fájlt, amely az alap konfigurációs beállításokat tartalmazza
(milyen adatbázishoz kapcsolódik az API, milyen felhasználói adatokkal tudok csatlakozni az adatbázishoz, milyen hoston és porton fut a mongoDB-s adatbázis stb.)

* controllers nevű mappában létrehozom a user.controller.js és a message.controller.js fájlokat, amelyekben a CRUD metódusok kerülnek definiálásra a UserSchemához és a MessageSchemához

* models nevű mappában létrehozom a user.model.js és a message.model.js fájlokat, amelyekben definiálom a UserSchemát és a MessageSchemát

* routers nevű mappában létrehozom a user.router.js és a message.router.js fájlokat, amelyekben meghatározom a CRUD metódusok routing szabályait

* server.js fájl létrehozása, amelyben definiálásra kerül: 
    * a mongoDB-hez való csatlakozás, 
    * beérkező kérések összefűzése body-parser segítségével,
    * 4xx és 5xx-as státuszkódú válaszok loggolása morgannal,
    * alap security beállítása helmet package által
    * Az oldal automatikus frissülésének beállítása
    * API routok beállítása
    * http szerver indítása


### mongoDB adatbázis létrehozása messagingService néven

* létrehozom a kapcsolatot az API és a mongoDB adatbázis között
* messages adattábla létrehozása
* user hozzárendelése az adatbázishoz
* users adattábla létrehozása
* user hozzárendelése az adatbázishoz


### Honlap készítése Angularral - frontend

* ng new messagingService_client paranccsal új project létrehozása
* git init paranccsal local repo létrehozása
* git ignore paranccsal figyelmen kívül hagyandó fájlok beállítása
* npm i paranccsal alap package-k telepítése
* npm init paranccsal package.json létrehozása
* npm i express jquery bootstrap mongoose helmet body-parser stylelint morgan –D paranccsal szükséges modulok telepítése
* ng eject paranccsal webpack.config.js létrehozása
* npm i pug pug-html-loader -D telepítése a pug engine használatához
* a weboldalakhoz komponensek generálása az ng generate component paranccsal

#### Az alkalmazás fájlstruktúrájának felépülése:

* az index.html fájlba behúzom a bootstrap, jquery, fontawesome, googlefonts linkjeit

* app.module.ts fájlba beimportálom a legenerált komponenseket és a navigációt beállítom az útvonalak megadásával

* app.component.pug templetben a fix tartalmakat helyezem el, mint header, benne a navbarral, és footer, benne social ikonokkal, valamint a bejelentkezéshez és regisztrációhoz szükséges modallal

* app.component.ts fájlban definiálom a belépéshez és regisztrációhoz szükséges property-ket és bejelentkezés, kijelentkezés, regisztráció metódusokat.

* az egyes komponensekben (home, profile, knowledge, restfulapi, contact, messaging-service) a tartalmi egységeket külön sectionokban helyeztem el, a sectionokon belül alkalmazva a .container .row .col- bootstrapes osztályokat a reszponzivitás biztosítására.

* a message-service.ts fájlban került definiálásra a belső üzenetküldő alkalmazás adatainak kezeléséhez szükséges CRUD metódusok. Az update metódusnál az egyes adatokat külön modálban lehet módosítani.

* message-service.pug fájlban az adatok megjelenítéséhez szükséges táblázat lett legenerálva, illetve az adatok frissítését lehetővé tevő modal lett elhelyezve külön sectionban.



