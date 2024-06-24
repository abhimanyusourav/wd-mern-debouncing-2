// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=b093de03ec49c7ecbda6effa20ae016a

const inputBox = document.querySelector("input")
const myContainer = document.querySelector(".container")

let info

function getWeatherData() {


}

inputBox.addEventListener("keypress", function () {

    clearInterval(info)

    info = setTimeout(function () {
        let cityName = inputBox.value

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b093de03ec49c7ecbda6effa20ae016a`)
            .then(function (jsonOutput) {
                return jsonOutput.json()
            })
            .then(function (output) {
                myContainer.innerHTML = `
                <h1>Weather in ${output.name}</h1>
                <p>Weather Desc: ${output.weather[0].description}</p>
                <p>Humidity: ${output.main.humidity}</p>
                `
            })
            .catch(function (error) {
                console.log(error);
            })
    }, 3000)
})