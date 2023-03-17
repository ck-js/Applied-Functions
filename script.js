
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
    console.log(sound[i]);
}
}
displayBeat("Untz");











