function formValidation() {
    var name = document.forms["suForm"]["name"].value;
    var pass = document.forms["suForm"]["password"].value;
    var email = document.forms["suForm"]["email"].value;
    var nameIn = document.getElementById("na");
    var passIn = document.getElementById("pass");
    var emailIn = document.getElementById("email");
    if(name == "" || email == "" || pass == ""){
      if (name == "") {
          nameIn.style.border = "3px solid red";
          document.forms["suForm"]["name"].placeholder = "please insert your name";
      }
      if (email == "") {
          emailIn.style.border = "3px solid red";
          document.forms["suForm"]["email"].placeholder = "please insert your email";
      }
      if (pass == "") {
          passIn.style.border = "3px solid red";
          document.forms["suForm"]["password"].placeholder = "please insert your password";
      }
      if (pass.length < 8) {
          passIn.style.border = "3px solid red";
          document.forms["suForm"]["password"].placeholder = "add more characters";
      }
      return false;
    } else {
       window.location.href = "dashboard.html";
       return false;
    }
}
var nasdaq = [12, 19, 3, 5, 2, 3, 6, 18, 15, 7, 20, 17];
var appl =   [1, 14, 20, 8, 19, 16, 9, 14, 3, 6, 17, 10];
var dow =    [15, 12, 13, 11, 12, 19, 3, 5, 2, 3, 6, 18];
var goog =   [4, 8, 19, 7, 6, 10, 15, 4, 8, 5, 16, 18];
var values = nasdaq;
function initiateGraph(){

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
              label: 'monthly variation',
              data: values,
              backgroundColor: [
                  'rgba(1, 9, 2, 0.1)'
              ],
              borderColor: [
                  'rgba(1, 9, 2, 0.4)',
              ],
              borderWidth: 10
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          animation: {
            easing: 'easeOutSine'
          },

          elements: {
            line: {
              tension: 0.5, // disables bezier curves
            }
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  },
                  display: false
              }],

              xAxes: [{
                  display: false,
                  ticks: {
                      beginAtZero:true
                  },
              }],

          },
      }
  });
}
initiateGraph();

function calc(){
  
    var firstVal = values[0];
    var compare;
  for(var i = 0; i<values.length; i++){
    /* compare = values[i]; */
      if(values[i]>firstVal){
      firstVal = values[i];
      }
  }
    var lowValue = values[0];
    var newval;
  for(var x = 0; x<values.length; x++){
      if(values[x]<lowValue){
      lowValue = values[x];
      }
  }
  var val1=0;

  for(var y = 0; y<values.length; y++){
      val1 += values[y];
  }
  average=val1/values.length;


  document.getElementById("lowValRes").innerHTML = lowValue;
  document.getElementById("highValRes").innerHTML = firstVal;
  document.getElementById("averageVal").innerHTML = average.toFixed(1);
}
calc();

function showNasdaq(){
  values = nasdaq;
  initiateGraph();
  calc();
}
function showAppl(){
  values = appl;
  initiateGraph();
  calc();
}
function showDow(){
  values = dow;
  initiateGraph();
  calc();
}
function showGoog(){
  values = goog;
  initiateGraph();
  calc();
}



//weather api
const ROOT_URI2 = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&";
var showTempInCelsius = true;


$(document).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeather);
    // temp toggle here!
  } else {
    $("#weather").html("Sorry! Your browser does not support geolocation");
    console.log("Sorry! Your browser does not support geolocation.");
  }
});

