const productsCart = [
    {
        id: 1,
        name: "Item 1",
        price: `10.00`
    },
    {
        id: 2,
        name: "Item 2",
        price: `10.00`
    },
    {
        id: 3,
        name: "Item 3",
        price: `10.00`
    },
    {
        id: 4,
        name: "Item 4",
        price: `10.00`
    },
    {
        id: 5,
        name: "Item 5",
        price: `10.00`
    },
    {
        id: 6,
        name: "Item 6",
        price: `10.00`
    },
    {
        id: 7,
        name: "Item 7",
        price: `10.00`
    },
    {
        id: 8,
        name: "Item 8",
        price: `10.00`
    },
    {
        id: 9,
        name: "Item 9",
        price: `10.00`
    },
    {
        id: 10,
        name: "Item 10",
        price: `10.00`
    },
    {
        id: 11,
        name: "Item 11",
        price: `10.00`
    },
    {
        id: 12,
        name: "Item 12",
        price: `10.00`
    },
    {
        id: 13,
        name: "Item 13",
        price: `10.00`
    },
    {
        id: 14,
        name: "Item 14",
        price: `10.00`
    },
    {
        id: 15,
        name: "Item 15",
        price: `10.00`
    },
    {
        id: 16,
        name: "Item 16",
        price: `10.00`
    },
    {
        id: 17,
        name: "Item 17",
        price: `10.00`
    },
    {
        id: 18,
        name: "Item 18",
        price: `10.00`
    },
    {
        id: 19,
        name: "Item 19",
        price: `10.00`
    },
    {
        id: 20,
        name: "Item 20",
        price: `10.00`
    },

]

let body          = document.querySelector(`body`)
let h1            = document.createElement(`h1`)
let divh1         = document.createElement(`div`)
let main          = document.createElement(`main`)
let span          = document.createElement(`span`)
let pSpanItem     = document.createElement(`p`)
let pSpanPreco    = document.createElement(`p`)
let sectionList   = document.createElement(`section`)
let ul            = document.createElement(`ul`)
let sectionSoma   = document.createElement(`section`)
let pSectionTotal = document.createElement(`p`)
let pSectionSoma  = document.createElement(`p`)
let button        = document.createElement(`button`)
let pButton       = document.createElement(`p`)

divh1.classList.add(`divh1`)
pSpanItem.classList.add(`pSpanItem`)
pSpanPreco.classList.add(`pSpanPreco`)
sectionList.classList.add(`sectionItens`)
sectionSoma.classList.add(`sectionSoma`)
pSectionTotal.classList.add(`pSectionTotal`)
pSectionSoma.classList.add(`pSectionSoma`)
button.classList.add(`finalizar`)
pButton.classList.add(`pButton`)

h1.innerText            = `Virtual Market`
pSpanItem.innerText     = `Item`
pSpanPreco.innerText    = `Preço`
pSectionTotal.innerText = `Total`
pSectionSoma.innerText  = `R$: ${somaItems(productsCart)}`
pButton.innerText       = `Finalizar Compra`

body.append(divh1, main)
divh1.append(h1)
main.append(span, sectionList, sectionSoma, button)
span.append(pSpanItem, pSpanPreco)
sectionList.append(ul)
sectionSoma.append(pSectionTotal, pSectionSoma)
button.append(pButton)

function itensCheck (lista){
    if (Array.isArray(lista)){
        for (i = 0; i < lista.length; i++){
            let li       = document.createElement(`li`)
            let pNameLi  = document.createElement(`p`)
            let pPriceLi = document.createElement(`p`)
            
            pNameLi.classList.add(`itemName`)
            pPriceLi.classList.add(`itemPrice`)
            
            pNameLi.innerText = `${lista[i].name}`
            pPriceLi.innerText = `${lista[i].price}`
            
            ul.append(li)
            li.append(pNameLi, pPriceLi)
        }
    }
}

function somaItems(lista){
    let soma = 0
    for (i = 0; i < lista.length; i++){
        soma += parseFloat(lista[i].price)
    }
    let somaToFixed = soma.toFixed(2)
    let somaString = `${somaToFixed}`
    return somaString
}

somaItems(productsCart)
itensCheck(productsCart)