const detail = (itemId, list) => {
    let item = list.find(el => el.id === itemId)
    return item
}




export const renderItem = (item) => {
    let render = `
        <div>
            <div>
                <img src="${item.imgURL}">
            </div>
            <div>
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
                <a>Ver detalles del producto ></a>
                <form>
                    <label>Talle</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>S</option>
                        <option value="1">M</option>
                        <option value="2">L</option>
                    </select>
                    <label>Color</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>blanco</option>
                        <option value="1">nedro</option>
                        <option value="2">gris</option>
                    </select>
                    <div>
                        <button>+</button><p id="contador">0</p><button>-</button>
                    </div>
                    <div>
                        <button>Añadir a carrito</button>
                        <button>Comprar ahora</button>
                    </div>
                </form>
            </div>
        </div>
    `
    return render
}