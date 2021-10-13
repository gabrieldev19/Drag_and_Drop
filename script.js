// chamar todos os cards da page 
// utilizar os três eventos enquanto o elemento 
// está sendo arrastado
// eventos dragstart, drag e dragend

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone') //local onde serão soltos os cards
// para cada card ouça os eventos
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart) //nome da função
    card.addEventListener('drag', drag) //nome da função
    card.addEventListener('dragend', dragend) //nome da função
})

// functions dos eventos

function dragstart(){
    //para cada dropzone, adicione a classe 
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-draggin') //this se refere ao card
}
function drag(){
    //console.log("card: is dragging")
}
function dragend(){
    dropzones.forEach( dropzone =>{
        dropzone.classList.remove('highlight')
    })

    this.classList.remove('is-draggin')
}

// local onde vou soltar os cartões

dropzones.forEach(dropzone =>{
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    // console.log("car enter zone")
}
function dragover(){
    //this é o dropzone
    this.classList.add('over')

    //pegar o cartão que está no is-dragging
    const cardBeingDragged = document.querySelector('.is-draggin')
    
    //this é o dropzone
    this.appendChild(cardBeingDragged)
}
function dragleave(){
    this.classList.remove('over')
}
function drop(){
    this.classList.remove('over')
}

