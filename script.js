$(document).ready(function () {

  $('#getWeather').on('click', function () {
    const city = $('#city').val();

    if (city.trim() === '') {
      $('#error').text('Skriv en stad...');
      $('#result').html('');
      return;
    }

    $('#error').text('');

    const apiKey = "84ccd82bceb5e067b1dd317684feeca0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=se`;

    $.get(url, function (data) {
      const name = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const desc = data.weather[0].description;

      const timezoneOffset = data.timezone;
      const localDate = new Date(new Date().getTime() + timezoneOffset * 1000);
      localDate.setHours(localDate.getHours() - 2);
      const localTime = localDate.toLocaleTimeString('sv-SE', {
        hour: '2-digit',
        minute: '2-digit'
      });

      $('#result').append(`
        <div class="weather-card">
          <h3>Väder i ${name}, ${country}</h3>
          <p>${desc}</p>
          <p>Temperatur: ${temp} °C</p>
          <p>Lokal tid: ${localTime}</p>
          <button class="remove">x</button>
        </div>
      `);

      $('.remove').on('click', function() {
        $(this).parent().remove();
      });

    }).fail(function () {
      $('#error').text('Staden hittades inte/fel uppstod');
    });
  });

  $('#city').on('keypress', function (e) {
    if (e.which === 13) {
      $('#getWeather').click();
    }
  });

});

  
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
  
