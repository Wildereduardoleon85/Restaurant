import { menu } from "../data/data_menu.js";

let salida = '';
let salida2 = '';

const menu_len = menu.length;

menu.forEach((item, index)=>{

    salida+=`
            <div class="slide" id="slide${item.slide}">
                <div>
                    <h1 class="titulo">${item.nombre}<span class="numeral">${item.slide}/${menu_len}</span></h1>
                </div>

                
                <div class="cont-img">
                    <div class="thumbnail-2">
                        <div class="thumbnail">
                            <img src="img/${item.contenido_menu[0].imagen}" alt="">
                        </div>
                        <p class="nombre">${item.contenido_menu[0].nombre}</p>
                        <p>${item.contenido_menu[0].precio}</p>
                    </div>
                    <div class="thumbnail-2">
                        <div class="thumbnail">
                            <img src="img/${item.contenido_menu[1].imagen}" alt="">
                        </div>
                        <p class="nombre">${item.contenido_menu[1].nombre}</p>
                        <p>${item.contenido_menu[1].precio}</p>
                    </div>
                    <div class="thumbnail-2">
                        <div class="thumbnail">
                            <img src="img/${item.contenido_menu[2].imagen}" alt="">
                        </div>
                        <p class="nombre">${item.contenido_menu[2].nombre}</p>
                        <p>${item.contenido_menu[2].precio}</p>
                    </div>
                    <div class="thumbnail-2">
                        <div class="thumbnail">
                            <img src="img/${item.contenido_menu[3].imagen}" alt="">
                        </div>
                        <p class="nombre">${item.contenido_menu[3].nombre}</p>
                        <p>${item.contenido_menu[3].precio}</p>
                    </div>        
                </div>
                
            </div>
    `;

});

document.getElementById('salida').innerHTML = salida;

salida2+=`
            <div>
                <div>
                    <h1 class="titulo">Menu</h1>
                </div>
                <div class="menu-izq-2">
                    <div id="menuEsp" class="menu-item activo"><h2>${menu[0].nombre}</h2></div>
                    <div id="menuHam" class="menu-item"><h2>${menu[1].nombre}</h2></div>
                    <div id="menuCerv" class="menu-item"><h2>${menu[2].nombre}</h2></div>
                    <div id="menuBeb" class="menu-item"><h2>${menu[3].nombre}</h2></div>
                </div>
            </div>

    `;

document.getElementById('salida2').innerHTML = salida2;

const slides = [
    document.getElementById('slide1'),
    document.getElementById('slide2'),
    document.getElementById('slide3'),
    document.getElementById('slide4')
];

    document.querySelector('#menuEsp').addEventListener('click', ()=>{
        document.querySelector('#menuEsp').classList.add("activo");
        document.querySelector('#menuHam').classList.remove("activo");
        document.querySelector('#menuCerv').classList.remove("activo");
        document.querySelector('#menuBeb').classList.remove("activo");
        slides.forEach(element => {
            element.style.transform = 'translateX(0%)';
        })
    });

    document.querySelector('#menuHam').addEventListener('click', ()=>{
        document.querySelector('#menuEsp').classList.remove("activo");
        document.querySelector('#menuHam').classList.add("activo");
        document.querySelector('#menuCerv').classList.remove("activo");
        document.querySelector('#menuBeb').classList.remove("activo");
        slides.forEach(element => {
            element.style.transform = 'translateX(-100%)';
        })
    });

    document.querySelector('#menuCerv').addEventListener('click', ()=>{
        document.querySelector('#menuEsp').classList.remove("activo");
        document.querySelector('#menuHam').classList.remove("activo");
        document.querySelector('#menuCerv').classList.add("activo");
        document.querySelector('#menuBeb').classList.remove("activo");
        slides.forEach(element => {
            element.style.transform = 'translateX(-200%)';
        })
    });

    document.querySelector('#menuBeb').addEventListener('click', ()=>{
        document.querySelector('#menuEsp').classList.remove("activo");
        document.querySelector('#menuHam').classList.remove("activo");
        document.querySelector('#menuCerv').classList.remove("activo");
        document.querySelector('#menuBeb').classList.add("activo");
        slides.forEach(element => {
            element.style.transform = 'translateX(-300%)';
        })
    });