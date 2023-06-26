//Building a JavaScript script that converts temperatures between Celsius, Fahrenheit, and Kelvin
const prompt=require("prompt-sync")({sigint:true});
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
  
// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
  
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
  
// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}
  
// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
  
// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}
  
// Taking input from user for temperature and conversion type
let temperature = parseFloat(prompt("Enter the temperature:"));
let unit = prompt("Enter the unit (Celsius, Fahrenheit, or Kelvin):").toLowerCase();
  
// Convert temperature based on the unit
if (unit === "celsius") {
    let fahrenheit = celsiusToFahrenheit(temperature);
    let kelvin = celsiusToKelvin(temperature);
    console.log(temperature + " Celsius = " + fahrenheit + " Fahrenheit");
    console.log(temperature + " Celsius = " + kelvin + " Kelvin");
} 
else if (unit === "fahrenheit") {
    let celsius = fahrenheitToCelsius(temperature);
    let kelvin = fahrenheitToKelvin(temperature);
    console.log(temperature + " Fahrenheit = " + celsius + " Celsius");
    console.log(temperature + " Fahrenheit = " + kelvin + " Kelvin");
} 
else if (unit === "kelvin") {
    let celsius = kelvinToCelsius(temperature);
    let fahrenheit = kelvinToFahrenheit(temperature);
    console.log(temperature + " Kelvin = " + celsius + " Celsius");
    console.log(temperature + " Kelvin = " + fahrenheit + " Fahrenheit");
} 
else {
    console.log("Invalid unit entered. Please enter Celsius, Fahrenheit, or Kelvin.");
}
  
