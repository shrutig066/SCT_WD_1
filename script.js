// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    } 

});

// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});

// Close mobile menu

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;
        const height=section.clientHeight;

        if(window.scrollY>=top &&
            window.scrollY<top+height){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ========================================
// SCROLL TO TOP
// ========================================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ========================================
// COUNTER ANIMATION
// ========================================

const counters =
document.querySelectorAll(".stats h2");

const counterObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=
counter.innerText.replace("+","").replace("%","");

const finalNumber=parseInt(target);

let start=0;

const speed=Math.ceil(finalNumber/70);

function update(){

start+=speed;

if(start>=finalNumber){

counter.innerText=counter.dataset.original;

}else{

if(counter.dataset.original.includes("%")){

counter.innerText=start+"%";

}else{

counter.innerText=start+"+";

}

requestAnimationFrame(update);

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counter.dataset.original=
counter.innerText;

counterObserver.observe(counter);

});

// ========================================
// FADE UP ANIMATION
// ========================================

const fadeElements=
document.querySelectorAll(

".about-box,.service-card,.feature-card,.testimonial-card"

);

const fadeObserver=
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

fadeElements.forEach(el=>{

el.classList.add("fade-up");

fadeObserver.observe(el);

});

// ========================================
// CONTACT FORM
// ========================================

const form=
document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been sent successfully."
);

form.reset();

});

// ========================================
// LAPTOP TILT EFFECT
// ========================================

const laptop=
document.querySelector(".laptop");

laptop.addEventListener("mousemove",(e)=>{

const rect=
laptop.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=
((x/rect.width)-0.5)*18;

const rotateX=
((y/rect.height)-0.5)*-18;

laptop.style.transform=
`rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

laptop.addEventListener("mouseleave",()=>{

laptop.style.transform=
"rotateX(0deg) rotateY(0deg)";

});

// ========================================
// HERO BUTTON RIPPLE EFFECT
// ========================================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// ========================================
// LOADER EFFECT
// ========================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition=".8s";

document.body.style.opacity="1";

},100);

});
