// const api = "https://api.weatherapi.com/v1/current.json?key=63b5ec3c30444ae08f0130656220204&q=London&aqi=no"
const input = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')

searchBtn.addEventListener('click', () => {
	fetch(
		`https://api.weatherapi.com/v1/current.json?key=63b5ec3c30444ae08f0130656220204&q=${input.value}&aqi=no`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			document.querySelector('.weather-img').src =
				data.current.condition.icon
			document.querySelector('.weather-heading').textContent =
				data.location.name + ' - ' + data.location.country
			document.querySelector('.weather-desc').textContent =
				data.current.condition.text
			document.querySelector('.weather-temp').textContent =
				data.current.temp_c + '°C' + ' / ' + data.current.temp_f + '°F'
            document.querySelector('.weather-humidity p').textContent = data.current.humidity + '%'
            document.querySelector('.weather-wind-speed p').textContent = data.current.wind_kph + ' km/h' + ' - ' + data.current.wind_mph + ' mph'
            document.querySelector('.weather-gust p').textContent = data.current.wind_kph + ' km/h' + ' - ' + data.current.wind_mph + 'mph'
            document.querySelector('.weather-vis p').textContent = data.current.vis_km + ' km' + ' - ' + data.current.vis_miles + ' miles'
            document.querySelector('.weather-wind-degree p').textContent = data.current.wind_degree + '°'
            document.querySelector('.weather-wind-dir p').textContent = data.current.wind_dir
            document.querySelector('.weather-pressure p').textContent = data.current.pressure_mb + ' mb' + ' - ' + data.current.pressure_in + ' in'
            document.querySelector('.weather-precip p').textContent = data.current.precip_mm + ' mm' + ' - ' + data.current.precip_in + ' in'
            document.querySelector('.weather-last-updated p').textContent = data.current.last_updated
		})
		.catch((err) => err)
})
