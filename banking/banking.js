'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2023-06-20T17:01:17.194Z',
        '2023-06-21T23:36:17.929Z',
        '2023-06-22T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const btnLogout = document.querySelector('#logout');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

(function createUserIds() { //using map method
    accounts.forEach(acc => {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
        console.log(acc.username);
    })
})();

let currentAcc, timer;
let MinsTimer;
let sorted = false

const startLogouttimer = () => {
    const tick = () => {
        const min = String(Math.trunc(time / 60)).padStart(2, 0)
        const sec = String(time % 60).padStart(2, 0);

        //in each call, print the remaining time to UI
        labelTimer.textContent = `${min}:${sec}`;

        //When 0 seconds , stop time & user log out
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = 'Log in to get started';
            containerApp.classList.add('opacity-0');
        }

        //decrese 1s
        time--;

    }

    // set time to 5 mins 
    let time = 120;

    //call the timer every seconds 
    tick();
    const timer = setInterval(tick, 1000);
    return timer;

}

const calcPrintBalance = (acc) => {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

    // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
}

const calcDisplaySumarry = (account) => {
    const income = account.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
    // labelSumIn.textContent = `${income.toFixed(2)}€`;
    labelSumIn.textContent = formatCur(income, account.locale, account.currency);


    const out = account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
    // labelSumOut.textContent = `${out.toFixed(2)}€`;
    labelSumOut.textContent = formatCur(out, account.locale, account.currency);

    const interest = account.movements.filter(mov => mov > 0).map(deposit => (deposit * account.interestRate) / 100).filter(int => int >= 1).reduce((acc, int) => acc + int, 0);
    // labelSumInterest.textContent = `${Math.trunc(interest.toFixed(2))}€`
    labelSumInterest.textContent = formatCur(interest, account.locale, account.currency);
}

const formatCur = (value, locale, currency) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value)
}
console.log(new Date());
const formatMovementDate = (date, locale) => {

    const calDayPassed = (date1, date2) => { return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) };

    const dayPassed = calDayPassed(new Date(), date);

    if (dayPassed === 0) return 'Today';
    if (dayPassed === 1) return 'Yesterday';
    if (dayPassed <= 7) return `${dayPassed} days ago`

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // return `${day}/${month}/${date.getFullYear()}`;

    return new Intl.DateTimeFormat(locale).format(date);
}

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';
    // textContent = only text info   and innerHTML mean all with div

    //using it for sorting copy of main movements array
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementDate(date, acc.locale)

        const formattedMov = formatCur(mov, acc.locale, acc.currency)

        const html = `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">${displayDate} </div>
                <div class="movements__value">${formattedMov}</div>
            </div>`;
        // <div class="movements__value">${mov.toFixed(2)} €</div> its also correct
        containerMovements.insertAdjacentHTML('afterbegin', html); //imp
    });
}

const updateUI = (acc) => {
    calcPrintBalance(acc);
    displayMovements(acc);
    calcDisplaySumarry(acc);
}


btnLogin.addEventListener('click', (e) => {
    //prevent from submitting
    e.preventDefault()

    currentAcc = accounts.find(acc => inputLoginUsername.value === acc.username)

    if (currentAcc?.pin === Number(inputLoginPin.value)) { //optional chain ?

        containerApp.classList.remove('opacity-0');
        labelWelcome.textContent = `Welcome, ${currentAcc.owner.split(' ')[0]}`;

        inputLoginUsername.value = inputLoginPin.value = '';
        //inputLoginPin.blur()

        //current date  & time
        // const now = new Date()
        // const day = `${now.getDate()}`.padStart(2, 0);
        // const month = `${now.getMonth() + 1}`.padStart(2, 0);
        // const hours = `${now.getHours()}`.padStart(2, 0);
        // const minutes = `${now.getMinutes()}`.padStart(2, 0);
        // labelDate.textContent = `${day}/${month}/${now.getFullYear()}, ${hours}:${minutes}`

        //current date  & time
        const now = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            // weekday: 'long',
        }
        // const locale = navigator.language; //en-US
        labelDate.textContent = new Intl.DateTimeFormat(currentAcc.locale, options).format(now)
        // Friday, 23 June 2023 at 15:54

        if (timer) clearInterval(timer); //anather if running need to clear
        timer = startLogouttimer();

        //update ui
        updateUI(currentAcc);
    }

});

