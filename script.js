let js = "amazing";
if (js === "amazing") alert("javascript is good");
("use srtict");
function logger() {
  console.log("my name is monika");
}

logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 8));

// function declaration
function calAge(birthyear) {
  return 2023 - birthyear;
}
console.log(calAge(1997));

// function expression
const age1 = function (birthyear) {
  return (age = 2023 - birthyear);
};
console.log(age1(1995));

//arrow function
const calAge1 = (birthyear) => 2023 - birthyear;
console.log(calAge1(1999));

const calAge2 = (birthyear, currentYear) => currentYear - birthyear;
console.log(calAge2(1999, 2023));

const calAge3 = (birthyear) => {
  const age = 2023 - birthyear;
  const retirement = 65 - age;
  return retirement;
};
console.log(calAge3(1999));

function calAge4(birthyear) {
  const age = 2023 - birthyear;
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
}
console.log(calAge4(1999));

function calAverage(first, second, third) {
  return (first + second + third) / 3;
}

const dolphins = calAverage(44, 23, 71);

const koalas = calAverage(65, 54, 49);

const years = [1990, 1967, 2002, 2010, 2018];
// years.pop(4);
years.filter((year) => {
  console.log(calAge4(year));
});

years.push(2023);
years.filter((year) => {
  if (year == 2023) console.log("hghgh", calAge4(year));
});

// years.every()
years.forEach((yesr) => {
  console.log(yesr);
});

console.log(years.indexOf(2023));
console.log(years.includes(2023));

function isOdd(element, index, array) {
  return element % 2 == 1;
}

console.log([4, 6, 8, 12, 9].findIndex(isOdd));
