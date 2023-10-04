// Simulated sensor readings (replace with real data source)
const simulatedData = {
    temperature: 25.5,
    gasLevel: 50,
    humidity: 60,
};

// Function to update sensor readings on the UI
function updateSensorReadings() {
    // Update sensor readings
    document.getElementById('temperature').textContent = `${simulatedData.temperature.toFixed(1)} °C`;
    document.getElementById('gas-level').textContent = `${simulatedData.gasLevel} ppm`;
    document.getElementById('humidity').textContent = `${simulatedData.humidity} %`;
}

// Update sensor readings initially and every 5 seconds (for simulation)
updateSensorReadings();
setInterval(updateSensorReadings, 5000);
