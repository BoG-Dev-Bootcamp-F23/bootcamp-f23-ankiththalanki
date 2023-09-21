const apiKey = "99eafab321e9a24f779cddd51d7a7ba9";
const city = "Atlanta";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    const temperature = data.main.temp;
    const cityName = data.name;
    const description = data.weather[0].description;
    const weatherDiv = document.getElementById("weather_data");
    const weatherHTML = `
    <p>City: ${city}</p>
    <p>Temperature: ${temperature}</p>
    <p>Weather description: ${description}</p>
    `;
    weatherDiv.innerHTML = weatherHTML;
    

}
document.addEventListener("click", () => {
    fetchData()});
