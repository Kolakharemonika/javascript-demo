'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords);
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const coords = [latitude, longitude]

        var map = L.map('map').setView(coords, 13);

        // https://leafletjs.com/examples/quick-start/

        //change theme1.6.0 https:{s}//tile.openstreetmap.fr/hot//{z}/{x}/{y}.png or https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', function (mapEvent) {
            console.log(mapEvent);
            const { lat, lng } = mapEvent.latlng;
            // localStorage.setItem('latkng', mapEvent.latlng);
            // const lngs = localStorage.getItem('latkng');
            // console.log(lngs); // LatLng(18.580542, 73.779202)

            localStorage.setItem('lnglat', JSON.stringify(mapEvent.latlng));
            const lnglat = JSON.parse(localStorage.getItem('lnglat'));
            console.log(lnglat); // {lat: 18.57875352190131, lng: 73.77714157104494}

            L.marker([lat, lng]).addTo(map)
                .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup'
                }))
                .openPopup();
        })
        // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    }, function () {
        alert('could not get your position')
    });
}

function reset() {
    localStorage.removeItem('latkng');
    localStorage.removeItem('lnglat');

    location.reload();
}