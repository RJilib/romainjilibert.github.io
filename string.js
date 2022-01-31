const infoBar = document.querySelectorAll('.info span');
const rightBar = document.querySelectorAll('.right span');
const profileTitle = document.querySelectorAll('.name span');
const svgLogo = document.querySelectorAll('.icone');
console.log(svgLogo);

window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(infoBar,1, {top: -50, opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(rightBar,1, {top: -50, opacity:0, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(profileTitle,1, {top: -50, opacity:0, ease: "power2.out"}, 0.2, '-=1')
    .staggerFrom(svgLogo,1, {left: -50, opacity:0, ease: "power2.out"}, 0.3, '-=1')

    TL.play();
})