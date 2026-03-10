const button = document.querySelector('#button');

const displayCity = document.querySelector('#city');
const displayTemp = document.querySelector('#temp');
const description = document.querySelector('#description');
const speed = document.querySelector('#speed');
const humidity = document.querySelector('#humidity');

const cityName = document.querySelector('#cityName');

const api_key = '9ac2b29ec2e96dd3d7ad78ef679bcf43';

const handleApi = async () => {

    const city = cityName.value;

    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try{

        const res = await fetch(api);
        const data = await res.json();

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById("weatherIcon").src = iconUrl;

        displayCity.textContent = data.name;
        displayTemp.textContent = data.main.temp + "°C";
        description.textContent = data.weather[0].description;

        speed.textContent = data.wind.speed + " km/h";
        humidity.textContent = data.main.humidity + "%";

    }
    catch(error){
        console.log(error);
        alert("City not found");
    }

}

button.addEventListener("click", handleApi);