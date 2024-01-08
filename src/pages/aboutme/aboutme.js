particlesJS.load("particles-container", "/particlesjs-config.json");



AOS.init({
       disable: false,
       offset: 80,
       duration: 1000, 
       easing: 'ease-in-out',
       once: false, 
       mirror: false, 
       anchorPlacement: 'top-bottom',
     
})
     
document.addEventListener("scroll", () => {
       if (window.scrollY > 20) {
              document.querySelector('.scroll').classList.add('fadeOut')
       } else {
              document.querySelector('.scroll').classList.toggle('fadeOut')
       }
})


