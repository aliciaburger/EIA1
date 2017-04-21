/* Aufgabe: (12)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (19.02.2017)
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.  */

//warten bis dom content geladen ist
document.addEventListener('DOMContentLoaded', function ()
{ 

  
   var klapp=true;
  
   document.getElementById("klappmenue").style.display = "none";
    
     /* BurgerMenu */
    document.getElementById("burger").addEventListener("click", function () {
        
        if (klapp==false) {
            document.getElementById("klappmenue").style.display = "none";
            document.getElementById("navfeld").style.backgroundColor ="rgba(0, 0, 0, 0.25)";
            klapp = true;
        }
        else {
            document.getElementById("klappmenue").style.display = "block";
            document.getElementById("navfeld").style.backgroundColor ="rgba(0, 0, 0, 0.9)";
         //   document.getElementById("navfeld").style.backgroundColor="rgba(0, 0, 0, 0.7)";
            klapp = false;
            
        }
        
    });

    
//klappmenü schließen, wenn einer der Links angecklickt werden


 
    var aIDs = new Array("home", "portfoliokl", "aboutkl","contactkl","abkuerzelHome");
    for (var i = 0; i < aIDs.length; i++) {
        document.getElementById(aIDs[i]).addEventListener("click", function () {
            document.getElementById("klappmenue").style.display = "none";
            document.getElementById("navfeld").style.backgroundColor ="rgba(0, 0, 0, 0.17)";
            });
        }
        
//abkürzel blau bei hover (klappmenue)
 
    document.getElementById("abkuerzelKlB").style.display = "none";
    document.getElementById("abkuerzelKl").style.display = "block";
 
     document.getElementById('abkuerzelKl').addEventListener('mouseover', mouseOver);
    
    function mouseOver() {
    document.getElementById("abkuerzelKlB").style.display = "block";
   document.getElementById("abkuerzelKl").style.display = "none";
  }
 
    document.getElementById('abkuerzelKlB').addEventListener('mouseout', mouseOut); 
    
    function mouseOut() {
   document.getElementById("abkuerzelKlB").style.display = "none";
   document.getElementById("abkuerzelKl").style.display = "block";
  }   
 

//    Pop-Up-Fenster fuerstenberg
    
    
       var a=true;
       
    
   document.getElementById("popUpFuerst").style.display = "none";
   
   document.getElementById("fuerstenb").addEventListener("click", function () {
        
        if (a==false) {                                  
             document.getElementById("popUpFuerst").style.display = "none";
             document.getElementById("fuerstbox").style.backgroundColor ="#363636";
             a = true;
        }
        else { 
             document.getElementById("popUpFuerst").style.display = "block";
             document.getElementById("fuerstbox").style.backgroundColor ="#282828";
             a = false                      
             }
    });  
  //    popupFenster schließen
document.getElementById("cl1").addEventListener("click", function () {
            document.getElementById("popUpFuerst").style.display = "none";
            document.getElementById("fuerstbox").style.backgroundColor ="#363636";
                a = true;
                                  
            });
    
    
     
   //    Pop-Up-Fenster Hochschulball             
  var b=true;
  
   document.getElementById("popUpBall").style.display = "none";
   
   document.getElementById("hochschBall").addEventListener("click", function () {
        
        if (b==false) {
            document.getElementById("popUpBall").style.display = "none";
            document.getElementById("ballbox").style.backgroundColor ="#363636";
            b = true;
        }
        else {
            document.getElementById("popUpBall").style.display = "block";
            document.getElementById("ballbox").style.backgroundColor ="#282828";
            b = false;
            
        }        
    });  
 //    popupFenster schließen   
  document.getElementById("cl2").addEventListener("click", function () {
            document.getElementById("popUpBall").style.display = "none";
            document.getElementById("ballbox").style.backgroundColor ="#363636";
                b = true;  
    });  
    
 //    Pop-Up-Fenster awareness Campange                 
  var c=true;
  
   document.getElementById("popUpAware").style.display = "none";
   
   document.getElementById("awarenesCam").addEventListener("click", function () {
        
        if (c==false) {
            document.getElementById("popUpAware").style.display = "none";
            document.getElementById("awarebox").style.backgroundColor ="#363636";
            c = true;
        }
        else {
            document.getElementById("popUpAware").style.display = "block";
            document.getElementById("awarebox").style.backgroundColor ="#282828";
            c = false;
            
        }        
    });  
  //    popupFenster schließen  
     document.getElementById("cl3").addEventListener("click", function () {
            document.getElementById("popUpAware").style.display = "none";
            document.getElementById("awarebox").style.backgroundColor ="#363636";
                c = true;  
    });  
     //    Pop-Up-Fenster typografie            
  var d=true;
  
   document.getElementById("popUpTypo").style.display = "none";
   
   document.getElementById("typogr").addEventListener("click", function () {
        
        if (d==false) {
            document.getElementById("popUpTypo").style.display = "none";
            document.getElementById("typoBox").style.backgroundColor ="#363636";
            d = true;
        }
        else {
            document.getElementById("popUpTypo").style.display = "block";
            document.getElementById("typoBox").style.backgroundColor ="#282828";
            d = false;
            
        }        
    });      
   //    popupFenster schließen 
     document.getElementById("cl4").addEventListener("click", function () {
            document.getElementById("popUpTypo").style.display = "none";
            document.getElementById("typoBox").style.backgroundColor ="#363636";
                d = true;  
    });  


      

         
         
         
         
         
         
 
});    