document.getElementById("Btn").addEventListener("click", function() {
    // Get the user input
    let temperatureInput = document.getElementById("temperature").value;
    let unitInput = document.getElementById("unit").value;
  
    // Validate the temperature input
    if (temperatureInput.trim() === "" || isNaN(temperatureInput)) {
      alert("Please enter a valid temperature!");
      return;
    }
  
    // Convert the temperature
    let convertedTemperature;
    if (unitInput === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    }
  
    // Display the converted temperature
    let resultElement = document.getElementById("result");
    resultElement.textContent = `Temperature: ${convertedTemperature.toFixed(2)} ${unitInput.toUpperCase()}`;
  });