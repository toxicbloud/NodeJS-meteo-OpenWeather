var weather = require('openweather-apis');
var now = new Date();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = ('0'+now.getMinutes()).slice(-2);
    weather.setLang('fr');
    // English - en, Russian - ru, Italian - it, Spanish - es (or sp),
    // Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
    // Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
    // Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
    // Turkish - tr, Croatian - hr, Catalan - ca

   let ville = 'Nancy';
    // set city by name
    weather.setCity(ville);
 	// or set the coordinates (latitude,longitude)
   // weather.setCoordinate(50.0467656, 20.0048731);
    // or set city by ID (recommended by OpenWeatherMap)
    //weather.setCityId(4367872);

    // or set zip code
    //weather.setZipCode(33615);

    // 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

    // check http://openweathermap.org/appid#get for get the APPID
     weather.setAPPID("YOUR_OPEN_WEATHER_MAP_API_KEY");

     weather.getTemperature(function(err, temp){
        console.log("à ",ville," il fait ",temp," °C et il est : ",heure,"h:",minute);
    });
