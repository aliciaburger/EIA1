/* Aufgabe: (12)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (19.02.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.  */
//warten bis dom content geladen ist
document.addEventListener("DOMContentLoaded", init);
//Globale Variablen
let klapp = true;
let aIDs = new Array("home", "portfoliokl", "aboutkl", "contactkl", "abkuerzelHome");
function init() {
    //Burger - Menue
    document.getElementById("klappmenue").style.display = "none";
    document.getElementById("burger").addEventListener("click", burgerMenue);
    for (var i = 0; i < aIDs.length; i++) {
        document.getElementById(aIDs[i]).addEventListener("click", closeBurger);
    }
    document.getElementById("abkuerzelKlB").style.display = "none";
    document.getElementById("abkuerzelKl").style.display = "block";
    document.getElementById("abkuerzelKl").addEventListener("mouseover", mouseOver);
    document.getElementById("abkuerzelKlB").addEventListener("mouseout", mouseOut);
    document.getElementById("fuerstenb").addEventListener("click", bild1);
    document.getElementById("cl1").addEventListener("click", bild1c);
    document.getElementById("hochschBall").addEventListener("click", bild2);
    document.getElementById("cl2").addEventListener("click", bild2c);
    document.getElementById("awarenesCam").addEventListener("click", bild3);
    document.getElementById("cl3").addEventListener("click", bild3c);
    document.getElementById("typogr").addEventListener("click", bild4);
    document.getElementById("cl4").addEventListener("click", bild4c);
    document.getElementById("shop").addEventListener("click", bild5);
    document.getElementById("cl5").addEventListener("click", bild5c);
    document.getElementById("compGrafik").addEventListener("click", bild6);
    document.getElementById("cl6").addEventListener("click", bild6c);
    document.getElementById("userEx").addEventListener("click", bild7);
    document.getElementById("cl7").addEventListener("click", bild7c);
}
/* BurgerMenu */
function burgerMenue() {
    if (klapp == false) {
        document.getElementById("klappmenue").style.display = "none";
        document.getElementById("navfeld").style.backgroundColor = "rgba(0, 0, 0, 0.25)";
        klapp = true;
    }
    else {
        document.getElementById("klappmenue").style.display = "block";
        document.getElementById("navfeld").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        //   document.getElementById("navfeld").style.backgroundColor="rgba(0, 0, 0, 0.7)";
        klapp = false;
    }
}
//klappmenü schließen, wenn einer der Links angecklickt werden
function closeBurger() {
    document.getElementById("klappmenue").style.display = "none";
    document.getElementById("navfeld").style.backgroundColor = "rgba(0, 0, 0, 0.17)";
}
//abkürzel blau bei hover (klappmenu)
function mouseOver() {
    document.getElementById("abkuerzelKlB").style.display = "block";
    document.getElementById("abkuerzelKl").style.display = "none";
}
function mouseOut() {
    document.getElementById("abkuerzelKlB").style.display = "none";
    document.getElementById("abkuerzelKl").style.display = "block";
}
//_____________________________________
//Projekte 1. Semester
//    Pop-Up-Fenster fuerstenbe      
var a = true;
function bild1() {
    document.getElementById("popUpFuerst").style.display = "none";
    if (a == false) {
        document.getElementById("popUpFuerst").style.display = "none";
        document.getElementById("fuerstbox").style.backgroundColor = "#363636";
        a = true;
    }
    else {
        document.getElementById("popUpFuerst").style.display = "block";
        document.getElementById("fuerstbox").style.backgroundColor = "#282828";
        a = false;
    }
}
//    popupFenster schließen
function bild1c() {
    document.getElementById("popUpFuerst").style.display = "none";
    document.getElementById("fuerstbox").style.backgroundColor = "#363636";
    a = true;
}
//    Pop-Up-Fenster Hochschulball             
var b = true;
function bild2() {
    document.getElementById("popUpBall").style.display = "none";
    if (b == false) {
        document.getElementById("popUpBall").style.display = "none";
        document.getElementById("ballbox").style.backgroundColor = "#363636";
        b = true;
    }
    else {
        document.getElementById("popUpBall").style.display = "block";
        document.getElementById("ballbox").style.backgroundColor = "#282828";
        b = false;
    }
}
//    popupFenster schließen   
function bild2c() {
    document.getElementById("popUpBall").style.display = "none";
    document.getElementById("ballbox").style.backgroundColor = "#363636";
    b = true;
}
//    Pop-Up-Fenster awareness Campange                 
var c = true;
function bild3() {
    document.getElementById("popUpAware").style.display = "none";
    if (c == false) {
        document.getElementById("popUpAware").style.display = "none";
        document.getElementById("awarebox").style.backgroundColor = "#363636";
        c = true;
    }
    else {
        document.getElementById("popUpAware").style.display = "block";
        document.getElementById("awarebox").style.backgroundColor = "#282828";
        c = false;
    }
}
//    popupFenster schließen  
function bild3c() {
    document.getElementById("popUpAware").style.display = "none";
    document.getElementById("awarebox").style.backgroundColor = "#363636";
    c = true;
}
//    Pop-Up-Fenster typografie            
var d = true;
function bild4() {
    document.getElementById("popUpTypo").style.display = "none";
    if (d == false) {
        document.getElementById("popUpTypo").style.display = "none";
        document.getElementById("typoBox").style.backgroundColor = "#363636";
        d = true;
    }
    else {
        document.getElementById("popUpTypo").style.display = "block";
        document.getElementById("typoBox").style.backgroundColor = "#282828";
        d = false;
    }
}
//    popupFenster schließen 
function bild4c() {
    document.getElementById("popUpTypo").style.display = "none";
    document.getElementById("typoBox").style.backgroundColor = "#363636";
    d = true;
}
//    Pop-Up-Fenster Shop                
var e = true;
function bild5() {
    document.getElementById("popUpShop").style.display = "none";
    if (e == false) {
        document.getElementById("popUpShop").style.display = "none";
        document.getElementById("shopbox").style.backgroundColor = "#363636";
        e = true;
    }
    else {
        document.getElementById("popUpShop").style.display = "block";
        document.getElementById("shopbox").style.backgroundColor = "#282828";
        e = false;
    }
}
//    popupFenster schließen  
function bild5c() {
    document.getElementById("popUpShop").style.display = "none";
    document.getElementById("shopbox").style.backgroundColor = "#363636";
    e = true;
}
//_____________________________________
// Projekte 2. Semester
//    Pop-Up-Fenster CG   
var f = true;
function bild6() {
    document.getElementById("popUpCG").style.display = "none";
    if (f == false) {
        document.getElementById("popUpCG").style.display = "none";
        document.getElementById("cgbox").style.backgroundColor = "#363636";
        f = true;
    }
    else {
        document.getElementById("popUpCG").style.display = "block";
        document.getElementById("cgbox").style.backgroundColor = "#282828";
        f = false;
    }
}
//    popupFenster schließen 
function bild6c() {
    document.getElementById("popUpCG").style.display = "none";
    document.getElementById("cgbox").style.backgroundColor = "#363636";
    f = true;
}
//    Pop-Up-Fenster UX   
var g = true;
function bild7() {
    document.getElementById("popUpUx").style.display = "none";
    if (g == false) {
        document.getElementById("popUpUx").style.display = "none";
        document.getElementById("uxbox").style.backgroundColor = "#363636";
        g = true;
    }
    else {
        document.getElementById("popUpUx").style.display = "block";
        document.getElementById("uxbox").style.backgroundColor = "#282828";
        g = false;
    }
}
//    popupFenster schließen 
function bild7c() {
    document.getElementById("popUpUx").style.display = "none";
    document.getElementById("uxbox").style.backgroundColor = "#363636";
    g = true;
}
//        document.getElementById("burger").addEventListener("mouseover", burgerBlau);
//        document.getElementById("burger").addEventListener("click", burgerBlau);
//        function burgerBlau(): void{
//            if (klapp== true){
//                document.getElementsByClassName("burgerIcon").classList.toggle("farbe");
//                }
////            document.getElementsByClassName("burgerIcon").style.backgroundColor =282828";
//        }
//# sourceMappingURL=website.js.map