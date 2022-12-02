const card = document.querySelector('.card');
const container = document.querySelector('.container');

const titles = document.querySelector('.title');
const cat = document.querySelector('.cat img');
const sizes= document.querySelector('.sizes');
const des = document.querySelector('.info h3');
const circle = document.querySelector('.circle');


container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2-e.pageX)/25;
    let yAxis = (window.innerHeight/2-e.pageY)/25;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener('mouseenter',(e)=>{
    card.style.transition = 'none';
    titles.style.transform = "translateZ(150px)";
    cat.style.transform = "translateZ(150px) rotateX(-20deg) rotateZ(40deg)";
    sizes.style.transform = "translateZ(80px)";
    des.style.transform = "translateZ(40px) translateX(130px)";
    circle.style.border = "100px solid rgba(51, 166, 184, 1)";
}) 

container.addEventListener('mouseleave',(e)=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    titles.style.transform = "translateZ(0px)";
    cat.style.transform = "translateZ(0px) rotateX(0deg) rotateZ(0deg)";
    sizes.style.transform = "translateZ(0px)";
    des.style.transform = "translateZ(0px) translateX(0px)";
    circle.style.border = "0px solid rgba(203, 64, 66, 1)";
})
