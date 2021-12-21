let remerasDetail = document.getElementById('remerasDetail');
let catalogoContainer = document.getElementById('catalogoContainer');
let detailContainer = document.getElementById('detailContainer');
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let counter = document.getElementById('counter')
let itemTitle = document.getElementById('itemTitle')
let itemPrice = document.getElementById('itemPrice')
let itemDescription = document.getElementById('itemDescription')
let itemImage = document.getElementById('itemImage')

// detailContainer.style = "display:none"
let product = {}
const detail = (itemId) =>{
    let item = listaRemeras.find(el => el.id === itemId)
    product = item
    console.log(product)
    let render = `
        <div class="container d-flex my-5">
            <div class="w-100">
                <img src="${item.imgURL}" class="img-fluid">
            </div>
            <div class="container px-5">
                <h3 class="detail-title">${item.title}</h3>
                <p class="detail-price">$${item.price}</p>
                <p>${item.description}</p>
                <a href="#" class="link-detalles">Ver detalles del producto ></a>
                <form class="detail-form">
                    <label class="mt-2">Talle</label>
                    <select class="form-select mt-2" aria-label="Default select example">
                        <option selected>S</option>
                        <option value="1">M</option>
                        <option value="2">L</option>
                    </select>
                    <label class="mt-2">Color</label>
                    <select class="form-select mt-2" aria-label="Default select example">
                        <option selected>Blanco</option>
                        <option value="1">Negro</option>
                        <option value="2">Gris</option>
                    </select>
                    <div class="mt-3">
                        <p>Cantidad</p>
                        <div class="contador d-flex">
                            <button id="add" class="btn rounded-circle" onclick="addCount()" type='button'>+</button><p id="counter" class="px-3">${item.inCart}</p><button id="subtract" onclick="
                            subtractCount()" class="btn rounded-circle" type='button'>-</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="boton-aniadir btn me-5 p-3 w-100">Añadir al carrito</button>
                        <button class="boton-comprar btn p-3 w-100">Comprar ahora</button>
                    </div>
                </form>
            </div>
        </div>
    `
    itemTitle.innerHTML = `${item.title}`
    itemPrice.innerHTML = `$${item.price}`
    itemDescription.innerHTML = `${item.description}`
    itemImage.innerHTML =`<img src="${item.imgURL}" class="img-fluid">`
    counter.innerHTML = `${item.inCart}`
    // catalogoContainer.style = "display:none"
    // detailContainer.style = "display:block"
    // remerasDetail.innerHTML = render
}

// const addCount = () => {
//     product.inCart += 1
//     console.log(product)
//     detail(product)
// }

// const subtractCount = () => {
//     if(count > 0) {
//         product.inCart -= 1
//         detail(product)
//     } 
// }