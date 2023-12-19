const CLEFAPI = '2ca7505a8893eea0813b1632eda08993';

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
    // console.log(long,lat);
    // fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=minutely&units=metric&lang=fr&appid='+CLEFAPI).then((response)=> {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=minutely&appid='+CLEFAPI).then((response)=> {

        return response.json;
    }).then((data) => {
        console.log(data);
    });

}


