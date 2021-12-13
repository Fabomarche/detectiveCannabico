let remerasContainer = document.getElementById('remerasContainer')

let listaRemeras =[
    {   
        id: 1,
        title:"Remera Dossired",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price:1000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        inCart:0
    },
    {
        id: 2,
        title:"Remera Dossired",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price:2000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        inCart:0
    },
    {
        id: 3,
        title:"Remera Dossired",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price:3000,
        imgURL:"../assets/images/remeraEjemplo.jpg",
        inCart:0
    }
]

remerasContainer.innerHTML = renderCards(listaRemeras)

