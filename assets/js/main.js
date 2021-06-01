// Lev1_1_js-vertiefung_BOM_setTimeout_setInterval

// Aufgabenstellung

// Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.
// Nutze
// setTimeout

// setTimeout(() => {
//     console.log("Guten Tag")
// }, 5000)


// Aufgabenstellung

// Schreibe eine Funktion die das Ergebnis der Vorschau anzeigt.
// Nutze
// setInterval
// new Date()

// setInterval(() => {
//     console.log(new Date())
// }, 5000)


// Aufgabenstellung

// Schreibe eine Funktion die das Ergebnis der Vorschau ausgibt.
// Nutze
// setInterval
// clearInterval
// if, else

// foo = 11

// setInterval(() => {
//     if (foo > 1) {
//         foo--
//         console.log(foo)
//     } else {
//         console.log("Feierabend")
//         clearInterval(foo)
//     }
// }, 1000);



// Lev1_2_js-vertiefung_BOM_setTimeout_setInterval

// Aufgabenstellung

// Schreibe eine Funktion, die beim Drücken des Buttons von 0% bis 100% hochzählt (siehe Ergebnisvorschau).
// HTML und CSS befindet sich im Kommentar.
// Nutze
// onclick
// setInterval
// clearInterval
// if, else if
// querySelector

let btn = document.getElementById("btn")

let time = 100

function clickMe() {
    setInterval(() => {
        if (time > 0) {
            time--
            document.querySelector(".zeit").innerHTML = time + "%"
        } else {
            clearInterval(time)
        }
    }, 100);
}


// Lev2_1_js-vertiefung_BOM_meldung

// Aufgabenstellung

// Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
// Schau Dir die Ergebnisvorschau an.

// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze 
// window.onload
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

let message = document.querySelector(".message")
let count = document.getElementById("count")

let number = 3

window.onload = setInterval(() => {
    if (number > 0) {
        number--
        count.innerHTML = number
    } else {
        clearInterval(number)
        message.style.opacity = "0"
    }

}, 1000);


// CodeFlow Übung lev2_2: Countdown

// Aufgabenstellung

// Schreibe eine Funktion, die einen Countdown in Minuten anzeigt und sich pausieren und neustarten lässt.
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze unter anderem
// setInterval()
// clearInterval()
// if

setInterval(() => {
    clearInterval()
}, 1000);