var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");

var inputTypeValue, resultTypeValue;

// adding key listeners

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking the intitial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  // if user selected gallon
  if (inputTypeValue === "gallon" && resultTypeValue === "gallon") {
    result.value = input.value;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "pint") {
    result.value = Number(input.value) * 8;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "quart") {
    result.value = Number(input.value) * 4;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "cup") {
    result.value = Number(input.value) * 15.773;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "fluidounce") {
    result.value = Number(input.value) * 128;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "tablespoon") {
    result.value = Number(input.value) * 256;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "teaspoon") {
    result.value = Number(input.value) * 768;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "cubicmeter") {
    result.value = Number(input.value) / 264.172;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "liter") {
    result.value = Number(input.value) * 3.785;
  } else if (inputTypeValue === "gallon" && resultTypeValue === "milliliter") {
    result.value = Number(input.value) * 3785.412;
  }

  // if user selected quart
  if (inputTypeValue === "quart" && resultTypeValue === "quart") {
    result.value = input.value;
  } else if (inputTypeValue === "quart" && resultTypeValue === "pint") {
    result.value = Number(input.value) * 2;
  } else if (inputTypeValue === "quart" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 4;
  } else if (inputTypeValue === "quart" && resultTypeValue === "cup") {
    result.value = Number(input.value) * 3.943;
  } else if (inputTypeValue === "quart" && resultTypeValue === "fluidounce") {
    result.value = Number(input.value) * 32;
  } else if (inputTypeValue === "quart" && resultTypeValue === "tablespoon") {
    result.value = Number(input.value) * 64;
  } else if (inputTypeValue === "quart" && resultTypeValue === "teaspoon") {
    result.value = Number(input.value) * 192;
  } else if (inputTypeValue === "quart" && resultTypeValue === "cubicmeter") {
    result.value = Number(input.value) / 1056.688;
  } else if (inputTypeValue === "quart" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 1.057;
  } else if (inputTypeValue === "quart" && resultTypeValue === "milliliter") {
    result.value = Number(input.value) * 946.353;
  }

  // if user selected cup
  if (inputTypeValue === "cup" && resultTypeValue === "cup") {
    result.value = input.value;
  } else if (inputTypeValue === "cup" && resultTypeValue === "pint") {
    result.value = Number(input.value) / 1.972;
  } else if (inputTypeValue === "cup" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 15.773;
  } else if (inputTypeValue === "cup" && resultTypeValue === "quart") {
    result.value = Number(input.value) / 3.943;
  } else if (inputTypeValue === "cup" && resultTypeValue === "fluidounce") {
    result.value = Number(input.value) * 8.115;
  } else if (inputTypeValue === "cup" && resultTypeValue === "tablespoon") {
    result.value = Number(input.value) * 16.231;
  } else if (inputTypeValue === "cup" && resultTypeValue === "teaspoon") {
    result.value = Number(input.value) * 48.692;
  } else if (inputTypeValue === "cup" && resultTypeValue === "cubicmeter") {
    result.value = Number(input.value) / 4166.667;
  } else if (inputTypeValue === "cup" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 4.167;
  } else if (inputTypeValue === "cup" && resultTypeValue === "milliliter") {
    result.value = Number(input.value) * 240;
  }

  // if user selected fluidounce
  if (inputTypeValue === "fluidounce" && resultTypeValue === "fluidounce") {
    result.value = input.value;
  } else if (inputTypeValue === "fluidounce" && resultTypeValue === "pint") {
    result.value = Number(input.value) / 16;
  } else if (inputTypeValue === "fluidounce" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 15.773;
  } else if (inputTypeValue === "fluidounce" && resultTypeValue === "quart") {
    result.value = Number(input.value) / 3.943;
  } else if (inputTypeValue === "fluidounce" && resultTypeValue === "cup") {
    result.value = Number(input.value) / 8.115;
  } else if (
    inputTypeValue === "fluidounce" &&
    resultTypeValue === "tablespoon"
  ) {
    result.value = Number(input.value) * 2;
  } else if (
    inputTypeValue === "fluidounce" &&
    resultTypeValue === "teaspoon"
  ) {
    result.value = Number(input.value) * 6;
  } else if (
    inputTypeValue === "fluidounce" &&
    resultTypeValue === "cubicmeter"
  ) {
    result.value = Number(input.value) / 4166.667;
  } else if (inputTypeValue === "fluidounce" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 33.814;
  } else if (
    inputTypeValue === "fluidounce" &&
    resultTypeValue === "milliliter"
  ) {
    result.value = Number(input.value) * 29.574;
  }

  // if user selected tablespoon
  if (inputTypeValue === "tablespoon" && resultTypeValue === "tablespoon") {
    result.value = input.value;
  } else if (inputTypeValue === "tablespoon" && resultTypeValue === "pint") {
    result.value = Number(input.value) / 32;
  } else if (inputTypeValue === "tablespoon" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 256;
  } else if (inputTypeValue === "tablespoon" && resultTypeValue === "quart") {
    result.value = Number(input.value) / 64;
  } else if (inputTypeValue === "tablespoon" && resultTypeValue === "cup") {
    result.value = Number(input.value) / 16.231;
  } else if (
    inputTypeValue === "tablespoon" &&
    resultTypeValue === "fluidounce"
  ) {
    result.value = Number(input.value) / 2;
  } else if (
    inputTypeValue === "tablespoon" &&
    resultTypeValue === "teaspoon"
  ) {
    result.value = Number(input.value) * 3;
  } else if (
    inputTypeValue === "tablespoon" &&
    resultTypeValue === "cubicmeter"
  ) {
    result.value = Number(input.value) / 67628.045;
  } else if (inputTypeValue === "tablespoon" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 67.628;
  } else if (
    inputTypeValue === "tablespoon" &&
    resultTypeValue === "milliliter"
  ) {
    result.value = Number(input.value) * 14.787;
  }

  // if user selected teaspoon
  if (inputTypeValue === "teaspoon" && resultTypeValue === "teaspoon") {
    result.value = input.value;
  } else if (inputTypeValue === "teaspoon" && resultTypeValue === "pint") {
    result.value = Number(input.value) / 96;
  } else if (inputTypeValue === "teaspoon" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 768;
  } else if (inputTypeValue === "teaspoon" && resultTypeValue === "quart") {
    result.value = Number(input.value) / 192;
  } else if (inputTypeValue === "teaspoon" && resultTypeValue === "cup") {
    result.value = Number(input.value) / 48.692;
  } else if (
    inputTypeValue === "teaspoon" &&
    resultTypeValue === "fluidounce"
  ) {
    result.value = Number(input.value) / 6;
  } else if (
    inputTypeValue === "teaspoon" &&
    resultTypeValue === "tablespoon"
  ) {
    result.value = Number(input.value) / 3;
  } else if (
    inputTypeValue === "teaspoon" &&
    resultTypeValue === "cubicmeter"
  ) {
    result.value = Number(input.value) / 202884.202;
  } else if (inputTypeValue === "teaspoon" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 202.884;
  } else if (
    inputTypeValue === "teaspoon" &&
    resultTypeValue === "milliliter"
  ) {
    result.value = Number(input.value) * 4.929;
  }

  // if user selected cubicmeter
  if (inputTypeValue === "cubicmeter" && resultTypeValue === "cubicmeter") {
    result.value = input.value;
  } else if (inputTypeValue === "cubicmeter" && resultTypeValue === "pint") {
    result.value = Number(input.value) * 2113.376;
  } else if (inputTypeValue === "cubicmeter" && resultTypeValue === "gallon") {
    result.value = Number(input.value) * 264.172;
  } else if (inputTypeValue === "cubicmeter" && resultTypeValue === "quart") {
    result.value = Number(input.value) * 1056.688;
  } else if (inputTypeValue === "cubicmeter" && resultTypeValue === "cup") {
    result.value = Number(input.value) * 4166.667;
  } else if (
    inputTypeValue === "cubicmeter" &&
    resultTypeValue === "fluidounce"
  ) {
    result.value = Number(input.value) * 33814.023;
  } else if (
    inputTypeValue === "cubicmeter" &&
    resultTypeValue === "tablespoon"
  ) {
    result.value = Number(input.value) * 67628.045;
  } else if (
    inputTypeValue === "cubicmeter" &&
    resultTypeValue === "teaspoon"
  ) {
    result.value = Number(input.value) * 202884.202;
  } else if (inputTypeValue === "cubicmeter" && resultTypeValue === "liter") {
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === "cubicmeter" &&
    resultTypeValue === "milliliter"
  ) {
    result.value = Number(input.value) * 1e6;
  }

  // if user selected liter
  if (inputTypeValue === "liter" && resultTypeValue === "liter") {
    result.value = input.value;
  } else if (inputTypeValue === "liter" && resultTypeValue === "pint") {
    result.value = Number(input.value) * 2.113;
  } else if (inputTypeValue === "liter" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 3.785;
  } else if (inputTypeValue === "liter" && resultTypeValue === "quart") {
    result.value = Number(input.value) * 1.057;
  } else if (inputTypeValue === "liter" && resultTypeValue === "cup") {
    result.value = Number(input.value) * 4.167;
  } else if (inputTypeValue === "liter" && resultTypeValue === "fluidounce") {
    result.value = Number(input.value) * 33.814;
  } else if (inputTypeValue === "liter" && resultTypeValue === "tablespoon") {
    result.value = Number(input.value) * 67.628;
  } else if (inputTypeValue === "liter" && resultTypeValue === "teaspoon") {
    result.value = Number(input.value) * 202.884;
  } else if (inputTypeValue === "liter" && resultTypeValue === "cubicmeter") {
    result.value = Number(input.value) / 1000;
  } else if (inputTypeValue === "liter" && resultTypeValue === "milliliter") {
    result.value = Number(input.value) * 1000;
  }

  // if user selected milliliter
  if (inputTypeValue === "milliliter" && resultTypeValue === "milliliter") {
    result.value = input.value;
  } else if (inputTypeValue === "milliliter" && resultTypeValue === "pint") {
    result.value = Number(input.value) / 473.176;
  } else if (inputTypeValue === "milliliter" && resultTypeValue === "gallon") {
    result.value = Number(input.value) / 3785.412;
  } else if (inputTypeValue === "milliliter" && resultTypeValue === "quart") {
    result.value = Number(input.value) / 946.353;
  } else if (inputTypeValue === "milliliter" && resultTypeValue === "cup") {
    result.value = Number(input.value) / 240;
  } else if (
    inputTypeValue === "milliliter" &&
    resultTypeValue === "fluidounce"
  ) {
    result.value = Number(input.value) / 29.574;
  } else if (
    inputTypeValue === "milliliter" &&
    resultTypeValue === "tablespoon"
  ) {
    result.value = Number(input.value) / 14.787;
  } else if (
    inputTypeValue === "milliliter" &&
    resultTypeValue === "teaspoon"
  ) {
    result.value = Number(input.value) / 4.929;
  } else if (
    inputTypeValue === "milliliter" &&
    resultTypeValue === "cubicmeter"
  ) {
    result.value = Number(input.value) / 1e6;
  } else if (inputTypeValue === "milliliter" && resultTypeValue === "liter") {
    result.value = Number(input.value) / 1000;
  }
}