function fetchWeather(position) {
  var lat = "lat=" + position.coords.latitude;
  var lon = "lon=" + position.coords.longitude;
  var key = "appid=fa958f3ff7a234d5ff63a424e0d31f5b";
  //var uri = `${ROOT_URI}${lat}&${lon}`;
  var uri2 = `${ROOT_URI2}${lat}&${lon}&${key}`;
  //$.getJSON(uri, function(json){
    //orasul
    // $(".city").html(json.name);
    //temperatura
    // tempInCelsius = parseFloat(json.main.temp).toFixed();
    // tempFormat = " " + String.fromCharCode(176);
    //$(".temperature").html(tempInCelsius + tempFormat);
    // for icon
    // $("#weather").html(json.weather[0].main);
    // var iconCode = json.weather[0].id;
    // var iconCodeHtml = '<i class="wi wi-owm-' + iconCode + '"></i>';
    // $('.weatherIcon').html(iconCodeHtml);
  //});
  //every 3 hours
  //console.log(uri, uri2);
  $.getJSON(uri2, function(json2){
    //oras
    $(".city").html(json2.city.name);
    //icon
    $("#weather").html(json2.list[0].weather[0].main);
    var iconCode = json2.list[0].weather[0].id;
    var iconCodeHtml = '<i class="wi wi-owm-' + iconCode + '"></i>';
    $('.weatherIcon').html(iconCodeHtml);
    //ora

    var currentH = new Date(json2.list[0].dt_txt).getHours();
    var ampm1 = currentH >= 12 ? 'PM' : 'AM';
    var hourb = new Date(json2.list[1].dt_txt).getHours();
    var ampm2 = hourb >= 12 ? 'PM' : 'AM';
    var hourc = new Date(json2.list[2].dt_txt).getHours();
    var ampm3 = hourc >= 12 ? 'PM' : 'AM';
    var hourd = new Date(json2.list[3].dt_txt).getHours();
    var ampm4 = hourd >= 12 ? 'PM' : 'AM';
    var houre = new Date(json2.list[4].dt_txt).getHours();
    var ampm5 = houre >= 12 ? 'PM' : 'AM';
    var hourf = new Date(json2.list[5].dt_txt).getHours();
    var ampm6 = hourf >= 12 ? 'PM' : 'AM';
    var hourg = new Date(json2.list[6].dt_txt).getHours();
    var ampm7 = hourg >= 12 ? 'PM' : 'AM';
    var hourh = new Date(json2.list[7].dt_txt).getHours();
    var ampm8 = hourh >= 12 ? 'PM' : 'AM';
    if (new Date(json2.list[0].dt_txt).getHours() > 12) {
      currentH=currentH-12;
    }
    if (new Date(json2.list[1].dt_txt).getHours() > 12) {
      hourb=hourb-12;
    }
    if (new Date(json2.list[2].dt_txt).getHours() > 12) {
      hourc=hourc-12;
    }
    if (new Date(json2.list[3].dt_txt).getHours() > 12) {
      hourd=hourd-12;
    }
    if (new Date(json2.list[4].dt_txt).getHours() > 12) {
      houre=houre-12;
    }
    if (new Date(json2.list[5].dt_txt).getHours() > 12) {
      hourf=hourf-12;
    }
    if (new Date(json2.list[6].dt_txt).getHours() > 12) {
      hourg=hourg-12;
    }
    if (new Date(json2.list[7].dt_txt).getHours() > 12) {
      hourh=hourh-12;
    }
    $("#currentHour").html(currentH + ampm1);
    $("#hour2").html(hourb + ampm2);
    $("#hour3").html(hourc + ampm3);
    $("#hour4").html(hourd + ampm4);
    $("#hour5").html(houre + ampm5);
    $("#hour6").html(hourf + ampm6);
    $("#hour7").html(hourg + ampm7);
    $("#hour8").html(hourh + ampm8);
    //temperatura
    $(".temperature").html(parseFloat(json2.list[1].main.temp).toFixed());
    $(".temp2").html(parseFloat(json2.list[2].main.temp).toFixed());
    $(".temp3").html(parseFloat(json2.list[3].main.temp).toFixed());
    $(".temp4").html(parseFloat(json2.list[4].main.temp).toFixed());
    $(".temp5").html(parseFloat(json2.list[5].main.temp).toFixed());
    $(".temp6").html(parseFloat(json2.list[6].main.temp).toFixed());
    $(".temp7").html(parseFloat(json2.list[7].main.temp).toFixed());
    $(".temp8").html(parseFloat(json2.list[8].main.temp).toFixed());
   
  });
}


