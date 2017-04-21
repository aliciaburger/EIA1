/* Aufgabe: (9)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (15.12.2016)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
//warten bis dom content geladen ist
document.addEventListener('DOMContentLoaded', function () {
    var d2;
    d2 = "";
    var i;
    i = 0;
    var z;
    z = 0;
    var count;
    var vers = ["Ottos Mops(Ernst Jandel)",
        "ottos mops trotzt",
        "otto: fort mops fort",
        "ottos mops hopst fort",
        "otto: soso",
        "otto holt koks",
        "otto holt obst",
        "otto horcht",
        "otto: mops mops",
        "otto hofft",
        "ottos mops klopft",
        "otto: komm mops komm",
        "ottos mops kommt",
        "ottos mops kotzt",
        "otto: ogottogott"];
    count = vers.length;
    document.getElementById("forSchleife").addEventListener("click", function () {
        i = 0;
        var l = document.getElementsByTagName("p");
        for (i = 0; i < count; i++) {
            d2 += "<p>" + vers[i] + "</p>";
            document.getElementById("d2").innerHTML = d2;
            for (z = 1; z < l.length; z += 2) {
                l[z].style.color = "#525252";
                l[z].style.fontSize = "200%";
            }
        }
        d2 += "<br>";
    });
});
//# sourceMappingURL=aufgabe9.4.js.map