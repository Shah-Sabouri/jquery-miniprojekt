# Väderapp med jQuery

## Introduktion

Ni ska skapa en app som hämtar väderinformation för en given stad och visar resultatet. Ni kommer att använda jQuery för att hantera användarinteraktioner och skicka API-förfrågningar till OpenWeatherMap för att få väderdata.

## Steg 1: Installera och kom igång

1. Gå till [OpenWeatherMap](https://openweathermap.org/api) och skapa ett konto för att få en API-nyckel.
2. Läs dokumentationen: [OpenWeatherMap documentation](https://openweathermap.org/current)
3. Sätt in din egen API-nyckel i `config.js` på raden där variabeln `apiKey` är deklarerad.
4. Skapa din url: [URL Format](https://openweathermap.org/current#format)

## Steg 2: Lägg till funktionalitet

I filen `script.js`, kommer du att hitta kommentarer markerade som `TODO`. Fyll i dessa sektioner för att:

1. Lyssna på ett klick på knappen
2. Hämta värdet från textfältet
3. Kontrollera att något är inskrivet
4. Skapa en API-länk med rätt stad och nyckel
5. Göra ett API-anrop med `$.get(...)`
6. Läsa ut information ur svaret
7. Visa informationen i `#result` 
8. Hantera om det blir fel (t.ex. felstavad stad)

Tips: kör `console.log()` lite här och där för att se:

- Värden
- Data
- Errors
- mm

## Steg 3: Styla appen

Det finns grundläggande CSS i `style.css` men kan du lägga till din egen styling för göra den som du vill ha den.

## Extra uppgifter

Är ni klar tidigt med appen kan ni försöka er på dessa:

1. Stötta Enter-tangenten
2. Lägg till flera städer i en lista.
3. Lägg till lokal tid för varje stad

## Länkar

* [jQuery](https://www.w3schools.com/jQuery/default.asp)
* [.get()](https://www.w3schools.com/jQuery/ajax_get.asp)
* [jQuery references](https://www.w3schools.com/jQuery/jquery_ref_overview.asp)

---

Happy Coding!
