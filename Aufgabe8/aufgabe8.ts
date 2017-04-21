/* Aufgabe: (8)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (08.12.2016)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */

//warten bis dom content geladen ist
document.addEventListener('DOMContentLoaded', function ()
{
        var d2: string;
        d2 = "";
         var a: number;
        a=0;
        
         var vers = ["ottos mops trotzt",
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
            vers[-1] = "";
        
                document.getElementById("d1").innerHTML = "Ottos Mops von Ernst Jandl";
                document.getElementById("naechste").addEventListener("click", function () 
                {
                        d2 = d2 + " " + vers[a - 1];
                        document.getElementById("d2").innerHTML = d2;
                        console.log(a);
                            
                        document.getElementById("d1").innerHTML = vers[a];   
                        a++;
                        a=a %15
                        console.log(a);
                           
                });
            document.getElementById("loeschen").addEventListener("click", function ()
             {
                 window.location.reload();
             });
});



   
    
    
    
    
    
    
    
    
    
    
    
    
    
