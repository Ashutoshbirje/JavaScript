async function getdata() {
   let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.85&current=temperature_2m,weathercode,wind_speed_10m");
   console.log(typeof response); 

   if (!response.ok) {
      console.error("HTTP error", response.status);
      return;
   }

   let data = await response.json();  

   // console.log(data);                
   // console.log(typeof data);     

   document.querySelector("#time").textContent = data?.current.time.slice(11,16); 
   document.querySelector("#temp").textContent = data?.current.temperature_2m +" °C";
   document.querySelector("#wind").textContent = data?.current.wind_speed_10m +" km/h";

}

getdata();
