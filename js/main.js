document.addEventListener("DOMContentLoaded", (event)  => { 
    const cartButton = document.querySelector('#cart-button');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close-button');
    
    
    cartButton.addEventListener("click", toggleModal);

    close.addEventListener("click", toggleModal);
        
    function toggleModal () {
        modal.classList.toggle("is-open");
    }
    
    new WOW().init();   
});


