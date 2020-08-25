let contenido = document.getElementById('contenido');
let contenidoTexto = document.getElementById('contenido-texto');
let contenidoTrabajos = document.getElementById('contenido-trabajos');

let estadoTrabajo;
let trabajos = [
    {
        'imagen': '/images/imagen-jamsdelsur.png',
        'titulo': 'Jamsdelsur',
        'contenido': `Este proyecto es una plataforma para músicos que permite crear diferentes tipos de eventos,
        <br>está siendo desarrollada en Laravel y cuenta con una API que nos permite mostrar con un<br>
         mapa de Leaflet los eventos más cercanos a la ubicación del usuario.`,
        'estado': 'En desarrollo',
        'modalidad': 'Freelance'
    },

    {
        'imagen': '/images/imagen-blog.png',
        'titulo': 'Blog personal',
        'contenido': `Blog personal hecho en PHP+MySQL para Backend, HTML5 Y CSS3 para Frontend, el proyecto entero
        se puede encontrar en mi repositorio de Github`,
        'estado': 'Terminado',
        'modalidad': 'Proyecto personal'
    },

    {
        'imagen': '/images/imagen-coronavirusar.png',
        'titulo': 'Coronavirusar',
        'contenido': `Coronavirusar es un proyecto que se me ocurrió a penas empezó la pandemia de COVID-19, es una pequeña webapp que consulta
        los datos a la api de Covid Visualizer y los muestra en pantalla con HTML5 Y CSS3.`,
        'estado': 'Terminado',
        'modalidad': 'Proyecto personal'
    },
]
function saber(){
    contenido.innerHTML = `
    <div class="sobre-mi">
        <h3>Una breve descripción...</h3>
        <h4>Soy una persona autodicacta que aprendió a programar compartiendo en diferentes comunidades <br>
        y con diferentes personas, en este tiempo tuve la oportunidad de aprender sobre las tecnologías más<br> usadas
        sobre todo en el lado del Backend, pero también me manejo bastante bien en Frontend. <br>
        <hr>
        
        Participo activamente de comunidades de programación y seguridad informática, esto me permite<br> seguir capacitándome
        pero también ayudar a personas que recién empiezan.
        </h4>
        <div class="sobre-mi-herramientas"</div>
        <div class="lenguajes">
        <p>💻 Lenguajes de programación: <br>
        <p> Backend y Frontend </p>
        <p>PHP</p>
        <p>Nodejs</p>
        <p>Javascript</p>
        <p>HTML5</p>
        <p>CSS3</P>
        </div>

        <div class="frameworks">
            <p>🛠️ Herramientas y frameworks: <br>
            <p>Laravel</p>
            <p>ExpressJS</p>
            <button class="btn-inicio" id="volver">Volver al inicio</button>
        </div>
        <div>
    <div>
    `;
}


function volver(){
    let contenidoTrabajos = document.getElementById('contenido-trabajos');
    contenidoTrabajos.style.display = 'none';
    contenido.innerHTML = ` <div class="contenido-texto" id="contenido-texto">
    <h1>¡Hola! 👋, soy Nahuel Segovia,
        <br>Developer y entusiasta de la tecnología.</h1>

    <button class="btn-sobre-mi" id="saber">Saber sobre mí</button>
    <button class="btn-mi-historia" id="ver-trabajos">Mis trabajos</button>
</div>
</main>`;
}


contenido.addEventListener('click', (e) => {
   if(e.target.id == 'saber'){
       saber();
   }


   else if(e.target.id == 'ver-trabajos'){
    let contenidoTexto = document.getElementById('contenido-texto');
       contenidoTexto.style.display =  'none';

    for(let trabajo of trabajos){
        contenido.innerHTML+=`
        <div class="trabajitos">
        <div class="contenido-trabajos" id="contenido-trabajos"> 
        <div class="trabajo">
        <div class="imagen-trabajo">
            <img src="${trabajo.imagen}" alt="${trabajo.titulo}">
        </div>
        <div class="contenido-trabajo">
        <h5 class="titulo-trabajo" id="titulo-trabajo">${trabajo.titulo}</h5>
        <p class="descripcion">${trabajo.contenido}</p>
         <p class="estado">Estado: ${trabajo.estado}</p>
         <p class="modalidad">Modalidad: ${trabajo.modalidad}</p>
         </div>
        </div>
        </div>
        </div>
        `;
       }
       contenido.innerHTML += '<button class="btn-volver-inicio" id="volver">Volver al inicio</button>';
   }

   else if(e.target.id == 'volver'){
    window.location.href = "/";
    }

})
