const slideContainer = document.querySelector('.slide-container');
const SlideShow = document.querySelector('.slide-show');

const Previous = document.querySelector('.prev');
const Next = document.querySelector('.next');

var Imgs = [
    {
        imgLink: 'https://images.unsplash.com/photo-1637434001140-f5328c2d885b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        title: 'Ảnh 1'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1637454701660-f39175c005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Ảnh 2'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Ảnh 3'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1635566274426-f655b7dbb56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        title: 'Ảnh 4'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1637266702454-27b9a810a6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        title: 'Ảnh 5'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1637178834637-93cf54bb47cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Ảnh 6'
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1636728835759-735a3cb7d8d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        title: 'Ảnh 7'
    },
]

var SlidesHtml = Imgs.map(function(content){
    return `
    <div class="slide-item">
        <div class="slide-img"><img src="${content.imgLink}" alt=""></div>
        <div class="slider-title">${content.title} </div>
    </div>
    `
})

slideContainer.innerHTML = SlidesHtml.join(' '); 

let currentDot = 0;

const widthSlide = SlideShow.clientWidth;
let x=0;
const widthSlideShow = slideContainer.childElementCount * widthSlide;

Previous.addEventListener('click',function(){
    if(x <= -widthSlide){
        x += widthSlide;
        slideContainer.style = `transform: translateX(${x}px);`
        Dots[currentDot].classList.remove('active');
        currentDot = x/(-widthSlide);
        Dots[currentDot].classList.add('active');
    }
    else if(x===0){
        
        x = (-widthSlideShow+1000);
       slideContainer.style = `transform: translateX(${x}px);`
       Dots[currentDot].classList.remove('active');
       currentDot = (-widthSlideShow+1000)/-widthSlide;
        Dots[currentDot].classList.add('active');
    }
})

Next.addEventListener('click',function(){
   if(x > -widthSlideShow+1000)
   {
       x -= widthSlide;
       slideContainer.style = `transform: translateX(${x}px);`
       Dots[currentDot].classList.remove('active');
        currentDot = x/(-widthSlide);
        Dots[currentDot].classList.add('active');
   }
   else if(x === (-widthSlideShow+1000)) {
       x = 0;
       slideContainer.style = `transform: translateX(${x}px);`
       Dots[currentDot].classList.remove('active');
       currentDot = 0;
        Dots[currentDot].classList.add('active');
   }
})

var dots = Imgs.map(function(dot){
    return '<li class="dot"></li>'
})

const listDots = document.querySelector('.list-dots').innerHTML = dots.join('');

const Dots = Array.from(document.querySelectorAll('.dot'));


// Dots.forEach(function(dot, i){
//     dot.addEventListener('click', function(){
//         Dots[currentDot].classList.remove('active');
//         dot.classList.add('active');
//         currentDot = i;
//     })
// });
Dots[0].classList.add('active')
for(let i = 0; i< Dots.length; i++) {
    Dots[i].addEventListener('click', function(e){
        Dots[currentDot].classList.remove('active');
        e.target.classList.add('active')
        currentDot = i;
        x = i*-1000;
        slideContainer.style = `transform: translateX(${x}px);`
    })
}

setInterval(function(){
    if(x > -widthSlideShow+1000)
    {
        x -= widthSlide;
        slideContainer.style = `transform: translateX(${x}px);`
        Dots[currentDot].classList.remove('active');
         currentDot = x/(-widthSlide);
         Dots[currentDot].classList.add('active');
    }
    else if(x === (-widthSlideShow+1000)) {
        x = 0;
        slideContainer.style = `transform: translateX(${x}px);`
        Dots[currentDot].classList.remove('active');
        currentDot = 0;
         Dots[currentDot].classList.add('active');
    }
 },3000)

