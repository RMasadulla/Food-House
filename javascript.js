const mobile = document.getElementsByClassName('siteBar')[0];
const Header = document.getElementById('header');
const navBar = document.getElementsByClassName('navbar')[0];
const nabList = document.querySelector('.navlist');

mobile.addEventListener('click', function(){
    if(mobile.children[0].classList.contains('fa-bars')){
    mobile.children[0].classList.replace('fa-bars', 'fa-times')
    navBar.classList.add('active')
     navBar.children[5].children[0].classList.remove('fa-search')
        
    }else{mobile.children[0].classList.replace('fa-times', 'fa-bars') && navBar.classList.remove('active')}
})

nabList.addEventListener('click',function(){
    mobile.children[0].classList.replace('fa-times', 'fa-bars') && navBar.classList.remove('active')
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY>= 90){
       Header.classList.add("stickyBar");
       document.body.style.scrollBehavior = "smooth"
    }else(Header.classList.remove("stickyBar"))
})


let navArray = Array.from(navBar.children)
navArray.forEach(function(a){
    a.addEventListener('click',function(){
        mobile.children[0].classList.replace('fa-times', 'fa-bars') && navBar.classList.remove('active')
    });
});
