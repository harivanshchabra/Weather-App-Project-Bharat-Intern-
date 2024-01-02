const apiKey = "6b8a95d8151acfe441d9f550e054216a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const WeatherIcon = document.querySelector(".weather img")


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button" )
async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`)
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    } 
    else {
        let data = await response.json();
        let country = data.sys.country;
        document.querySelector(".city").innerHTML=data.name +" " + country;
        document.querySelector(".temp").innerHTML= data.main.temp + "°C ";
        document.querySelector(".humidity").innerHTML = data.main.humidity
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        
        
    
        if (data.weather[0].main == "Clouds" ){
        WeatherIcon.src="images/icons8-cloud-100.png"
        }
        else if (data.weather[0].main == "Mist" ){
            WeatherIcon.src="images/icons8-mist-100.png"
    }
        else if (data.weather[0].main == "Haze" ){
        WeatherIcon.src="images/icons8-haze-100.png"
    }
        else if (data.weather[0].main == "Rain" ){
        WeatherIcon.src="images/icons8-rain-100.png"
    }
        else if (data.weather[0].main == "Drizzle" ){
        WeatherIcon.src="images/icons8-drizzle-100.png"
    }
        else if (data.weather[0].main == "Snow" ){
        WeatherIcon.src="images/icons8-snow-100.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display = "none"

    }
    }
 
    
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})


;
