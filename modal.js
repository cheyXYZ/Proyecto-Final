const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() })


const botonRegistro = document.getElementById('sub')
console.log(botonRegistro)


//Registro clientes e-mail
correoClientes = []

botonRegistro.addEventListener('click', ()=>{
    swal("¡Unete al Club! 💌","¡Ingresa tu correo y recibe nuevas promociones!", {
        content: "input",
        buttons: ["Cancelar", "Enviar"]
      })

      .then((email) => {
        if (email) {
            correoClientes.push(email) ,   
          swal("¡Bienvenid@!",'Revisa tu correo para continuar con el registro.', {
            icon: "success",
        });
    } else {
          swal('Registro Cancelado',"Quizás en otro momento 🙄");
            }
            
     ;

    const registroCorreos = JSON.stringify(correoClientes)
    sessionStorage.setItem("Registro de Correos", registroCorreos)

     });
    
})