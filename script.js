// access to DOM elements
const cityInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const images = document.querySelector('.icon');

//async function for getting weather  that takes a city parameter
async function  getWeather(city) {
    // API Request and Data Handling
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=376c0a52672f9c958597bcb9515282ff&&units=metric`;
    //await fetching data
    const response = await fetch(url);
    
    //check city name is not valid
    if(response.status === 404) {
        alert('Invalid city name');
    }
    //await for response data
    const data = await response.json();
    
    //display weather in DOM
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.cityName').innerHTML = data.name;

    //display weather icon
    if(data.weather[0].main === 'Clouds') {
        images.src = './icons/cloud.png';
    }else if(data.weather[0].main === 'Clear') {
        images.src = './icons/clear.png';
    }else if(data.weather[0].main === 'Rain') {
        images.src = './icons/rain.png';
    }else if(data.weather[0].main === 'Drizzle') {
        images.src = './icons/drizzle.png';
    }else if(data.weather[0].main === 'Mist') {
        images.src = './icons/mist.png';
    }

};

//event listener for search button
//When the button is clicked, the getWeather function is called with the value of the input field
searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value);

});