function fetchWeatherT(pos) {
  var lati = "lat=" + pos.coords.latitude;
  var loni = "lon=" + pos.coords.longitude;
  var key2 = "appid=fa958f3ff7a234d5ff63a424e0d31f5b";
  var uri3 = `${ROOT_URI2}${lati}&${loni}&${key2}`;
	alert("clicked");
    $.getJSON(uri3, function(json2){
    //oras
    $(".city").html(json2.city.name);
    //icon
    $("#weather").html(json2.list[8].weather[0].main);
    var iconCode = json2.list[8].weather[0].id;
    var iconCodeHtml = '<i class="wi wi-owm-' + iconCode + '"></i>';
    $('.weatherIcon').html(iconCodeHtml);
    //ora

    var currentH = new Date(json2.list[8].dt_txt).getHours();
    var ampm1 = currentH >= 12 ? 'PM' : 'AM';
    var hourb = new Date(json2.list[9].dt_txt).getHours();
    var ampm2 = hourb >= 12 ? 'PM' : 'AM';
    var hourc = new Date(json2.list[10].dt_txt).getHours();
    var ampm3 = hourc >= 12 ? 'PM' : 'AM';
    var hourd = new Date(json2.list[11].dt_txt).getHours();
    var ampm4 = hourd >= 12 ? 'PM' : 'AM';
    var houre = new Date(json2.list[12].dt_txt).getHours();
    var ampm5 = houre >= 12 ? 'PM' : 'AM';
    var hourf = new Date(json2.list[13].dt_txt).getHours();
    var ampm6 = hourf >= 12 ? 'PM' : 'AM';
    var hourg = new Date(json2.list[14].dt_txt).getHours();
    var ampm7 = hourg >= 12 ? 'PM' : 'AM';
    var hourh = new Date(json2.list[15].dt_txt).getHours();
    var ampm8 = hourh >= 12 ? 'PM' : 'AM';
    if (new Date(json2.list[8].dt_txt).getHours() > 12) {
      currentH=currentH-12;
    }
    if (new Date(json2.list[9].dt_txt).getHours() > 12) {
      hourb=hourb-12;
    }
    if (new Date(json2.list[10].dt_txt).getHours() > 12) {
      hourc=hourc-12;
    }
    if (new Date(json2.list[11].dt_txt).getHours() > 12) {
      hourd=hourd-12;
    }
    if (new Date(json2.list[12].dt_txt).getHours() > 12) {
      houre=houre-12;
    }
    if (new Date(json2.list[13].dt_txt).getHours() > 12) {
      hourf=hourf-12;
    }
    if (new Date(json2.list[14].dt_txt).getHours() > 12) {
      hourg=hourg-12;
    }
    if (new Date(json2.list[15].dt_txt).getHours() > 12) {
      hourh=hourh-12;
    }
    $("#currentHour").html(currentH + ampm1);
    $("#hour2").html(hourb + ampm2);
    $("#hour3").html(hourc + ampm3);
    $("#hour4").html(hourd + ampm4);
    $("#hour5").html(houre + ampm5);
    $("#hour6").html(hourf + ampm6);
    $("#hour7").html(hourg + ampm7);
    $("#hour8").html(hourh + ampm8);
    //temperatura
    $(".temperature").html(parseFloat(json2.list[9].main.temp).toFixed());
    $(".temp2").html(parseFloat(json2.list[10].main.temp).toFixed());
    $(".temp3").html(parseFloat(json2.list[11].main.temp).toFixed());
    $(".temp4").html(parseFloat(json2.list[12].main.temp).toFixed());
    $(".temp5").html(parseFloat(json2.list[13].main.temp).toFixed());
    $(".temp6").html(parseFloat(json2.list[14].main.temp).toFixed());
    $(".temp7").html(parseFloat(json2.list[15].main.temp).toFixed());
    $(".temp8").html(parseFloat(json2.list[16].main.temp).toFixed());
   
  });
}

//change graphs (tabs)
$(".graphTabs").on('click', function(){
  $(".graphTabs").removeClass("selectedTab");
  $(this).addClass("selectedTab");
});



//open/close navigation

function openNav() {
    document.getElementById("mySidenav").style.width = "33%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}