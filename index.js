let fetchData;

let changeData = (value)=>{
    let dataobtained = fetchData.filter((data)=>(data.name.common.toLowerCase().includes(value.toLowerCase())));
    document.getElementById("app").innerHTML= "";
    displayData(dataobtained);
}

let displayData = (data) => {
    data.map((data) => {
        const countryName = document.createElement("h1");
        countryName.innerHTML = data.name.common;
        const image = document.createElement("img");
        image.setAttribute("src", data.flags.png);


        // const imagesrc = document.createAttribute("src");
        // imagesrc.value = data.flags.png;
        // image.setAttributeNode(imagesrc);
        
        const div = document.createElement("div");
        div.appendChild(image);
        div.appendChild(countryName);
        div.classList.add("hello");

        div.addEventListener("click", (abc)=>{
            // console.log(abc.target);
            // console.log(data);
            console.log("clicked");
            window.location = `country.html?country=${data.name.common}`
        });

        document.getElementById("app").appendChild(div);
    });
}


fetch("https://restcountries.com/v3.1/all")
    .then((data) => (data.json()))
    .then((data) => (data.sort((a, b)=>{
        if(a.name.common < b.name.common) { return -1; }
        if(a.name.common > b.name.common) { return 1; }
        return 0;
    })))
    .then((data) => {fetchData=data; displayData(data)});


