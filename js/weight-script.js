var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");

var resultTypeValue, inputTypeValue;

//add key listeners

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//takign the initial value

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

//function

function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  //When user selects ounce conversion
  if (inputTypeValue === "ounce" && resultTypeValue === "ounce") {
    result.value = input.value;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "pound") {
    result.value = Number(input.value) / 16;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "stone") {
    result.value = Number(input.value) / 224;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "milligram") {
    result.value = Number(input.value) * 28349.523;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "microgram") {
    result.value = Number(input.value) * 2.835e7;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "gram") {
    result.value = Number(input.value) * 28.35;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "kilogram") {
    result.value = Number(input.value) / 35.274;
  } else if (inputTypeValue === "ounce" && resultTypeValue === "metricton") {
    result.value = Number(input.value) / 35273.962;
  }

  //When user selects pound converion

  if (inputTypeValue === "pound" && resultTypeValue === "pound") {
    result.value = input.value;
  } else if (inputTypeValue === "pound" && resultTypeValue === "ounce") {
    result.value = Number(input.value) * 16;
  } else if (inputTypeValue === "pound" && resultTypeValue === "stone") {
    result.value = Number(input.value) / 14;
  } else if (inputTypeValue === "pound" && resultTypeValue === "milligram") {
    result.value = Number(input.value) * 453592.37;
  } else if (inputTypeValue === "pound" && resultTypeValue === "microgram") {
    result.value = Number(input.value) * 4.536e8;
  } else if (inputTypeValue === "pound" && resultTypeValue === "gram") {
    result.value = Number(input.value) * 453.592;
  } else if (inputTypeValue === "pound" && resultTypeValue === "kilogram") {
    result.value = Number(input.value) / 2.205;
  } else if (inputTypeValue === "pound" && resultTypeValue === "metricton") {
    result.value = Number(input.value) / 2204.623;
  }

  //When user selects stone converion

  if (inputTypeValue === "stone" && resultTypeValue === "stone") {
    result.value = input.value;
  } else if (inputTypeValue === "stone" && resultTypeValue === "ounce") {
    result.value = Number(input.value) * 224;
  } else if (inputTypeValue === "stone" && resultTypeValue === "pound") {
    result.value = Number(input.value) * 14;
  } else if (inputTypeValue === "stone" && resultTypeValue === "milligram") {
    result.value = Number(input.value) * 6.35e6;
  } else if (inputTypeValue === "stone" && resultTypeValue === "microgram") {
    result.value = Number(input.value) * 6.35e9;
  } else if (inputTypeValue === "stone" && resultTypeValue === "gram") {
    result.value = Number(input.value) * 6350.293;
  } else if (inputTypeValue === "stone" && resultTypeValue === "kilogram") {
    result.value = Number(input.value) * 6.35;
  } else if (inputTypeValue === "stone" && resultTypeValue === "metricton") {
    result.value = Number(input.value) / 157.473;
  }

  //When user selects milligram converion

  if (inputTypeValue === "milligram" && resultTypeValue === "milligram") {
    result.value = input.value;
  } else if (inputTypeValue === "milligram" && resultTypeValue === "ounce") {
    result.value = Number(input.value) / 28349.523;
  } else if (inputTypeValue === "milligram" && resultTypeValue === "pound") {
    result.value = Number(input.value) / 453592.37;
  } else if (inputTypeValue === "milligram" && resultTypeValue === "stone") {
    result.value = Number(input.value) / 6.35e6;
  } else if (
    inputTypeValue === "milligram" &&
    resultTypeValue === "microgram"
  ) {
    result.value = Number(input.value) * 1000;
  } else if (inputTypeValue === "milligram" && resultTypeValue === "gram") {
    result.value = Number(input.value) / 1000;
  } else if (inputTypeValue === "milligram" && resultTypeValue === "kilogram") {
    result.value = Number(input.value) / 1e6;
  } else if (
    inputTypeValue === "milligram" &&
    resultTypeValue === "metricton"
  ) {
    result.value = Number(input.value) / 1e9;
  }

  //// When user selects microgram conversions

  //// When user selects gram conversions

  //// When user selects kilogram conversions

  //// When user selects metricton conversions
}
