function onstart() {
    alert('refresh page to see more anime/book');
    var listA1 = document.getElementById('listA1');
    var listA2 = document.getElementById('listA2');
    var listA3 = document.getElementById('listA3');
    var animeListStatments1 = ["info for index youtube video.", "info for accelerator youtube video.", "info for solo leveling youtube video."];
    var animeListLinks1 = ["https://youtu.be/_CSMOAzj-zE?si=RVTBixo9DoP03HCN", "https://youtu.be/P66gUfBKBvo?si=yPvIYohyYdC4EcR7", "https://youtu.be/bRmVFhB6i3A?si=ETQ5s8SPPiDR8RBu"];
    var randomQ1 = Math.floor(Math.random() * 3);
    console.log(randomQ1);
    var randomQ2 = Math.floor(Math.random() * 3);
    console.log(randomQ2);
    var randomQ3 = Math.floor(Math.random() * 3);
    console.log(randomQ3);

    listA1.innerHTML = animeListStatments1[randomQ1];
    listA1.setAttribute('href', animeListLinks1[randomQ1]);

    listA2.innerHTML = animeListStatments1[randomQ2];
    listA2.setAttribute( 'href', animeListLinks1[randomQ2]);

    listA3.innerHTML = animeListStatments1[randomQ3];
    listA3.setAttribute( 'href', animeListLinks1[randomQ3]);
    
}
onstart();

function clickme() {
    var randomImgClickMe = document.getElementById("random");
    var randomImgClickMe2 = document.getElementById("random2");
    var randomImgClickMe3 = document.getElementById("random3");
    var list = ["../introToHtml/images/accelerator1.jpg","../introToHtml/images/indexx.jpg", "../introToHtml/images/soloLevel2.webp", "../introToHtml/images/soloLevel1.jpg"];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomNumber2 = Math.floor(Math.random() * 4);
    var randomNumber3 = Math.floor(Math.random() * 4);
    randomImgClickMe.setAttribute('src', list[randomNumber]);
    randomImgClickMe.style.width = '20vw';
    randomImgClickMe.style.height = '20vh';
    randomImgClickMe2.setAttribute('src', list[randomNumber2]);
    randomImgClickMe2.style.width = '20vw';
    randomImgClickMe2.style.height = '20vh';
    randomImgClickMe3.setAttribute('src', list[randomNumber3]);
    randomImgClickMe3.style.width = '20vw';
    randomImgClickMe3.style.height = '20vh';
    var container = document.getElementById("container");
    container.style.height = "70vh";
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
function clickme3() {
    var randomImgClickMe = document.getElementById("random2");
    var list = ["../introToHtml/images/indexx.jpg", "../introToHtml/images/accelerator1.jpg"];
    var randomNumber = Math.floor(Math.random() * 2);
    randomImgClickMe.setAttribute("src", list[randomNumber]);
    randomImgClickMe.style.width = "20vw";
    randomImgClickMe.style.height = "20vh";
    var container = document.getElementById("container");
    container.style.height = "106vh";
}