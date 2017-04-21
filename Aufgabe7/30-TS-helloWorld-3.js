/* Warten bis der DOMContent geladen ist */
document.addEventListener('DOMContentLoaded', function () {
    /* Erst dann den EventListener und das Eventhandling "scharf schalten" */
    document.getElementById("helloWorldButton").addEventListener("click", function () {
        alert("Hello World.");
        console.log("Hello World.");
    });
});
//# sourceMappingURL=30-TS-helloWorld-3.js.map