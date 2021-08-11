 const data = fetch('https://apipetshop.herokuapp.com/api/articulos') 
.then(repuesta=>repuesta.json())
.then(data=>miPrograma(data))
.catch(error=>console.log(error))


function miPrograma(data){
    
    let articulosFarmacia = data.response.filter((articulo)=> articulo.tipo == "Medicamento");
    let articulosJugueteria= data.response.filter((articulo)=> articulo.tipo== "Juguete");
    
    console.log(articulosJugueteria);

    const jugueteria = document.getElementById("articulos-jugueteria");
    const farmacia= document.getElementById("articulos-farmacia");
    
    // const articulosSeleccionadosF=articulosFarmacia.filter(articulo=>articulo.seleccionado);
    // const articulosSeleccionadosJ=articulosJugueteria.filter(articulo=>articulo.seleccionado);
    
    data.response.forEach((producto)=>{producto.seleccionado=false})
    
    function dibujarTabla(identificador,array){ 
        array.map((articulo)=>{
            if(articulo.stock>5){
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <h3>${articulo.nombre}</h3>
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p class="negrita">Precio: $${articulo.precio}</p>
                
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${articulo.precio}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${articulo.precio}" aria-expanded="false" aria-controls="collapse${articulo.precio}">
                            Descripcion
                    </button>
                    </h2>
                    <div id="collapse${articulo.precio}" class="accordion-collapse collapse" aria-labelledby="heading${articulo.precio}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p class="descripcion">${articulo.descripcion}<p></div>
                    </div>
                </div>
                
                
                
                <div>
                   <a href="carrito.html"></a><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"> 
                </div>
            </div>

                </div>`
            }
            else{
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <h3>${articulo.nombre}</h3>
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p class="negrita">Precio: $${articulo.precio}</p>
                
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${articulo.precio}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${articulo.precio}" aria-expanded="false" aria-controls="collapse${articulo.precio}">
                            Descripcion
                    </button>
                    </h2>
                    <div id="collapse${articulo.precio}" class="accordion-collapse collapse" aria-labelledby="heading${articulo.precio}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <p class="descripcion">${articulo.descripcion}<p></div>
                    </div>
                </div>
                </div>
                
                <div>
                <a href="carrito.html"></a><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"> 
                </div>
                </div>
                <p id="oferta"> ULTIMOS EN STOCK </P>
                </div>`
            }  
        })
    }

    if (farmacia){
        dibujarTabla(farmacia,articulosFarmacia);
    }
    
    if (jugueteria){
        dibujarTabla(jugueteria,articulosJugueteria);
    }
   
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            }, false)
        })
    })()
  
    



}//cierre de progama



















    //CARRITO
    // function TablaSeleccionados(array){
    //     if(array.length === 0){
    //         document.getElementById("seleccionado-para-comprar").innerText=
    //         "Aún No selccionaste ningun producto"
    //     }
    //     else{
    //         array.map(articulo=>{
    //         const contenedor= document.createElement('div')
    //         contenedor.className= "articuloSeleccionado"
    //         contenedor.innerHTML=`
    //         <h3>${articulo.nombre}</h3>
    //         <img src="${articulo.imagen}" alt="">
    //         <p>Precio: $${articulo.precio}</p>
    //         <button id="${articulo.id}">
    //                 <a href="carrito.html"></a>
    //             </button>`

    //         document.getElementById("seleccionado-para-comprar").appendChild(contenedor)
    //         document.getElementById(articulo.id).addEventListener("click",(e)=>{
    //             const idBoton = e.target.id
    //         })
    //     })
    // }

// TablaSeleccionados(articulosFarmacia)
// TablaSeleccionados(articulosJugueteria)

    



    
   





