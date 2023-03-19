
function displayAlarm(time) {
    if (time === "7:00") {
        console.log("Ring ring");
    }
    console.log("Alarm Checked");
}
displayAlarm("7:00")
function isLying(boolean) {
    console.log("Welcome to Dr Phil");
    if (boolean === false) {
        console.log("Results show you are lying");
    }
} 
isLying(false);

function displaySalary(salary) {
    if (salary <= 2100) {
        salary = salary + 210;
    }
    console.log(salary);
}
displaySalary(2100)

function getTaxedSalary(salary) {
    if (salary > 2300) {
        salary = salary - 1000;
    }
    console.log(salary)
}
getTaxedSalary(2500)

function isGreaterThan(a, b) {
    if (a > b) {
        console.log(a + " is greater than " + b);
    } else {
        console.log(a + " is not greater than " + b);
    }
}
isGreaterThan(3,7)

function multiplyBy2(number) {
    return number * 2;
    return "This line also doesn't execute;"
    console.log("This message won't be shown");
}
const displayMultiplyBy2 = multiplyBy2(10);
console.log(displayMultiplyBy2)

function getDiscount(age) {
    if (age <= 18) {
        return "15% discount applied";
    } else if (age >= 65) {
        return "40% discount for seniors";
    }
    return "No discount applicable";
}
const discount = getDiscount(69);
console.log(discount);

function displayBeat(sound) {
for (let i = 0; i < sound.length; i++) {
    console.log(sound);
}
}
displayBeat("Untz");

function calculateMultiple(multiplier) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * multiplier);
    }
}
calculateMultiple(5);
calculateMultiple(8);

function displayDays(month, year) {
    for (let i = 0; i<=31;i++) {
        console.log(i + " " + month + " " + year);
    }
}
displayDays("January", "2023");

function displayLoop(times) {
    for (let i = 0; i < times; i++) {
        console.log("Ja");
    }
}
displayLoop(3);

function displayDaysLeft(days) {
    for (let i = days; i <=31; i++) {
        console.log(i + " left");
    }
}
displayDaysLeft(24);

const grades = [45, 35, 66];
const search = 66;
function searchGrades(grade, search) {
for (let i = 0; i < grade.length; i++) {
    if (grade[i] === search) {
        console.log("The grade matches the search");
    } 
}
console.log("Thanks for searching");
}
searchGrades(grades, search)

const arr1 = [22, 64, 72, 95];
const arr2 = [1, 64, 38, 74];
function compareArrays(arr1, arr2) {
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
        console.log(arr1[i] + " matches an element in array 2 " + arr2[i]);
    }
}
return "No matches found";
}
compareArrays(arr1, arr2);



