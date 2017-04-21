/* Warten bis der DOMContent geladen ist */
document.addEventListener('DOMContentLoaded', function () {
    var h1 = document.getElementById("baum");
    console.log(h1);
    h1.style.backgroundColor = "#FFB373";
    h1.style.fontFamily = "French Script MT";
    h1.style.fontSize = "5em";
    var size = h1.style.fontSize;
    var gr = document.getElementById("gruen");
    console.log(gr);
    gr.style.color = "#00AD03";
    gr.style.fontSize = "20px";
    var color = gr.style.color;
});
//# sourceMappingURL=7.js.map