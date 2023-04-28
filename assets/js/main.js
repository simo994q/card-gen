

let boxShadowElems = document.querySelectorAll('#boxShadowDetails input')

boxShadowElems.forEach(function (element) {
    element.addEventListener('keyup', function () {
        boxShadow()
    })
});


const card = document.getElementById('customCard')


const boxShadowSelector = document.getElementById('boxShadowSelector')

let cardBoxShadow;

const boxShadowDetails = document.getElementById('boxShadowDetails')

boxShadowSelector.addEventListener('change', () => {
    if (boxShadowSelector.checked == true) {
        boxShadowDetails.style.display = "flex"
        boxShadow()
    }
    else {
        boxShadowDetails.style.display = "none"
        card.style.boxShadow = "0px 0px 0px 0px"
    }
})

function boxShadow() {
    cardBoxShadow = `${boxShadowElems[0].value}px ${boxShadowElems[1].value}px ${boxShadowElems[2].value}px ${boxShadowElems[3].value}px #${boxShadowElems[4].value}`

    card.style.boxShadow = cardBoxShadow
};



const paddingSelector = document.getElementById('paddingSelector')
const paddingDetails = document.getElementById('paddingDetails')
const paddingValue = document.getElementById('paddingValue')

paddingValue.addEventListener('keyup', function () {
    card.style.padding = `${paddingValue.value}px`
})


paddingSelector.addEventListener('change', () => {
    if (paddingSelector.checked == true) {
        paddingDetails.style.display = "flex"
        card.style.padding = `${paddingValue.value}px`
    }
    else {
        paddingDetails.style.display = "none"
        card.style.padding = "0"
    }
})



const addElementButtons = document.querySelectorAll('#addElements button')
const elementsList = document.getElementById('elementsList')

addElementButtons.forEach(function (element) {
    element.addEventListener('click', function () {
        elementsList.innerHTML += `<li>${element.innerHTML}</li>`
        cardInsertSwitch(element.innerHTML)
    })
});

function cardInsertSwitch(element) {
    switch (element) {
        case 'h1':
            card.innerHTML += `<h1>h1</h1>`
            break;
        case 'h2':
            card.innerHTML += `<h2>h2</h2>`
            break;
        case 'h3':
            card.innerHTML += `<h3>h3</h3>`
            break;
        case 'p':
            card.innerHTML += `<p>p</p>`
            break;
        case 'div':
            card.innerHTML += `<div>div</div>`
            break;
        case 'img':
            card.innerHTML += `<img src="assets/img/placeholder.jpg">`
            break;
    }
}