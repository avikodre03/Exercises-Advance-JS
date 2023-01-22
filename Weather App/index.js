const searchInput = document.getElementById("input")
const dynamicHeading = document.getElementById("dynamicHeading")
const skyCondition = document.getElementById("skyCondition")
const Temperature = document.getElementById("Temperature")
const windSpeed = document.getElementById("windSpeed")
async function func() {

    const location = searchInput.value
    if (location == "") {
        card.classList.remove("card")
        card.innerHTML = ""
        const alert = document.getElementById("alert")
        alert.innerHTML = "*Please Enter a City Name"
    } else {
        const alert = document.getElementById("alert")
        alert.innerHTML = ""
        const card = document.getElementById("card")
        card.classList.add("card")

        const Responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
        const data = await Responce.json()
        console.log(data);
        dynamicHeading.innerHTML = `Weather of ${location}`
        skyCondition.innerHTML = `skyCondition: ${data.weather[0].description}`
        Temperature.innerHTML = `Temperature: ${data.main.temp} C`
        windSpeed.innerHTML = `windSpeed: ${data.wind.speed} Km/h`
    }
}