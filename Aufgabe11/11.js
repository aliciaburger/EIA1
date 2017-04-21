/* Aufgabe: (11)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (14.01.2017)
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
    //preis button
    document.getElementById("preisbutton").addEventListener("click", function () {
        var Artikel = document.getElementsByTagName("div");
        for (var i = 0; i < Artikel.length; i++) {
            var preis = Artikel[i].getElementsByClassName("preis");
            if (preis.length != 0) {
                var PreisAlsNummer = Number(preis[0].innerHTML);
                if (PreisAlsNummer < 1 || PreisAlsNummer > 50) {
                    Artikel[i].style.display = "none";
                }
            }
        }
    });
    //     Zubeör Button
    document.getElementById("zubehorbutton").addEventListener("click", function () {
        var Artikel = document.getElementsByTagName("div");
        for (var i = 0; i < Artikel.length; i++) {
            var bekleidung = Artikel[i].getElementsByClassName("bekleidung");
            if (bekleidung.length != 0) {
                Artikel[i].style.display = "none";
            }
        }
    });
    //    Zurücksetzen Button
    document.getElementById("zurucksetzen").addEventListener("click", function () {
        var Artikel = document.getElementsByTagName("div");
        for (var i = 0; i < Artikel.length; i++) {
            var Preis = Artikel[i].getElementsByClassName("preis");
            if (Preis.length != 0) {
                var PreisAlsNummer = Number(Preis[0].innerHTML);
                if (PreisAlsNummer < 1 || PreisAlsNummer > 50) {
                    Artikel[i].style.display = "block";
                }
            }
        }
    });
});
//# sourceMappingURL=11.js.map