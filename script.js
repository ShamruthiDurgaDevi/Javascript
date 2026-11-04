// ==========================================
// JAVASCRIPT BASICS - 30 PRACTICE QUESTIONS
// ==========================================


// ==========================================
// PART 1: VARIABLES AND DATA TYPES
// ==========================================

// Q1. var, let and const

function q1() {
    var name = "Priya";
    name = "Shamruthi";
    var name = "Shamruthi Durai";

    let age = 23;
    age = 24;

    {
        let age = 25;
        console.log("Block let:", age);
    }

    const country = "India";

    console.log("Var:", name);
    console.log("Let:", age);
    console.log("Const:", country);
}


// Q2. Variables and typeof

function q2() {
    let name = "Shamruthi";
    let age = 23;
    let programmingKnowledge = "JavaScript, HTML, CSS";

    console.log("Name:", name, typeof name);
    console.log("Age:", age, typeof age);
    console.log("Programming Knowledge:", programmingKnowledge,
        typeof programmingKnowledge);
}


// Q3. Array of 5 fruits

function q3() {
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    console.log("Complete Array:", fruits);
    console.log("First Element:", fruits[0]);
    console.log("Last Element:", fruits[fruits.length - 1]);
}


// Q4. Object properties

function q4() {
    let student = {
        name: "Shamruthi",
        role: "Frontend Developer",
        cgpa: 9
    };

    console.log("Name:", student.name);
    console.log("Role:", student.role);
    console.log("CGPA:", student.cgpa);
}


// Q5. Get name and age using prompt

function q5() {
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");

    alert("Hello " + name);

    console.log("Age:", age);
}


// ==========================================
// PART 2: OPERATORS
// ==========================================

// Q6. Arithmetic Operators

function q6() {
    let a = 20;
    let b = 10;

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    console.log("Modulus:", a % b);
    console.log("Exponentiation:", a ** b);
}


// Q7. Post-increment and Pre-increment

function q7() {
    let a = 5;

    console.log(a++);
    console.log(a);
    console.log(++a);
}


// Q8. Post-decrement and Pre-decrement

function q8() {
    let a = 10;

    let b = a--;
    let c = --a;

    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}


// Q9. Assignment Operators

function q9() {
    let a = 20;

    a += 5;
    console.log("After += :", a);

    a -= 3;
    console.log("After -= :", a);

    a *= 2;
    console.log("After *= :", a);

    a /= 4;
    console.log("After /= :", a);

    a %= 3;
    console.log("After %= :", a);
}


// Q10. Comparison Operators

function q10() {
    console.log(5 == "5");
    console.log(5 === "5");
    console.log(10 != "10");
    console.log(10 !== "10");
}


// Q11. Logical Operators

function q11() {
    let age = 23;
    let hasLicense = true;
    let isStudent = false;

    console.log("AND:", age >= 18 && hasLicense);
    console.log("OR:", isStudent || hasLicense);
    console.log("NOT:", !isStudent);
}


// Q12. Ternary Operator

function q12() {
    let age = Number(prompt("Enter your age:"));

    let result = age >= 18
        ? "You are eligible."
        : "You are not eligible.";

    console.log(result);
}


// ==========================================
// PART 3: TYPE CASTING AND CONDITIONS
// ==========================================

// Q13. Predict Data Types

function q13() {
    console.log(typeof ("hello" + 10));
    console.log(typeof (10 + true));
    console.log(typeof (10 + null));
    console.log(typeof ("hello" + undefined));
}


// Q14. Number Conversion

function q14() {
    let value = prompt("Enter a number:");

    let number = Number(value);

    let result = number + 10;

    console.log("Converted Number:", number);
    console.log("After Adding 10:", result);
}


// Q15. Boolean Conversion

function q15() {
    console.log("Empty String:", Boolean(""));
    console.log("Non-empty String:", Boolean("Hello"));
    console.log("Zero:", Boolean(0));
    console.log("True:", Boolean(true));
}


// Q16. Positive or Negative Number

function q16() {
    let number = Number(prompt("Enter a number:"));

    if (number > 0) {
        console.log("Positive Number");
    } else if (number < 0) {
        console.log("Negative Number");
    } else {
        console.log("The Number is Zero");
    }
}


// Q17. Time-based Conditions

function q17() {
    let time = Number(prompt("Enter the hour (0-23):"));

    if (time < 0 || time > 23 || !Number.isInteger(time)) {
        console.log("Invalid time");
    } else if (time >= 5 && time < 8) {
        console.log("Early Morning");
    } else if (time >= 8 && time < 12) {
        console.log("Morning");
    } else if (time >= 12 && time < 17) {
        console.log("Afternoon");
    } else if (time >= 17 && time < 20) {
        console.log("Evening");
    } else {
        console.log("Night");
    }
}


