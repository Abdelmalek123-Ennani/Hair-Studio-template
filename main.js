let imgMenu = document.getElementById('menu');
let navBar  = document.querySelector('.side-nav');

imgMenu.addEventListener('click' , afterClicck);


navBar.style.right = "-250px";
navBar.style.transition = "0.5s";

function afterClicck() {

    if ( navBar.style.right === "-250px" ) {

        navBar.style.right = "0px";
        imgMenu.src = "./images/close.png";

    }else {
        
        navBar.style.right =  "-250px";
        imgMenu.src = "./images/menu.png";
    }

}


//smooth scrolling

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});