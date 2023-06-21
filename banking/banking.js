'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

function userId(account) {
    const userIds = [];
    account.owner.split(' ').forEach(element => {
        userIds.push(element[0]);
    });
    account.userId = userIds.join('').toLocaleLowerCase();
    console.log(account.userId, account.pin);
}

accounts.forEach(acc => {
    userId(acc);
})

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let selectedAcc;
let MinsTimer;
let sorted = false

labelDate.innerHTML = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`

function fetchAcc() {
    let withdrawalMoves = 0, depositMoves = 0;
    console.log(selectedAcc.movements);

    selectedAcc.movements.forEach(i => {
        if (i.toString().includes('-')) {
            withdrawalMoves += i;
        } else {
            depositMoves += i;
        }
    });

    labelBalance.innerHTML = `${depositMoves - withdrawalMoves}€`;
    labelSumIn.innerHTML = `${depositMoves}€`;
    labelSumOut.innerHTML = `${withdrawalMoves}€`;
}

function displayMovements(account) {
    account.forEach((value, i) => {

        // let type = value.toString().includes('-') ? 'withdrawal' : 'deposit';
        let type = value < 0 ? 'withdrawal' : 'deposit';
        containerMovements.innerHTML += `<div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">${i + 1} days ago</div>
                <div class="movements__value">${value} €</div>
            </div>`;
    });
}

function timerStart() {
    let interval = 1;
    let hours = 4; //we can change

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

function logout() {
    if (MinsTimer) clearInterval(MinsTimer);
    selectedAcc = {};
    containerApp.classList.add('opacity-0');
    btnLogout.classList.add('opacity-0');
}

btnLogin.addEventListener('click', () => {
    accounts.forEach(acc => {

        if (inputLoginUsername.value == acc.userId && inputLoginPin.value == acc.pin) {
            selectedAcc = acc;
            timerStart();
            containerApp.classList.remove('opacity-0');
            btnLogout.classList.remove('opacity-0');
            labelWelcome.innerHTML = `Welcome, ${acc.owner}`;
            labelBalance.innerHTML = 300;
            displayMovements(acc.movements);
            fetchAcc();
        }

    });

});

btnLoan.addEventListener('click', () => {
    console.log(selectedAcc);
    selectedAcc.movements.push(Number(inputLoanAmount.value));
    console.log(selectedAcc.movements);
    let type = inputLoanAmount.value.includes('-') ? 'withdrawal' : 'deposit';

    containerMovements.innerHTML += `<div class="movements__row">
                <div class="movements__type movements__type--${type}">1 ${type}</div>
                <div class="movements__date">${1} days ago</div>
                <div class="movements__value">${Number(inputLoanAmount.value)} €</div>
            </div>`;
    fetchAcc();
})

btnTransfer.addEventListener('click', () => {

    accounts.forEach(e => {
        if (inputTransferTo.value == e.userId) {
            e.movements.push(Number(inputTransferAmount.value));
            selectedAcc.movements.push(-Number(inputTransferAmount.value));
            console.log(e.movements, 'e.movements');
            fetchAcc();
            containerMovements.innerHTML += `<div class="movements__row">
                <div class="movements__type movements__type--withdrawal">${selectedAcc.movements.length} withdrawal</div>
                <div class="movements__date">1 days ago</div>
                <div class="movements__value">-${Number(inputTransferAmount.value)} €</div>
            </div>`;
        }

    });

})

btnClose.addEventListener('click', () => {
    if (inputCloseUsername.value == selectedAcc.userId && inputClosePin.value == selectedAcc.pin) {
        accounts.splice(i, 1);
    } else {
        console.log('does not exist');
    }
    console.log(accounts);
});

btnSort.addEventListener('click', () => {
    let selectedMoves = selectedAcc.movements;
    containerMovements.innerHTML = '';
    displayMovements(selectedMoves.reverse());
})

btnLogout.addEventListener('click', logout());