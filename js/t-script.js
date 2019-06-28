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

  if (inputTypeValue === "millisecond" && resultTypeValue === "millisecond") {
    result.value = input.value;
  } else if (inputTypeValue === "millisecond" && resultTypeValue === "second") {
    result.value = Number(input.value) / 1000;
  } else if (inputTypeValue === "millisecond" && resultTypeValue === "minute") {
    result.value = Number(input.value) / 60000;
  } else if (inputTypeValue === "millisecond" && resultTypeValue === "hour") {
    result.value = Number(input.value) / 3.6e6;
  } else if (inputTypeValue === "millisecond" && resultTypeValue === "day") {
    result.value = Number(input.value) / 8.64e7;
  }

  if (inputTypeValue === "second" && resultTypeValue === "millisecond") {
    result.value = Number(input.value) * 1000;
  } else if (inputTypeValue === "second" && resultTypeValue === "second") {
    result.value = input.value;
  } else if (inputTypeValue === "second" && resultTypeValue === "minute") {
    result.value = Number(input.value) / 60;
  } else if (inputTypeValue === "second" && resultTypeValue === "hour") {
    result.value = Number(input.value) / 3600;
  } else if (inputTypeValue === "second" && resultTypeValue === "day") {
    result.value = Number(input.value) / 86400;
  }

  if (inputTypeValue === "minute" && resultTypeValue === "millisecond") {
    result.value = Number(input.value) * 60000;
  } else if (inputTypeValue === "minute" && resultTypeValue === "second") {
    result.value = Number(input.value) * 60;
  } else if (inputTypeValue === "minute" && resultTypeValue === "minute") {
    result.value = input.value;
  } else if (inputTypeValue === "minute" && resultTypeValue === "hour") {
    result.value = Number(input.value) / 60;
  } else if (inputTypeValue === "minute" && resultTypeValue === "day") {
    result.value = Number(input.value) / 1440;
  }

  if (inputTypeValue === "hour" && resultTypeValue === "millisecond") {
    result.value = Number(input.value) * 3.6e6;
  } else if (inputTypeValue === "hour" && resultTypeValue === "second") {
    result.value = Number(input.value) * 3600;
  } else if (inputTypeValue === "hour" && resultTypeValue === "minute") {
    result.value = Number(input.value) * 60;
  } else if (inputTypeValue === "hour" && resultTypeValue === "hour") {
    result.value = input.value;
  } else if (inputTypeValue === "hour" && resultTypeValue === "day") {
    result.value = Number(input.value) / 24;
  }

  if (inputTypeValue === "day" && resultTypeValue === "millisecond") {
    result.value = Number(input.value) * 8.64e7;
  } else if (inputTypeValue === "day" && resultTypeValue === "second") {
    result.value = Number(input.value) * 86400;
  } else if (inputTypeValue === "day" && resultTypeValue === "minute") {
    result.value = Number(input.value) * 1440;
  } else if (inputTypeValue === "day" && resultTypeValue === "hour") {
    result.value = Number(input.value) * 24;
  } else if (inputTypeValue === "day" && resultTypeValue === "day") {
    result.value = input.value;
  }
}
