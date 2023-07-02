let form = document.querySelector("form");
let info =document.querySelector(".weather_info");

form.addEventListener("submit", async (e)=>{
   e.preventDefault();

   let input = document.querySelector("input").value;

   const ApiKey = "f960bcba87999b57e43f2a3354fc3584";
   let response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${ApiKey}`);
    let result = await response.json();

    
    info.innerHTML=`${result.name}  -  ${result.main.temp} `;

    


})