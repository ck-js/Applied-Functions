
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


