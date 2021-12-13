let remerasDetail = document.getElementById('remerasDetail');
let catalogoContainer = document.getElementById('catalogoContainer');
let detailContainer = document.getElementById('detailContainer');

detailContainer.style = "display:none"

const detail = (itemId) =>{
    let item = listaRemeras.find(el => el.id === itemId)
    console.log(item)
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
                            <button class="btn rounded-circle">+</button><p id="contadorNumero" class="px-3">0</p><button class="btn rounded-circle">-</button>
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
    catalogoContainer.style = "display:none"
    detailContainer.style = "display:block"
    remerasDetail.innerHTML = render
}