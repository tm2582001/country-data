// displaying data
let displayData = (data)=>{
    document.getElementById("data-load").style.display = "none";
    let countryName = data[0].name.common;
    document.getElementById("country-name").innerHTML = countryName;
    document.getElementById("country-name").style.display= "block";
    let flag = data[0].flags.png;
    document.getElementById("flag-image").setAttribute("src",flag);
    document.getElementById("flag-image").style.display = "inline-block";

    let languageSpoken = Object.values(data[0].languages);
    let languageSpokenString = "Languages used are"
    for(let i=0; i<languageSpoken.length; i++){
        languageSpokenString = languageSpokenString +" " + languageSpoken[i];
    }

    document.getElementById("laguage").innerHTML = languageSpokenString;
    document.getElementById("laguage").style.display = "block";

    let mapLocation = data[0].maps.googleMaps;

    document.getElementById("map-location").setAttribute("href",mapLocation);
    document.getElementById("map-info").style.display = "block";
}

// requesting data
window.addEventListener('load', ()=>{
    const params = (new URL(document.location)).searchParams;
    const country = params.get('country');
    
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((data)=> (data.json()))
        .then((data)=>(displayData(data)));
    

});