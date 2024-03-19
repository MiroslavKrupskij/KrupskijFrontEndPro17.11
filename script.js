function getWeatherByGeolocation() {
  const cityElement = document.getElementById('city');
  const temperatureElement = document.getElementById('temperature');
  const pressureElement = document.getElementById('pressure');
  const descriptionElement = document.getElementById('description');
  const humidityElement = document.getElementById('humidity');
  const speedElement = document.getElementById('speed');
  const degElement = document.getElementById('deg');
  const iconElement = document.getElementById('icon');

  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5d066958a60d315387d9492393935c19`;

          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  const data = JSON.parse(xhr.responseText);

                  cityElement.textContent = data.name;
                  temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                  pressureElement.textContent = `Pressure: ${data.main.pressure} hPa`;
                  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
                  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
                  speedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                  degElement.textContent = `Wind Direction: ${data.wind.deg}°`;
                  iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
              }
          };
          xhr.send();
      });
  } else {
      console.log("Geolocation is not supported by this browser.");
  }
}
getWeatherByGeolocation();