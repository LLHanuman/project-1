function setUp() {
loadJSON('api.openweathermap.org/data/2.5/weather?q={city name}&appid=(1460cf8db2b228c70ad455e11901c547)')

}


  var city = $(this).attr("data-name");
  var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&apikey=trilogy";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });