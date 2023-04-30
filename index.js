// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
  .container("#viz1")
  .data([{"year": 1991, "name":"alpha", "value": 15},
  {"year": 1992, "name":"alpha", "value": 20},])
  .type("bar")
  .id("name")
  .x("year")
  .y("value")
  .draw()

d3.json("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
  var visualization = d3plus.viz()
  .container("#viz2")
  .data(data)
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: 'false' })
  .draw();
});

var data2 = [
  {"year": 1991, "name":"alpha", "value": 15},
  {"year": 1991, "name":"beta", "value": 10},
  {"year": 1991, "name":"gamma", "value": 5},
  {"year": 1991, "name":"delta", "value": 50},
  {"year": 1992, "name":"alpha", "value": 20},
  {"year": 1992, "name":"beta", "value": 10},
  {"year": 1992, "name":"gamma", "value": 10},
  {"year": 1992, "name":"delta", "value": 43},
]

var visualization = d3plus.viz()
  .container("#viz3")
  .data(data2)
  .type("box")
  .id("name")
  //.x("year:1992")
  .x("year")
  .y("value")
  .draw()

  



