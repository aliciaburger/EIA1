/* Aufgabe: (9)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (15.12.2016)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.  */

//warten bis dom content geladen ist
document.addEventListener('DOMContentLoaded', function ()
{
        var d2: string;
        d2 = "";
         var i: number;
        i=0;
        var count: number;
      
    
        
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


           count=vers.length
       document.getElementById("forSchleife").addEventListener("click", function () {
        i = 0;
        for (i = 0; i < count; i++) {
            d2 += "<p>" + vers[i] + "</p>";
            document.getElementById("d2").innerHTML = d2;
        }
        d2 += "<br>";
    });
                
           
             
    });
                            
