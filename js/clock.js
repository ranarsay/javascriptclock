
let myName = document.querySelector("#myName");
name = prompt("Lutfen adinizi giriniz:");
//console.log(name)
myName.innerHTML = `${name}`

let clock = document.querySelector("#myClock");
let day = new Date();


let d = day.getDay();
switch(d) {
    case 1:
    d = "Pazartesi"
    break;
    case 2:
    d = "Salı"
    break;
    case 3:
    d = "Çarşamba"
    break;
    case 4:
    d = "Perşembe"
    break;
    case 5:
    d = "Cuma"
    break;
    case 6:
    d = "Cumartesi"
    break;
    case 7:
    d = "Pazar"
    break;

}

myClock.innerHTML = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds() + " " + d;
