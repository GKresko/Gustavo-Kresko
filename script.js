// Função para converter temperaturas
function converterTemperatura() {

    // Obter valores de entrada

    var celsius = parseFloat(document.getElementById('celcius').value);
    
    // Verificar se o valor inserido é um número

    if (isNaN(celsius)) {
        alert('Por favor, insira um valor numérico para a temperatura em Celsius.');
        return;
    }

    // Converter para Fahrenheit

    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);

    // Converter para Kelvin

    var kelvin = celsius + 273.15;
    document.getElementById('kelvin').value = kelvin.toFixed(2);

}

document.getElementById('celcius').addEventListener('input', converterTemperatura);
