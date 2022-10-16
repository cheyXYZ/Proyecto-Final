
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const botonFinalizar = document.getElementById('finalizar-compra')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const tituloPage = document.getElementById('titular')

//nav bar
const botonBurger = document.getElementById('burgers')
const botonPizza = document.getElementById('pizzas')
const botonCoctel = document.getElementById('cocteles')
const botonHome = document.getElementById('home')

let carrito = []

const mostrarProductos = async()=>{
     const respuesta = await fetch("./data.json")
     const stockProductos = await respuesta.json()


//console.log(stockProductos)

//filtrado productos por categoria
const burgerFiltro = stockProductos.filter((el) => el.categoria.includes('Burger'))
const pizzaFiltro = stockProductos.filter((el) => el.categoria.includes('Pizza'))
const coctelFiltro = stockProductos.filter((el) => el.categoria.includes('Cocteles'))

//Se muestran todos los productos
stockProductos.forEach(producto => {
    tituloPage.innerHTML = "Los favoritos del Chef"
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML =    `
    <div class="card">
    <img src=${producto.img} alt=${producto.nombre} style="width:100%">
    <h1>${producto.nombre}</h1>
    <p class="price">$${producto.precio}</p>
    
    <p> <button id="agregar ${producto.id}" class="boton-agregar">Agregar al Carrito<i class="fas fa-shopping-cart"></i></button></p>
    </div>
    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`agregar ${producto.id}`)
    
    boton.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)

    
    })
});

//funcion para mostrar productos filtrados
    botonBurger.addEventListener('click', ()=>{
        tituloPage.innerHTML = "We love Burgers!"
        contenedorProductos.innerHTML = " "
        burgerFiltro.forEach(producto => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML =    `
            <div class="card">
            <img src=${producto.img} alt=${producto.nombre} style="width:100%">
            <h1>${producto.nombre}</h1>
            <p class="price">$${producto.precio}</p>
            
            <p> <button id="agregar ${producto.id}" class="boton-agregar">Agregar al Carrito<i class="fas fa-shopping-cart"></i></button></p>
            </div>
            `
            contenedorProductos.appendChild(div)
            
            const boton = document.getElementById(`agregar ${producto.id}`)
            
            boton.addEventListener('click', ()=>{
                agregarAlCarrito(producto.id)
            })
        });
    })
    botonPizza.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = " "
        tituloPage.innerHTML = "Solo lo mejor en Pizzas!"
        pizzaFiltro.forEach(producto => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML =    `
            <div class="card">
            <img src=${producto.img} alt=${producto.nombre} style="width:100%">
            <h1>${producto.nombre}</h1>
            <p class="price">$${producto.precio}</p>
            
            <p> <button id="agregar ${producto.id}" class="boton-agregar">Agregar al Carrito<i class="fas fa-shopping-cart"></i></button></p>
            </div>
            `
            contenedorProductos.appendChild(div)
            
            const boton = document.getElementById(`agregar ${producto.id}`)
            
            boton.addEventListener('click', ()=>{
                agregarAlCarrito(producto.id)
            })
        });
    })
     botonCoctel.addEventListener('click', ()=>{
        contenedorProductos.innerHTML = " "
        tituloPage.innerHTML = "¿Algo para refrescarse?"
        coctelFiltro.forEach(producto => {
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML =    `
            <div class="card">
            <img src=${producto.img} alt=${producto.nombre} style="width:100%">
            <h1>${producto.nombre}</h1>
            <p class="price">$${producto.precio}</p>
            
            <p> <button id="agregar ${producto.id}" class="boton-agregar">Agregar al Carrito<i class="fas fa-shopping-cart"></i></button></p>
            </div>
            `
            contenedorProductos.appendChild(div)
            
            const boton = document.getElementById(`agregar ${producto.id}`)
            
            boton.addEventListener('click', ()=>{
                agregarAlCarrito(producto.id)
            })
        });
    })
    botonHome.addEventListener('click', ()=>{
    contenedorProductos.innerHTML = " "
    tituloPage.innerHTML = "Los favoritos del Chef"
     stockProductos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML =    `
        <div class="card">
        <img src=${producto.img} alt=${producto.nombre} style="width:100%">
        <h1>${producto.nombre}</h1>
        <p class="price">$${producto.precio}</p>
        
        <p> <button id="agregar ${producto.id}" class="boton-agregar">Agregar al Carrito<i class="fas fa-shopping-cart"></i></button></p>
        </div>
        `
        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById(`agregar ${producto.id}`)
        
        boton.addEventListener('click', ()=>{
            agregarAlCarrito(producto.id)

        
        })
    });
    })

    const agregarAlCarrito = (prodId) =>{
        const existe = carrito.some (prod => prod.id === prodId)
        if (existe){
            const prod = carrito.map(prod =>{
                if(prod.id === prodId){
                    prod.cantidad++
                }
            })
            
        }else{
            const item = stockProductos.find ((prod) => prod.id ===prodId)
            carrito.push(item)
            
            console.log(carrito)
        }
        actualizarCarrito()
        
    }
    
}
    const eliminarDelCarrito = (prodId) =>{
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)        
        actualizarCarrito()
    }
    
    const actualizarCarrito = () =>{
        contenedorCarrito.innerHTML = ""
        
        carrito.forEach((prod) => {
            const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
            <p>${prod.nombre}</p>
            <p>precio: ${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class= "fas fa-trash-alt"></i></button>
            `
            contenedorCarrito.appendChild(div)
            
        })
        
        
        const carritoStr= JSON.stringify(carrito)
        localStorage.setItem("Carrito:", carritoStr)
    
        
        
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

    botonFinalizar.addEventListener('click',()=>{
        carrito.length===0? swal("Tu carrito está vacío!", "Selecciona algún producto 😉"): swal(`Tu pedido ya fue agendado!`, "Recibirás tu comida en 20 minutos!", "success");
        contenedorModal.classList.toggle('modal-active')
        carrito.length = 0
        actualizarCarrito()
    })
        
        botonVaciar.addEventListener('click', ()=>{
            carrito.length = 0
            actualizarCarrito()
        })
        
mostrarProductos()