const btn = document.querySelector('.btn')
btn.addEventListener('click', () =>{
    alert("tlačítko zmáčknuto")
})

const btnColor = document.querySelector('.btnColor')
const box = document.querySelector('.box')
let isBlue = false
btnColor.addEventListener('click', ()  =>{
    if (isBlue) {
        box.style.backgroundColor = "blue"
        isBlue = false
    }else{
        box.style.backgroundColor = "red"
        isBlue = true
    }
})

const nadpis = document.querySelector('.nadpis')
const btnNadpis = document.querySelector('.btnNadpis')

btnNadpis.addEventListener('click', () =>{
    nadpis.style.color = "green"
})