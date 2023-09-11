const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
console.log(headerRect);
/* header */
const headerHeight = headerRect.height;
document.addEventListener('scroll' ,() => {
console.log(window.scrollY);
if(Window.scrollY > headerHeight + 10 ) {
  header.classList.add('header--dark');
}else {
  header.classList.remove('header--dark');
}
});

/* home */
const home = document.querySelector('home_container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
 home.style.opacity  = 1-window.scrollY / 130000;
 homeHeight.opacity = 1- Window.scrollY / 130000;
});


