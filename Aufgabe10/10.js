/* Aufgabe: (10)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (07.01.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.  */
//warten bis dom content geladen ist
document.addEventListener('DOMContentLoaded', function () {
    var klapp = true;
    document.getElementById("klappmenue").style.display = "none";
    /* BurgerMenu */
    document.getElementById("burger").addEventListener("click", function () {
        if (klapp == false) {
            document.getElementById("klappmenue").style.display = "none";
            klapp = true;
        }
        else {
            document.getElementById("klappmenue").style.display = "block";
            klapp = false;
        }
    });
});
//# sourceMappingURL=10.js.map