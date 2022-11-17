var inputValue = document.querySelector('.form-control');
var btnn = document.querySelector('.btn');
var curTempValue = document.querySelector('.current-temperature__value');
var wether = document.querySelector('.location-and-date__location');
var sunRise = document.querySelector('.sunRise');
var sunSate = document.querySelector('.sunSate');
var wet = document.querySelector('.current-temperature__summary');
var feels = document.querySelector('.feels');
var windSpeed = document.querySelector('.wind-speed');
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var lowTemp = document.querySelector('.low');
var highTemp = document.querySelector('.high')
var firstDate = document.querySelector('.first_date');
var secondDate = document.querySelector('.second_date');
var thirdDate = document.querySelector('.third_date');
var fourthDate = document.querySelector('.fourth-date');
var fifthDate = document.querySelector('.fifth_date');
//var locCoun = document.querySelector('.location-country')
var k = 273;
var dateObj = new Date();
firstDate.innerText = `${dateObj.getDate() + 1}/${dateObj.getMonth()}`
secondDate.innerText = `${dateObj.getDate() + 2}/${dateObj.getMonth()}`
thirdDate.innerText = `${dateObj.getDate() + 3}/${dateObj.getMonth()}`
fourthDate.innerText = `${dateObj.getDate() + 4}/${dateObj.getMonth()}`
fifthDate.innerText = `${dateObj.getDate() + 5}/${dateObj.getMonth()}`

  function displayData(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=bfa7f5b0eb7df00adfe62646c38d0455
    `)
    .then((response)=>{
      debugger
      console.log(response)
      disPlaY(response);
    }
     )
    .catch(response => {
        let {cod } = response.response.data;
       if(cod === '404'){
        alert('City does not exit.')
       }
       console.log(data)
    })
    }
btnn.addEventListener('click', displayData)
inputValue.addEventListener('keyup', (e)=>{
 if(e.key === "Enter") displayData()
})

function disPlaY(response){
  debugger
  let d = new Intl.DateTimeFormat('en', { dateStyle: 'full'});
  const da = new Date();
  debugger
  curTempValue.innerText = `${parseInt(response.data.main.temp - k)}°C`
  wether.innerText = response.data.name + ', ' + response.data.sys.country;
  document.querySelector('.date').innerText = d.format(da);
  wet.innerText = response.data.weather[0].description;
  feels.innerText = `${parseInt(response.data.main.feels_like - k)}°C`;
  windSpeed.innerText = `${parseInt(response.data.wind.speed)}mph`;
  lowTemp.innerText = `${parseInt(response.data.main.temp_min - k)}°C`;
  highTemp.innerText = `${parseInt(response.data.main.temp_max - k)}°C`;
  humidity.innerText = `${response.data.main.humidity}%`;
  pressure.innerText = `${response.data.main.pressure}mb`;
}
 

