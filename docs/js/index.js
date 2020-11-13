const scroll_inicio = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
};

const scroll_menu = ()=>{
    window.scrollTo({
        top: 750,
        behavior: 'smooth',
      });
};

const scroll_galeria = ()=>{
    window.scrollTo({
        top: 1600,
        behavior: 'smooth',
      });
};

const scroll_contacto = ()=>{
    window.scrollTo({
        top: 2200,
        behavior: 'smooth',
      });
};

document.querySelector('#menu-inicio').addEventListener('click', scroll_inicio);
document.querySelector('#menu-menu').addEventListener('click', scroll_menu);
document.querySelector('#menu-galeria').addEventListener('click', scroll_galeria);
document.querySelector('#menu-contacto').addEventListener('click', scroll_contacto);

document.querySelector('#menu-inicio-r').addEventListener('click', scroll_inicio);
document.querySelector('#menu-menu-r').addEventListener('click', scroll_menu);
document.querySelector('#menu-galeria-r').addEventListener('click', scroll_galeria);
document.querySelector('#menu-contacto-r').addEventListener('click', scroll_contacto);

document.querySelector('#menu-resp').addEventListener('click', ()=>{
    document.querySelector('#menu-resp2').classList.toggle('desplegar-menu');
})

