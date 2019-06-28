var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");

var inputTypeValue, resultTypeValue;

//adding key listeners

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//taking the intitial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  //if user selected millimeter
  if (inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
    result.value = input.value;
  } else if (inputTypeValue === "millimeter" && resultTypeValue === "meter") {
    result.value = Number(input.value) / 1000;
  } else if (
    inputTypeValue === "millimeter" &&
    resultTypeValue === "kilometer"
  ) {
    result.value = Number(input.value) / 1e6;
  } else if (
    inputTypeValue === "millimeter" &&
    resultTypeValue === "Centimeter"
  ) {
    result.value = Number(input.value) / 10;
  }

  //if user selected meter
  if (inputTypeValue === "meter" && resultTypeValue === "millimeter") {
    result.value = Number(input.value) * 1000;
  } else if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === "meter" && resultTypeValue === "Centimeter") {
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
    result.value = input.value;
  }

  //if user selected kilometer
  if (inputTypeValue === "kilometer" && resultTypeValue === "millimeter") {
    result.value = Number(input.value) * 1e6;
  } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue === "kilometer"
  ) {
    result.value = input.value;
  } else if (
    inputTypeValue === "kilometer" &&
    resultTypeValue === "Centimeter"
  ) {
    result.value = Number(input.value) * 100000;
  }

  //if user selected centimeter
  if (inputTypeValue === "Centimeter" && resultTypeValue === "millimeter") {
    result.value = Number(input.value) * 10;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "meter") {
    result.value = Number(input.value) / 100;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "kilometer"
  ) {
    result.value = Number(input.value) / 100000;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Centimeter"
  ) {
    result.value = input.value;
  }
}
