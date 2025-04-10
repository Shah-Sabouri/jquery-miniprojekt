// Vänta tills allt på sidan är laddat
$(document).ready(function () {

  $('#getWeather').on('click', function () {
    const city = $('#city').val(); // Hämtar värdet från input-fält

    if (city.trim() === '') {
      $('#error').text('Skriv in stad...');
      $('#return').html('');
      return;
    }

    $('#error').text(''); // Tömmer tidigare felmeddelande

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=84ccd82bceb5e067b1dd317684feeca0&units=metric&lang=se`;

  })

  // TODO: Skapa funktionen för att hämta väderdata
  // Tips: Funktionen ska ta emot en parameter
  
  // TODO: Hämta API-nyckeln från config.js
  // Tips: Använd API_KEY variabeln som är definierad i config.js
  const apiKey = "84ccd82bceb5e067b1dd317684feeca0";
  
  // TODO: Kontrollera om fältet är tomt
  // Om det är tomt, visa ett felmeddelande i #error och avsluta funktionen

  // TODO: Skapa API-URL (använd backticks och infoga city och din API-nyckel)

  // TODO: Gör ett anrop till OpenWeatherMap med $.get()
  // Tips: Använd url som du byggde ovan och logga svaret i konsolen
  // Om det lyckas:
  // - Läs ut: stadsnamn, väderbeskrivning, temperatur, landkod, ikon-id
  // Om anropet misslyckas:
  // Visa ett felmeddelande i #error


  // TODO: Bygg HTML och visa i #result
  // Tips: Använd mallsträngar (backticks) för att bygga HTML

  

  // TODO: Välj knappen och lyssna på klick
  // Tips: Använd .on("click", ...) på rätt element
  

});
