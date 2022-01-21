window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "1rem";
        document.getElementById("logo").style.height = "60px";

    } else {
        document.getElementById("header").style.fontSize = "1.5rem";
        document.getElementById("logo").style.height = "70px";
    }
}