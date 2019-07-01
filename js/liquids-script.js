var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType')
var resultType = document.getElementById('resultType')

var inputTypeValue, resultTypeValue

// adding key listeners

input.addEventListener('keyup', myResult)
inputType.addEventListener('change', myResult)
resultType.addEventListener('change', myResult)

// taking the intitial values
inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult () {
  inputTypeValue = inputType.value
  resultTypeValue = resultType.value

  // if user selected millimeter
  if (inputTypeValue === 'gallon' && resultTypeValue === 'gallon') {
    result.value = input.value
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'pint') {
    result.value = Number(input.value) * 8
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'quart') {
    result.value = Number(input.value) * 4
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'cup') {
    result.value = Number(input.value) * 15.773
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'fluidounce') {
    result.value = Number(input.value) * 128
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'tablespoon') {
    result.value = Number(input.value) * 256
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'teaspoon') {
    result.value = Number(input.value) * 768
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'cubicmeter') {
    result.value = Number(input.value) / 264.172
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'liter') {
    result.value = Number(input.value) * 3.785
  } else if (inputTypeValue === 'gallon' && resultTypeValue === 'milliliter') {
    result.value = Number(input.value) * 3785.412
  }

  // if user selected meter
  if (inputTypeValue === 'meter' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 1000
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
    result.value = Number(input.value) * 0.001
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'Centimeter') {
    result.value = Number(input.value) * 100
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
    result.value = input.value
  }

  // if user selected kilometer
  if (inputTypeValue === 'kilometer' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 1e6
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
    result.value = Number(input.value) * 1000
  } else if (
    inputTypeValue === 'kilometer' &&
    resultTypeValue === 'kilometer'
  ) {
    result.value = input.value
  } else if (
    inputTypeValue === 'kilometer' &&
    resultTypeValue === 'Centimeter'
  ) {
    result.value = Number(input.value) * 100000
  }

  // if user selected centimeter
  if (inputTypeValue === 'Centimeter' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 10
  } else if (inputTypeValue === 'Centimeter' && resultTypeValue === 'meter') {
    result.value = Number(input.value) / 100
  } else if (
    inputTypeValue === 'Centimeter' &&
    resultTypeValue === 'kilometer'
  ) {
    result.value = Number(input.value) / 100000
  } else if (
    inputTypeValue === 'Centimeter' &&
    resultTypeValue === 'Centimeter'
  ) {
    result.value = input.value
  }
}
