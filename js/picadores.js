import  {renderCards}   from './renderCards.js'

let picadoresContainer = document.getElementById('picadoresContainer')

let listaPicadores = [
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

picadoresContainer.innerHTML = renderCards(listaPicadores)
