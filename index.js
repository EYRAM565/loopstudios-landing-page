const toggle =  document.querySelector('.toggle');
const primNav = document.querySelector('.primary-navigation');


toggle.addEventListener('click', () =>{
    const visibility = primNav.getAttribute('data-visible');
    if(visibility === 'false'){
        toggle.setAttribute('aria-expanded', true);
        primNav.setAttribute('data-visible', true);
    }else{
        toggle.setAttribute('aria-expanded', false);
        primNav.setAttribute('data-visible', false);
    }
    console.log('testing!!!!');
})