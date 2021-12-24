let remerasDetail = document.getElementById('remerasDetail');
let catalogoContainer = document.getElementById('catalogoContainer');
let detailContainer = document.getElementById('detailContainer');
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let counter = document.getElementById('counter')

detailContainer.style = "display:none"
let product = {}
const detail = (itemId) =>{
    let item = listaRemeras.find(el => el.id === itemId)
    product = item
    console.log(typeof(product.total))
    let render = `
        <div class="container d-flex my-5">
            <div class="w-100">
                <img src="${product.imgURL}" class="img-fluid">
            </div>
            <div class="container px-5">
                <h3 class="detail-title">${product.title}</h3>
                <p class="detail-price">$${product.price}</p>
                <p>${product.description}</p>
                <a href="#" class="link-detalles">Ver detalles del producto ></a>
                <form class="detail-form" action="http://localhost:3000/checkout" method="POST" class="as-producttile-info" style="float:left;min-height: 168px;">
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
                            <button id="add" class="btn rounded-circle" onclick="addCount()" type='button'>+</button><p id="counter" class="px-3">${product.inCart}</p><button id="subtract" onclick="
                            subtractCount()" class="btn rounded-circle" type='button'>-</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <input type="hidden" name="title" value="${product.title}">
                        <input id="price" type="hidden" name="price" value="${product.price}">
                        <button class="boton-aniadir btn me-5 p-3 w-100">Añadir al carrito</button>
                        <button type="submit" class="boton-comprar btn p-3 w-100" onclick="pay()">Comprar ahora</button>
                    </div>
                </form>
            </div>
        </div>
    `
    catalogoContainer.style = "display:none"
    detailContainer.style = "display:block"
    remerasDetail.innerHTML = render
}

const addCount = () => {
    product.inCart += 1
    product.total = product.inCart*product.price
    document.getElementById("counter").innerHTML = `$${product.total}`;
}

const subtractCount = () => {
    if(product.inCart > 0) {
    product.inCart -= 1
    product.total = product.total - product.price
    document.getElementById("counter").innerHTML = `$${product.total}`;
    } 
}

const pay = () => {
    product.total = "3435"
    console.log(typeof(product.total));
    console.log(product.total)
    document.getElementById("price").innerHTML = `$${product.total}`;
}

