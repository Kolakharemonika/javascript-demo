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

            L.marker([lat, lng]).addTo(map)
                .bindPopup('Workout')
                .openPopup();
        })
        // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    }, function () {
        alert('could not get your position')
    });
}