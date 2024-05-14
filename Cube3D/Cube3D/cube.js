const animate = document.querySelector('.animate')
var isreversed = false;
var reverse = "";
const tl = gsap.timeline();
tl.fromTo('.container', {y:'-1300px'}, {y:'0', duration:2, ease:'bounce', yoyo:true})
tl.fromTo('.container', {rotationY: 0, transformOrigin: "center center"}, {duration: 2, rotationY: 360
    ,  transformOrigin: "center center", 
    ease:'bounce', delay:2, yoyo:false})
    tl.to('.side', {duration: 1,
    y: -100,
    stagger: 0.2,
    rotationY: 360, transformOrigin: "center center", z:-500, opacity:0,
    ease: "power2.out"})
    animate.addEventListener('click', ()=>{
        isreversed===true? (tl.reverse(), isreversed=false):(tl.play(), isreversed=true)})
    animate.style.setProperty('height', '60px');
    const val = animate.style.height;
    console.log(val)