



let name;

console.log(name);

let test = null;

let a = 5 + 5; // 10
let b = 5 - 3; // 2
let c = 5 * 3; // 15
let d = 20 / 5; // 4

let e = 17 % 3;

console.log(e);


console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3);
console.log(5 <= 3); // false
console.log(5 === 3);
console.log(5 == 3);


console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false


let age = 18;

if (age < 18) {
    console.log("Tu esi nepilngadīgs!");

} else if (age === 18) {
    console.log("Tev ir 18!");
} else {
    console.log("Tu esi pilngadīgs!");
}

let email = "m@m.lv";
let password = "parolewe23";

if (email === "m@m.lv" && password === "parole") {
    console.log("Tu esi ielogojies!");
} else {
    console.log("Kļūda!");
}


let diena = "piektdiena";

switch (diena) {
    case "pirmdiena":
        console.log("Nedēļas sākums!");
        break;
    case "piektdiena":
        console.log("Gandriz nedēļas nogale");
        break;
    default:
        console.log("Parasta diena");
}


for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let i = 0;

i++
i++
i++
i++
i++

console.log(i);

while (i < 5) {
    console.log(i);
    i++;
}


let j = 2;

do {
    console.log(j);
    j++;
    
} while (j < 5);



let pilsetas = ["Riga", "Jelgava", "Ventspils"];

for (let pilseta of pilsetas) {
    console.log(pilseta);
}


let person = {
    vards: "Janis",
    uzvards: "Berzins",
    vecums: 25,
    dzimums: "v"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}



function test_sum(x, y) {
    console.log(x + y);
}

test_sum(5, 5)
test_sum(1, 2)
test_sum(4, 4)


let user_email = "oooo@m.lv";
let user_password = "parole";


function login() {
    console.log("Welcome " + user_email);
}

function error() {
    console.log("Error!");
}

if (user_email === "m@m.lv" && user_password === "parole") {
    login();
} else {
    error();
}

let user_choise = "+";
let user_x = 1000;
let user_y = 1000;


function sum(x, y) {
    console.log(x + y);
}

switch (user_choise) {  
    case "+":
        sum(user_x, user_y);
        break;
    default:
        console.log("Kļūda!");

}

