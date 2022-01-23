var quoteArray = ["Venez découvrir les plus beaux sites architecturaux de la Renaissance..."];
var textPosition = 0;
var speed = 50;

typewriter = () => {
    document.querySelector("#message").innerHTML = quoteArray[0].substring(0, textPosition);

    if (textPosition++ != quoteArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)