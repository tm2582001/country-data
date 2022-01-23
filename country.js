let displayData = (data)=>{
    let countryName = data[0].name.common;
    document.getElementById("country-name").innerHTML = countryName;
    let flag = data[0].flags.png;
    document.getElementById("flag-image").setAttribute("src",flag);
    let languageSpoken = Object.values(data[0].languages);
    let languageSpokenString = "Languages used are"
    for(let i=0; i<languageSpoken.length; i++){
        languageSpokenString = languageSpokenString +" " + languageSpoken[i];
    }

    document.getElementById("laguage").innerHTML = languageSpokenString;

    let mapLocation = data[0].maps.googleMaps;

    document.getElementById("map-location").setAttribute("href",mapLocation);
}


window.addEventListener('load', ()=>{
    const params = (new URL(document.location)).searchParams;
    const country = params.get('country');
    
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((data)=> (data.json()))
        .then((data)=>(displayData(data)));
    

});