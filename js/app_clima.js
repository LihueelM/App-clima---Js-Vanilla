/* Consulto la ubicacion del dispositivo */
window.addEventListener('load' , () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            /* Capturo las coordenada del disspositivo */
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            /*Capturo las etiquetas que utilizare mas adelante  */
            let temperatura = document.querySelector(".temperatura");
            let iconoClima = document.querySelector(".iconoClima");
            let descripcion = document.querySelector(".descripcion");
            let ubicacion = document.querySelector(".ciudad");
            let fondo = document.getElementById('fondo');
            /* Url de la API */
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=451aa8f2fef43a3414f1c441922bdd4a&lang=es&units=metric`
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                /* Traigo los datos que necesito de la API */
                let temp = Math.round(data.main.temp);
                let ciudad = data.name;
                let desc =  data.weather[0].description;
                /* Creo un caso para cada clima generalizado en 7 opciones mas comunes */
                switch(data.weather[0].main){
                    case 'Clear':
                        iconoClima.src = '../animated/day.svg'
                        fondo.src = '../assets/Soleado.mp4'
                    break;
                    case 'Smoke':
                        iconoClima.src = '../animated/cloudy-day-1.svg'
                        fondo.src = '../assets/Nublado.mp4'
                        break;
                    case 'Clouds':
                        iconoClima.src = '../animated/cloudy-day-2.svg'
                        fondo.src = '../assets/Nublado.mp4'
                        break;
                    case 'Thunderstorm':
                        iconoClima.src = '../animated/thunder.svg'
                        fondo.src = '../assets/Tormenta.mp4'
                        break;
                    case 'Drizzle':
                        iconoClima.src = '../animated/rainy-1.svg'
                        fondo.src = '../assets/Lluvia.mp4'
                        break;
                    case 'Snow':
                        iconoClima.src = '../animated/snowy-1.svg'
                        fondo.src = '../assets/Nieve.mp4'
                        break;
                    case 'Rain':
                        iconoClima.src = '../animated/rainy-4.svg'
                        fondo.src = '../assets/Lluvia.mp4'
                        break;
                }                
                /* Modifico las etiqueta que se encuentran la card */
                temperatura.textContent = `${temp}°C`;
                ubicacion.textContent = `${ciudad}`.toUpperCase();
                descripcion.textContent = `${desc}`.toUpperCase();
            })
            .catch(error => {
                console.log(error)
            })
        })
    }
})