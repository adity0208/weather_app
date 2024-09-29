require('dotenv').config();
let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let descritption= document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form= document.querySelector('form');
form.addEventListener('submit' ,(event)=>{
    event.preventDefault();
    if(valueSearch.value !=''){
        searchWeather();
    }
})
let id = process.env.API_KEY;
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () =>{
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive=> responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png'
            temperature.querySelector('img').src ='https://api.openweathermap.org/img/wn'+data.weather[0].icon+'@4XMLDocument.png';
            temperature.querySelector('figcaption span').innerText=data.main.temp;
            descritption.innerText = data.weather[0].descritption;
            clouds.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }else{
            main.classList.add('error');
            setTimeout(() =>{
                main.classList.remove('error');
            },1000);
        }
        valueSearch.value = '';
         
    })
}

