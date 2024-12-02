# Vi skal lave en webapp
- Backend: ASP.NET Core
- Frontend: Angular


## Hvad er en webapp?

- En *webapp* er et lidt moderne navn for en *webserver* der serverer en app-agtig oplevelse (tænk interaktion)
- En *webserver* er et program, der **lytter** til *HTTP requests* og **svarer** med *HTTP responses*
- *HTTP* står for *HyperText Transfer Protocol* (læs: en protokol der er designet til at sende og modtage HyperText filer)
- En protokol er et ord for et sæt regler man har aftalt at programmer skal følge for at snakke med hinanden


## Hvad er en **HTTP request**?

- En HTTP request er et lille stykke tekst, og kan f.eks. således ud:
  ```text
  GET /index.html HTTP/1.1
  Accept: text/html
  ```
  som frit kan oversættes til: "hej webserver, giv mig index.html. Jeg kan forstå html-filer som svar"


- En request kan have en body
  ```text
  POST /addItemToCart?cartNr=2 HTTP/1.1
  Accept: application/json

  {
    itemId: "de-fedeste-bukser"
  }
  ```
  som kan oversættes til "hej webserver, tilføj de fedeste bukser til min anden indkøbsvogn. Jeg kan forstå JSON-svar."


- En mere generel formel for en HTTP request:
  ```text
  [Metode] [URI] [HTTP-protokol version]
  [Headers]

  [Body]


## Øvelse: Lav din egen HTTP request

- Vi kan åbne en forbindelse til en webserver med `telnet` kommandoen
- Først skal vi installere telnet. `Windows+R`-knap, skriv `optionalfeatures` og tryk `Enter`. Find `Telnet Client`


- Nu kan vi oprette en forbindelse til en hvilken som helst server. Prøv f.eks. *httpbin.org* på port 80
  ```bash
  telnet httpbin.org 80
  ```
- Skriv
  ```text
  GET /ip HTTP/1.1
  Host: httpbin.org
  

  ```
  (hvert bogstav du skriver bliver sendt til serveren med det samme. Slut af med to tomme linjer)
- Kig på dens svar sammen


## Øvelse: Kig på en request i din browser

 - Brug evt `httpbin.org/ip` som eksempel
 - DevTools
 - Copy as cURL


## Øvelse: Lav samme request i Postman



# ASP.NET Core
- Webappens server, også kaldet "backend"
- Et *framework* til webapps og webservices, lavet af Microsoft
- C#


## Lav projektet
- `cd` til hvor projektet skal være
- Opret projektet
  ```bash
  dotnet new web --name wishlists
  ```
  opretter et nyt projekt af typen `web` med navnet `wishlists`
- Åbn projektet i VS Code
  ```bash
  cd wishlists && code .
  ```
- Kør webappen
  ```bash
  dotnet run
  ```


- Lav en lille app med en liste
- Hav et tekstfelt hvor man kan tilføje til listen
- Boilerplate:
  ```c#
  var builder = WebApplication.CreateBuilder(args);
  var app = builder.Build();
  app.UseDefaultFiles();
  app.UseStaticFiles();
  app.Run();
  ```
  Læg filer i wwwroot-mappe



# Angular
- Single Page Application (SPA) framework
- *Frontenden* i vores applikation


- Lidt boilerplate:
```bash
npm install -g @angular/cli
ng new angular
dotnet add package Microsoft.AspNetCore.SpaServices.Extensions
```
```c#
app.UseSpa(spa => {
    spa.Options.PackageManagerCommand = "npm";
    spa.Options.SourcePath = "angular";
    spa.Options.DevServerPort = 4200;
    // doesn't work because of Angular's new build system not outputting expected string when ready
    // spa.UseAngularCliServer("start"); 
    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
});
```