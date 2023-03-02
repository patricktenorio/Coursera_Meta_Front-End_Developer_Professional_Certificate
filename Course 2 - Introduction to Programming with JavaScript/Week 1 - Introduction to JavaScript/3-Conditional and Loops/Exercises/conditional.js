// First Excercise (conditional statement)
var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

// Second Excercise (switch statement)
var day = "Hotdog";

switch (day) {
    case "Monday":
        console.log("Do chest exercise");
        break;
    case "Tuesday":
        console.log("Do arms exercise");
        break;
    case "Wednesday":
        console.log("Do back exercise");
        break;
    case "Thursday":
        console.log("Do cardio exercise");
        break;
    case "Friday":
        console.log("Do legs exercise");
        break;
    case "Saturday":
        console.log("Do abs exercise");
        break;
    case "Sunday":
        console.log("Rest Day");
        break;
    default:
        console.log("There is no such day");
        break;
}