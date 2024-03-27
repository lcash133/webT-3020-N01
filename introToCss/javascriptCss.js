function clickme() {
    var randomImgClickMe = document.getElementById("random");
    var list = ["../introToHtml/images/accelerator1.jpg","../introToHtml/images/indexx.jpg", "../introToHtml/images/soloLevel2.webp", "../introToHtml/images/soloLevel1.jpg"];
    var randomNumber = Math.floor(Math.random() * 4);
    randomImgClickMe.setAttribute("src", list[randomNumber]);
    randomImgClickMe.style.width = "20vw";
    randomImgClickMe.style.height = "20vh";
    var container = document.getElementById("container");
    container.style.height = "106vh";
}

function clickme2() {
    var randomImgClickMe = document.getElementById("random");
    var list = ["../introToHtml/images/soloLevel2.webp", "../introToHtml/images/soloLevel1.jpg"];
    var randomNumber = Math.floor(Math.random() * 2);
    randomImgClickMe.setAttribute("src", list[randomNumber]);
    randomImgClickMe.style.width = "20vw";
    randomImgClickMe.style.height = "20vh";
    var container = document.getElementById("container");
    container.style.height = "106vh";
}