// Q18. Nested If - Eligibility Check

function q18() {
    let age = Number(prompt("Enter your age:"));
    let height = Number(prompt("Enter your height in cm:"));
    let weight = Number(prompt("Enter your weight in kg:"));

    if (age >= 18) {
        if (height >= 150) {
            if (weight <= 80) {
                console.log("You are eligible.");
            } else {
                console.log("Weight requirement not satisfied.");
            }
        } else {
            console.log("Height requirement not satisfied.");
        }
    } else {
        console.log("Age requirement not satisfied.");
    }
}


// ==========================================
// PART 4: SWITCH AND LOOPS
// ==========================================

// Q19. Traffic Light using Switch

function q19() {
    let color = prompt("Enter traffic light color:")
        .toLowerCase();

    switch (color) {
        case "red":
            console.log("STOP");
            break;

        case "yellow":
            console.log("READY");
            break;

        case "green":
            console.log("GO");
            break;

        default:
            console.log("Invalid Traffic Light Color");
    }
}


// Q20. Print Numbers 1 to 20

function q20() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}


// Q21. Print Even Numbers 2 to 20

function q21() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}


// Q22. While Loop - 10 to 1

function q22() {
    let i = 10;

    while (i >= 1) {
        console.log(i);
        i--;
    }
}


// Q23. Do-While Loop - 1 to 10

function q23() {
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 10);
}


// Q24. For-Of Loop - String Characters

function q24() {
    let text = "JavaScript";

    for (let character of text) {
        console.log(character);
    }
}


// Q25. For-Of Loop - Student Names

function q25() {
    let students = [
        "Priya",
        "Rahul",
        "Kumar",
        "Divya",
        "Arun"
    ];

    for (let student of students) {
        console.log(student);
    }
}


// Q26. For-In Loop - Object Keys and Values

function q26() {
    let student = {
        name: "Priya",
        role: "Frontend Developer",
        cgpa: 9
    };

    for (let key in student) {
        console.log(key + ":", student[key]);
    }
}


// ==========================================
// PART 5: MIXED PRACTICE
// ==========================================

// Q27. Arithmetic Operations using Prompt

function q27() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    console.log("Sum:", a + b);
    console.log("Difference:", a - b);
    console.log("Product:", a * b);

    if (b !== 0) {
        console.log("Remainder:", a % b);
    } else {
        console.log("Remainder: Cannot divide by zero");
    }
}


// Q28. Print Numbers Greater Than 10

function q28() {
    let numbers = [5, 12, 8, 25, 15];

    for (let number of numbers) {
        if (number > 10) {
            console.log(number);
        }
    }
}


// Q29. Age Eligibility using Alert

function q29() {
    let age = Number(prompt("Enter your age:"));

    if (age >= 18) {
        alert("You are eligible.");
    } else {
        alert("You are not eligible.");
    }
}


// Q30. Simple Calculator using Switch

function q30() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    let operation = prompt(
        "Choose operation: addition, subtraction, multiplication, division"
    );

    let result;

    switch (operation.toLowerCase()) {

        case "addition":
            result = a + b;
            break;

        case "subtraction":
            result = a - b;
            break;

        case "multiplication":
            result = a * b;
            break;

        case "division":
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Cannot divide by zero";
            }
            break;

        default:
            result = "Invalid Operation";
    }

    console.log("Result:", result);
    alert("Result: " + result);
}


// ==========================================
// MAIN MENU - SELECT ANY QUESTION
// ==========================================

function runExercise() {

    let question = Number(
        prompt("Enter question number (1-30):")
    );

    switch (question) {

        case 1: q1(); break;
        case 2: q2(); break;
        case 3: q3(); break;
        case 4: q4(); break;
        case 5: q5(); break;

        case 6: q6(); break;
        case 7: q7(); break;
        case 8: q8(); break;
        case 9: q9(); break;
        case 10: q10(); break;
        case 11: q11(); break;
        case 12: q12(); break;

        case 13: q13(); break;
        case 14: q14(); break;
        case 15: q15(); break;
        case 16: q16(); break;
        case 17: q17(); break;
        case 18: q18(); break;

        case 19: q19(); break;
        case 20: q20(); break;
        case 21: q21(); break;
        case 22: q22(); break;
        case 23: q23(); break;
        case 24: q24(); break;
        case 25: q25(); break;
        case 26: q26(); break;

        case 27: q27(); break;
        case 28: q28(); break;
        case 29: q29(); break;
        case 30: q30(); break;

        default:
            alert("Please enter a valid question number (1-30).");
    }
}
