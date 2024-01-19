const apikey="540d6234f23289f1ad44e01a21a54a63";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector('.search input');
const searchbtn = document.querySelector('.search button')
const weather_icon = document.querySelector('.weather-icon')

async function check_weather(city_name){

  const response = await fetch(apiurl + city_name +`&appid=${apikey}`);
  const data = await response.json();

  if(response.status == 404)
  {
    document.querySelector('.error').style.display = "block";
  }

  else{

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


    if(data.weather[0].main=='Clouds'){
       weather_icon.src='images\\clouds.png';
        // weather_icon.src='D:\4th Year\Javascript\weather\images\\clouds.png';
    }
    else if(data.weather[0].main=='Clear')
    {
        weather_icon.src='images\\clear.png';
        // weather_icon.src='D:\4th Year\Javascript\weather\images\clear.png';

    }
    else if(data.weather[0].main=='Rain')
    {
         weather_icon.src='images\\rain.png';
  //        weather_icon.src='D:\4th Year\Javascript\weather\images\rain.png';
    }
    else if(data.weather[0].main=='Drizzle')
    {
          weather_icon.src='images\\drizzle.png';
          // weather_icon.src='D:\4th Year\Javascript\weather\images\drizzle.png';
    }
    else if(data.weather[0].main=='Mist')
    {
          weather_icon.src='images\\mist.png';
    }
    else if(data.weather[0].main=='Snow')
    {
          weather_icon.src='images\\snow.png';
    }


  document.querySelector('.weather').style.display = "block";
  document.querySelector('.error').style.display = "none";


  }




}
// check_weather();


searchbtn.addEventListener('click', ()=>{
  check_weather(searchbox.value);
})
