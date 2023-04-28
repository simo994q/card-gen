

let boxShadowElems = document.querySelectorAll('#boxShadowDetails input')
console.log(boxShadowElems);

boxShadowElems.forEach(function (element) {
    element.addEventListener('keyup', function () {
        boxShadow()
    })
});


const card = document.getElementById('customCard')


const boxShadowSelector = document.getElementById('boxShadowSelector')

let cardBoxShadow;

boxShadowSelector

function boxShadow() {

    cardBoxShadow = `${boxShadowElems[0].value}px ${boxShadowElems[1].value}px ${boxShadowElems[2].value}px ${boxShadowElems[3].value}px #${boxShadowElems[4].value}`

    card.style.boxShadow = cardBoxShadow



};