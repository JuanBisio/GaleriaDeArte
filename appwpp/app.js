
// Funcion Para agregar al carro de compras
const agregarAlCarroDeCompras = document.querySelectorAll(".agregar__carrito");
agregarAlCarroDeCompras.forEach((agregarAlCarroBoton) => {
    agregarAlCarroBoton.addEventListener("click", agregarAlCarroClick);
    console.log()
});
// funcion para pedir los items
function agregarAlCarroClick(event){
    const boton = event.target;
    const item = boton.closest(".contenedor__producto");
    const itemTitulo = item.querySelector(".producto__titulo").textContent;
    const itemPrecio = item.querySelector(".producto__precio").textContent;
    const itemImagen = item.querySelector(".producto__img-src").src;
    ComprarI()

// funcion para agreagr los intems al carro
    agregarItemsAlCarro(itemImagen,itemPrecio,itemTitulo);
}

// Div Contenedor de los carritos agregados
const CarritoItems = document.querySelector( ".carrito__contenedor-items");

// funcion para agreagr los intems al carro
function agregarItemsAlCarro(itemImagen,itemPrecio,itemTitulo){
// Aumentar La cantidad de c/producto
const elementosTitulo = CarritoItems.getElementsByClassName(
    "itemsTitulos"
  );
//   Aumentar el valor
  for (let i = 0; i < elementosTitulo.length; i++) {
    if (elementosTitulo[i].innerHTML === itemTitulo) {
      let cantidadDeElementos = elementosTitulo[
        i
      ].parentElement.parentElement.parentElement.parentElement.querySelector(
        ".cantidadDeElementos"
      );
      cantidadDeElementos.value++;
      ActualizarTotalDePlata();
      return;
    }
  }
// Crear Div Para almacenar Datos en el Carro
const DivCarro = document.createElement("div");
// Crear el html para los datos
const ContenidoDiv =`
<div class="itemsCarroTotal">
      <div class="carrito__general">
          <div class="carrito__propiedades">
              <img src=${itemImagen} class="carrito__img">
              <h6 class="itemsTitulos">${itemTitulo}</h6>
          </div>
      </div>
      <div class="">
          <div class="">
              <p class="precioCarrito">${itemPrecio}</p>
          </div>
      </div>
      <div class="">
          <div class="">
              <input class="cantidadDeElementos" type="number" value="1" readonly>
          </div>
      </div>
  </div>
  `;
// Incluir en el div el html
DivCarro.innerHTML = ContenidoDiv;
CarritoItems.append(DivCarro);

    ActualizarTotalDePlata()
}


// Funcion Actualizar el Total

function ActualizarTotalDePlata(){
    // Declaramos el total
    let total = 0;
// Almacenamos la ubicaicon del precio 
  const totalPrecio = document.querySelector(".total__precio");
// almacenamos el div conetnedor creado 
  const itemsCarroTotales = document.querySelectorAll(".itemsCarroTotal");
// recorremos el div
  itemsCarroTotales.forEach((cadaItem) => {
    const precioCarrito = cadaItem.querySelector(
      ".precioCarrito"
    );
// Almacenamos el precio con sus respectivos signos
    const itemPrecio = Number(
        precioCarrito.textContent.replace("$", "")
    );
// almacenamos la cantidad de productos repetidos que hay 
    const cantidadDeElementos = cadaItem.querySelector(
      ".cantidadDeElementos"
    );
// convertimos esta cantidad en un numero
    const itemCantidadDeElementos = Number(
        cantidadDeElementos.value
    );
// Sumamos todo los valores y lo almacenamos en total
    total = total + itemPrecio * itemCantidadDeElementos;
  });
  totalPrecio.innerHTML = `${total.toFixed(2)}$`;
}

const linkAlmacenado = [];
let formularioElemento = [];
let comprar = document.querySelector('.comprar')
const eliminar = document.querySelector('.eliminar')
const itemLink = document.querySelectorAll('.item__link')
const contador = document.querySelectorAll('.contador')
const BotonCarrito = document.querySelectorAll(".agregar__carrito");
const formularioElementos = document.querySelectorAll('.formulario__text')


contador.forEach((cadaA, i)=>{
    contador[i].addEventListener('click',()=>{
         linkAlmacenado.push(itemLink[i].innerHTML) 
        })
    })

    const formularioInput = document.querySelectorAll('.formulario__input')
    const formularioBoton = document.querySelector('.formulario__boton')
    
formularioInput.forEach((cadaU,i)=>{
      formularioBoton.addEventListener('click',()=>{
        formularioElemento.push(formularioInput[i].value)
        ComprarI()
      })
    })
formularioBoton.addEventListener('click',()=>{
      alert('Datos Enviados Correctamente')
})
function ComprarI(){
  let botonComprar = `<a id="botonComprar" href="https://api.whatsapp.com/send?phone=+543584384749&text= Resumen Del Pedido: [${linkAlmacenado}]  Datos:${formularioElemento}">Buy</a> `;
  comprar.innerHTML = botonComprar
}


// Remove
eliminar.addEventListener("click", eliminarBotonn);
function eliminarBotonn(){
  location.reload();
}