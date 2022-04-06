const $ = document.querySelector.bind(document)
const input = $('.search-input')
const searchBtn = $('.search-btn')

searchBtn.addEventListener('click', () => {
	fetch(
		`https://api.weatherapi.com/v1/current.json?key=63b5ec3c30444ae08f0130656220204&q=${input.value}&aqi=no`
	)
		.then((response) => response.json())
		.then((data) => {
			$('.search input').value = ''
			$('.search input').focus()
			$('.weather-img').src = data.current.condition.icon
			$('.weather-heading').textContent =
				data.location.name + ' - ' + data.location.country
			$('.weather-desc').textContent = data.current.condition.text
			$('.weather-temp').textContent = data.current.temp_c + '°C'
			$('.weather-humidity p').textContent = data.current.humidity + '%'
			$('.weather-wind-speed p').textContent =
				data.current.wind_kph + ' km/h'
			$('.weather-gust p').textContent = data.current.wind_kph + ' km/h'
			$('.weather-vis p').textContent = data.current.vis_km + ' km'
			$('.weather-wind-degree p').textContent =
				data.current.wind_degree + '°'
			$('.weather-wind-dir p').textContent = data.current.wind_dir
			$('.weather-pressure p').textContent =
				data.current.pressure_mb + ' mb'
			$('.weather-precip p').textContent = data.current.precip_mm + ' mm'
			$('.weather-last-updated p').textContent = data.current.last_updated
		})
		.catch((err) => err)
})
