const header = () => {
    const header = document.querySelector('.header');


    window.addEventListener('scroll',()=>{
        header.classList.toggle('scrolled',window.scrollY >0);
    });

};
 
export default header;