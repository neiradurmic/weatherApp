$(document).ready(function() {
  $(function() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var yyyy = today.getFullYear();
 
	today = dd + ' ' + month[mm] + ' ' + yyyy;
    $("#currentDate").text("Today, " + today);
  });
  var city = [];
  $(".main").hide();
  $(".forecast").hide();
  $(".footer").hide();
  $('#send').click(function(e) {
    e.preventDefault();
	var grad = $('#grad_value').val();
	if (grad !== '') {
  	$.ajax({
    	type: 'GET',
    	url: 'https://api.openweathermap.org/data/2.5/weather?q=' + grad + '&appid=9dcd8991f9f548f9d28bc5cf37a80c4e&units=metric',
    	dataType: 'jsonp',
    	success: function(podaci) {
          $(".main").show();
          city.push(grad);
          $('#weather').empty().text(podaci.weather[0].description);
          $("#grad").empty().text(podaci.name);
          $('#temperatura').empty().text(podaci.main.temp + "°C");
          $('#pressure').empty().append("Pressure: " + podaci.main.pressure + " hPa");
          $('#humidity').empty().append("Humidity: " + podaci.main.humidity + " %");
          $('#minTemp').empty().append("Min temperature: " + podaci.main.temp_min + "°C");
          $('#maxTemp').empty().append("Max temperature: " + podaci.main.temp_max + "°C");
          $('#windSpeed').empty().append("Wind Speed: " + podaci.wind.speed + " m/s");
          $('#windDirection').empty().append("Wind Direction: " + podaci.wind.deg + "°");
          $('#ikon').attr('src', 'http://openweathermap.org/img/w/' + podaci.weather[0].icon + '.png');
      	$('html, body').animate({
        	scrollTop: $(".main").offset().top
      	}, 1000);
    	}
  	})
	} else $("#grad_value").attr("placeholder", "Please enter field")
  });
 
  $(function() {
	var imgArray = ["https://images.unsplash.com/photo-1547987922-84cb5d854c26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
        "https://images.pexels.com/photos/681390/pexels-photo-681390.jpeg",
        "https://images.unsplash.com/photo-1529063646554-11ee07ee3beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        "https://images.unsplash.com/photo-1543993441-772fc73eb04f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "https://images.unsplash.com/photo-1530750149748-0d9ffe88e9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        "https://images.unsplash.com/photo-1515884045391-a9e471f4d36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1476&q=80",
        "https://images.unsplash.com/photo-1539110306704-fabc10bdcad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80",
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1476202699848-a1ec3bae42ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
        "https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1438&q=80",
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1462804685821-b138d454c9c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1431698194201-465e7d003539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80",
        "https://images.unsplash.com/photo-1509838174235-432f709c7bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1513564774965-ac25ddf81e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1508175688576-0c076b47b5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1437149310981-0f2690a6069d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
        "https://images.unsplash.com/photo-1544034287-c9c09e0341a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "https://images.unsplash.com/photo-1544034287-c9c09e0341a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80", "https://images.unsplash.com/photo-1440631194798-e78809f62275?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
  	],
  	randomNumber = Math.floor((Math.random() * imgArray.length)),
	  baseUrl = "url('" + imgArray[randomNumber] + "')";
 
    $(".intro").css('background-image', baseUrl);
  })
 
  $('#send1').click(function(e) {
    e.preventDefault();
	var grad1 = $('#grad_value1').val();
	if (grad1 !== '') {
  	$.ajax({
    	type: 'GET',
    	url: 'https://api.openweathermap.org/data/2.5/weather?q=' + grad1 + '&appid=9dcd8991f9f548f9d28bc5cf37a80c4e&units=metric',
    	dataType: 'jsonp',
    	success: function(podaci) {
          city.push(grad1);
          $(".forecast").hide();
          $('#weather').empty().text(podaci.weather[0].description);
          $("#grad").empty().text(podaci.name);
          $('#temperatura').empty().text(podaci.main.temp + "°C");
          $('#pressure').empty().append("Pressure: " + podaci.main.pressure + " hPa");
          $('#humidity').empty().append("Humidity: " + podaci.main.humidity + " %");
          $('#minTemp').empty().append("Min temperature: " + podaci.main.temp_min + "°C");
          $('#maxTemp').empty().append("Max temperature: " + podaci.main.temp_max + "°C");
          $('#windSpeed').empty().append("Wind Speed: " + podaci.wind.speed + " m/s");
          $('#windDirection').empty().append("Wind Direction: " + podaci.wind.deg + "°");
          console.log(podaci);
          $('#ikon').attr('src', 'https://openweathermap.org/img/w/' + podaci.weather[0].icon + '.png');
    	}
  	})
	} else $("#grad_value1").attr("placeholder", "Please enter field");
  });
 
 
  $('#gumb').click(function(e) {
    e.preventDefault();
	var grad2 = city.slice(-1)[0];
	$.ajax({
  	type: 'GET',
  	url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + grad2 + '&appid=9dcd8991f9f548f9d28bc5cf37a80c4e&units=metric',
      dataType: 'jsonp',
  	success: function(podaci) {
        $("#forecastWeather").empty();
        $(".forecast").show();
        $(".footer").show();
    	var table = '';
    	for (var i = 6; i < podaci.list.length; i += 8) {
      	table += "<tr>";
      	table += "<td>" + podaci.list[i].dt_txt.split(' ')[0];
      	table += "<td><img src='http://openweathermap.org/img/w/" + podaci.list[i].weather[0].icon + ".png'></td>";
      	table += "<td>" + podaci.list[i].main.temp + "</td>";
      	table += "<td>" + podaci.list[i].weather[0].description + "</td>";
      	table += "<td>" + podaci.list[i].main.temp_min + "°C</td>";
      	table += "<td>" + podaci.list[i].main.temp_max + "°C</td>";
      	table += "<td>" + podaci.list[i].main.pressure + "hPa</td>";
      	table += "<td>" + podaci.list[i].main.humidity + "%</td>";
      	table += "<td>" + podaci.list[i].wind.speed + "m/s</td>";
      	table += "<td>" + podaci.list[i].wind.deg + "°</td>";
 	     table += "</tr>";
    	}
        $('#forecastWeather').append('<thead><tr><td>Date</td><td>Weather</td><td>Temperature</td><td>Description</td><td>Min temp</td><td>Max Temp</td><td>Pressure</td><td>Humidity</td><td>Wind Speed</td><td>Wind Direction</td></tr></thead>');
        $("#forecastWeather").append(table);
        $("#nextFiveDays").empty().append("5 Day Forecast for " + podaci.city.name);
    	$('html, body').animate({
      	scrollTop: $(".forecast").offset().top
    	}, 1000);
  	}
	})
  });
  $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
	} else {
      $('#scroll').fadeOut();
	}
  });
  $('#scroll').click(function() {
	$("html, body").animate({
  	scrollTop: 0
	}, 600);
    $(".forecast").hide(2000);
	return false;
  });
});