function timerStart() {
    let interval = 1;
    let hours = 2; //we can change

    MinsTimer = setInterval(() => {
        let minutes = 60;
        labelTimer.innerHTML = `0${hours} :${interval > 50 ? '0' : ''}${minutes - interval}`
        // console.log(interval++);

        if (interval == 61) {
            if (hours == 0) {
                logout();
            }
            minutes = 60;
            interval = 0;
            hours = hours - 1;
        }

    }, 1000);
}
// timerStart();
function logout() {
    if (MinsTimer) clearInterval(MinsTimer);
    currentAcc = {};
    containerApp.classList.add('opacity-0');
    btnLogout.classList.add('opacity-0');
}

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);
    if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
        setTimeout(() => {
            if (ing.includes('spinach')) clearTimeout(pizzaTimer)
            //loan added
            currentAcc.movements.push(amount)

            //add loan date
            currentAcc.movementsDates.push(new Date().toISOString());

            //update ui
            updateUI(currentAcc)

            //reset timer
            clearInterval(timer);
            timer = startLogouttimer();
        }, 2500);
    }

    inputLoanAmount.value = '';

})

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);

    const receiverAcc = accounts.find(acc => inputTransferTo.value === acc.username)

    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && currentAcc.balance >= amount && receiverAcc && receiverAcc?.username !== currentAcc.username) {
        //doing transfer
        currentAcc.movements.push(-amount)
        receiverAcc.movements.push(amount)

        //add transfer date
        currentAcc.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        //update ui
        updateUI(currentAcc);

        //reset timer
        clearInterval(timer);
        timer = startLogouttimer();
    }
})

btnClose.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputCloseUsername.value == currentAcc.username && inputClosePin.value == Number(currentAcc.pin)) {
        const index = accounts.findIndex(acc => acc.username === inputCloseUsername.value)

        //delete account
        accounts.splice(index, 1);

        //hide ui
        containerApp.classList.add('opacity-0');
    }

    //clear fields
    inputCloseUsername.value = inputClosePin.value = '';

});

btnSort.addEventListener('click', (e) => {
    e.preventDefault()
    displayMovements(currentAcc, !sorted);
    sorted = !sorted;
})

btnLogout.addEventListener('click', logout());




// labelBalance.addEventListener('click', () => {
//     const movementUI = Array.from(document.querySelectorAll('.movements__value'),
//         el => Number(el.textContent.replace('€', '')));
//     console.log(movementUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]

//     console.log(...document.querySelectorAll('.movements__value'));

// })

labelBalance.addEventListener('click', () => {
    const movs = [...document.querySelectorAll('.movements__row')]
    movs.forEach((row, i) => {
        if (i % 2 == 0) {
            row.style.background = '#e4dfdf'
        }
    })

})

//Array 23 methods in short

/** ARRAY 23 METHODS IN SHORT

*** TO MUTATE ORIGINAL ARRAY ***

$ Add to original Array
    + .push (END)
    + .unshift (START)

$ Remove from original
    + .pop (END)
    + .shift (START)
    + .splice (remove from any index)

$ Others
    + .reverse
    + .sort (acc, dec)
    + .fill (fisrt, last, middle)

*** A NEW ARRAY ***
$ Computed from original
    + .map (loop to change)

$ Filtered using condition
    + .filter

$ Portion of original
    + .slice

$ Adding original to other
    + .concat
    //spread operator

$ Flattening the original
    + .flat (taking all nested array in one array)
    + .flatMap (map & flat)

*** AN ARRAY INDEX ***
$ Based on value
    + .indexOf (value)

$ Based on test condition
    + findIndex

***AN ARRAY ELEMENT ***
$ Based on test condition
    + .find (will get )

*** KNOW IF ARRAY INCLUDES ***
$ Based on value
    + .includes

$ Based on test condition
    + .some
    + .every

*** A NEW STRING ***
$ Based on seperator string
    + .join (from array to string convertor)

*** TO TRANSFORM TO VALUE ***
$ Based on accumulator
    + .reduce (addition of value)

*** TO JUST LOOP ARRAY ***
$ Based on callback
    + .forEach


 *
*/
