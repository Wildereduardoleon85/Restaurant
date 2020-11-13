boton_derecho = document.querySelector('#derecha');
boton_izquierdo = document.querySelector('#izquierda');

const slides = [
    document.querySelector('#slide1'),
    document.querySelector('#slide2'),
    document.querySelector('#slide3'),
    document.querySelector('#slide4'),
    document.querySelector('#slide5'),
    document.querySelector('#slide6'),
    document.querySelector('#slide7'),
    document.querySelector('#slide8'),
];

const indicador1 = document.querySelector('#ind1'),
      indicador2 = document.querySelector('#ind2'),
      indicador3 = document.querySelector('#ind3'),
      indicador4 = document.querySelector('#ind4'),
      indicador5 = document.querySelector('#ind5'),
      indicador6 = document.querySelector('#ind6'),
      indicador7 = document.querySelector('#ind7'),
      indicador8 = document.querySelector('#ind8');

let contador = 0;

// Estados:

const estado0 = ()=>{

    indicador1.classList.add('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(0%)`;
    });
};

const estado1 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.add('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-100%)`;
    });
};

const estado2 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.add('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-200%)`;
    });
};

const estado3 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.add('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-300%)`;
    });
};

const estado4 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.add('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-400%)`;
    });
};

const estado5 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.add('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-500%)`;
    });
};

const estado6 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.add('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-600%)`;
    });
};

const estado7 = ()=>{

    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.add('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-700%)`;
    });
};

const estado8 = ()=>{

    contador=0
    indicador1.classList.add('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.remove('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(0%)`;
    });
};

const estado9 = ()=>{

    contador = 7
    console.log(contador);
    indicador1.classList.remove('indActivo');
    indicador2.classList.remove('indActivo');
    indicador3.classList.remove('indActivo');
    indicador4.classList.remove('indActivo');
    indicador5.classList.remove('indActivo');
    indicador6.classList.remove('indActivo');
    indicador7.classList.remove('indActivo');
    indicador8.classList.add('indActivo');
    slides.forEach(element => {
        element.style.transform = `translateX(-700%)`;
    })
}

const mostrar = ()=>{

    contador++;
    
    if(contador === 0){
        estado0();
    };

    if(contador === 1){
        estado1();
    };

    if(contador === 2){
        estado2();
    };

    if(contador === 3){
        estado3();
    };

    if(contador === 4){
        estado4();
    };

    if(contador === 5){
        estado5();
    };

    if(contador === 6){
        estado6();
    };

    if(contador === 7){
        estado7();
    };

    if(contador === 8){
        estado8();
    }
}

setInterval(mostrar, 8000);

boton_derecho.addEventListener('click', mostrar);

boton_izquierdo.addEventListener('click', ()=>{
    contador--;
    
    if(contador === 6){
        estado6();
    };

    if(contador === 5){
        estado5();
    };

    if(contador === 4){
        estado4();
    };

    if(contador === 3){
        estado3();
    };

    if(contador === 2){
        estado2();
    };

    if(contador === 1){
        estado1();
    };

    if(contador === 0){
        estado0();
    };

    if(contador === -1){
        estado9();
    };

});

indicador1.addEventListener('click', estado0);
indicador2.addEventListener('click', estado1);
indicador3.addEventListener('click', estado2);
indicador4.addEventListener('click', estado3);
indicador5.addEventListener('click', estado4);
indicador6.addEventListener('click', estado5);
indicador7.addEventListener('click', estado6);
indicador8.addEventListener('click', estado7);