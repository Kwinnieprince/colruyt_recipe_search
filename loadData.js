let temp;
let humidity;
let fineP1;
let fineP2;
let windspeedkmh;
let windgustkmh;
let winddir;
let rainin;
let uv;
let pedestrian;
let bike;
let car;
let lorry;

// window.onload = () => {
//     $(document).ready(() => {
//         getData();
//     });
//   };
  
function getData(){
    $.ajaxSetup({
        async: false
      });
    $.getJSON('https://steenweg.westeurope.cloudapp.azure.com/steenweg/_search').done(function (data) {
        console.log(data.hits.hits[0]._source);
        temp = data.hits.hits[0]._source.temperature;
        humidity = data.hits.hits[0]._source.humidity;
        fineP1 = data.hits.hits[0]._source.fineP1;
        fineP2 = data.hits.hits[0]._source.fineP2;
        windspeedkmh = data.hits.hits[0]._source.windspeedkmh;
        windgustkmh = data.hits.hits[0]._source.windgustkmh;
        winddir = data.hits.hits[0]._source.winddir;
        rainin = data.hits.hits[0]._source.rainin;
        uv = data.hits.hits[0]._source.uv;
        pedestrian = data.hits.hits[0]._source.pedestrian;
        bike = data.hits.hits[0]._source.bike;
        car = data.hits.hits[0]._source.car;
        lorry = data.hits.hits[0]._source.lorry;
        console.log(temp + " " + humidity  + " " + fineP1  + " " +  fineP2 + " " + windspeedkmh + " " + windgustkmh + " " + winddir + " " + rainin + " " + pedestrian + " " + lorry + " " + car + " " + bike);
        });
    $('#temp').append(temp + ' <supq>º</supq>C');
    $('#humidity').append(humidity + ' %');
    $('#windspeed').append(windspeedkmh + ' Km/h');
    $('#windgust').append(windgustkmh + ' Km/h');
    $('#rainin').append(rainin + ' mm/h');
    $('#uv').append(uv + '');
    $('#fineP1').append(fineP1 + ' µg/m<sup>3</sup>');
    $('#fineP2').append(fineP2 + ' µg/m<sup>3</sup>');
    $('#pedestrian').append(pedestrian + ' voetgangers');
    $('#bike').append(bike + ' fietsen');
    $('#car').append(car + " auto's");
    $('#lorry').append(lorry + ' vrachtwagens');
    if(uv > 5){
      $("#uvWords").append(" (Hoog)");
    }else if(uv < 2){
      $("#uvWords").append(" (Laag)");
    }else if(uv < 5){
      $("#uvWords").append(" (Matig)");
    }
    if (fineP1 < 25.00) {
      $("#fineP1Words").append(" (Laag)");
    } else if (fineP1 >= 25.00 && fineP1 < 50.00) {
      $("#fineP1Words").append(" (Gemiddeld)");
    } else if(fineP1 < 50.00) {
      $("#fineP1Words").append(" (Hoog)");
    }
    if (fineP2 < 25.00) {
      $("#fineP2Words").append(" (Laag)");
    } else if (fineP2 >= 25.00 && fineP1 < 50.00) {
      $("#fineP2Words").append(" (Gemiddeld)");
    } else if(fineP2 < 50.00) {
      $("#fineP2Words").append(" (Hoog)");
    }
 } 