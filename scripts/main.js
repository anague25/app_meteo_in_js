const CLEFAPI = '2ca7505a8893eea0813b1632eda08993';
const country = document.querySelector('.country');
const climates = document.querySelector('.climates');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let resultatApi ;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);

        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        // alert(long+' '+lat)
        appelApi(long,lat);
    }, () => {
        alert(`vous avez refuser la geolocalisation , l'application ne peut pas fonctionner`);
    });
}



function appelApi(long,lat){
//     // console.log(long,lat);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`).then((response)=> {

        return response.json();
    }).then((data) => {
       let responseApi = data;
       console.log(responseApi);
       country.innerHTML = responseApi.sys.country;
       wind.innerHTML = responseApi.wind.speed+' Km/h';
       humidity.innerHTML = responseApi.main.humidity+' %';
       localisation.innerHTML = responseApi.name;
       temperature.innerHTML =Math.trunc(responseApi.main.temp)+' °C';
    });

}



