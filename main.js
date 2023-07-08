// butona tıklandığı anda nav alanına
// toggle ekler

const btn= document.querySelector('.nav-btn');
const nav= document.querySelector('nav');

btn.addEventListener('click', ()=> {
    nav.classList.toggle('toggle');
})


// videoların ekrana geldiği anda oynatma için

document.addEventListener('DOMContentLoaded',function(){
    const videos=document.querySelectorAll('video');
    const observer= new IntersectionObserver((entries)=> {
       entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.play();
        }else{
            entry.target.pause();
        }
       }) ;
    });
    videos.forEach((video)=>{
        observer.observe(video);
    });
});