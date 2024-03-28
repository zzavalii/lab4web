let menubar = document.querySelector(".menubar");
let allmenu = document.querySelector(".allmenu");

menubar.onclick = function() {

    if (allmenu.style.display == 'none')
    allmenu.style.display = 'block';
    else
    allmenu.style.display = 'none'
};
