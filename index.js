let picadoresContainer = document.getElementById('picadoresContainer')

let listPicadores = [
    {
        title:"Picador Cogonaut",
        price:100,
        imgURL:"https://http2.mlstatic.com/D_NQ_NP_817997-MLA48379237511_112021-O.webp"
    },
    {
        title:"Picador Cogonaut",
        price:100,
        imgURL:"https://http2.mlstatic.com/D_NQ_NP_817997-MLA48379237511_112021-O.webp"
    },
    {
        title:"Picador Cogonaut",
        price:100,
        imgURL:"https://http2.mlstatic.com/D_NQ_NP_817997-MLA48379237511_112021-O.webp"
    }
]

let renderCards = listPicadores.map(pica => `
    <div class="card border-0" style="width: 18rem;">
        <div class="cont-img-comprar d-flex justify-content-center">
            <button class="boton-compra-rapida border-0 rounded-3 w-50 align-self-center py-2">Compra Rápida</button>
            <img src="${pica.imgURL}" class="card-img-top" alt="...">
        </div>
        <div class="card-body text-center">
            <h5 class="card-title">${pica.title}</h5>
            <p class="card-text">$${pica.price}</p>
        </div>
    </div>
`)

picadoresContainer.innerHTML = renderCards