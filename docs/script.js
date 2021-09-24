function ConverterFar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmFar = (valorNumerico * 1.8) + 32;
  var valorEmFarFixed = valorEmFar.toFixed(2)

  var elementoValorConvertidoFar = document.getElementById(
    "valorConvertidoFar"
  );
  var valorConvertidoFar = "O resultado em Fahrenheit é " + valorEmFarFixed + " °F";
  elementoValorConvertidoFar.innerHTML = valorConvertidoFar;

  //apagar euro
  var elementoValorConvertidoCelsius = document.getElementById(
    "valorConvertidoCelsius"
  );
  elementoValorConvertidoCelsius.innerHTML = " ";
}


function ConverterCelsius() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var valorEmCelsius = (valorNumerico -32) / 1.8;
  var valorEmCelsiusFixed = valorEmCelsius.toFixed(2)

  var elementoValorConvertidoCelsius = document.getElementById(
    "valorConvertidoCelsius"
  );
  var valorConvertidoCelsius = "O resultado em Celsius é " + valorEmCelsiusFixed + " °C";
  elementoValorConvertidoCelsius.innerHTML = valorConvertidoCelsius;

  //apagar real
  var elementoValorConvertidoFar = document.getElementById(
    "valorConvertidoFar"
  );
  elementoValorConvertidoFar.innerHTML = " ";
}