const visor = document.getElementById('visor')
const res = document.querySelector('p')
const n0 = document.getElementById('0')
const n1 = document.getElementById('1')
const n2 = document.getElementById('2')
const n3 = document.getElementById('3')
const n4 = document.getElementById('4')
const n5 = document.getElementById('5')
const n6 = document.getElementById('6')
const n7 = document.getElementById('7')
const n8 = document.getElementById('8')
const n9 = document.getElementById('9')
addEventListener('keypress', e => { 
    if (e.key === 'c' || e.key === 'C') {
        Limpar()
    }
})
addEventListener('keypress', e => {
    if (e.key <= 9 && e.key >= 0) {
        if (res.textContent.length <= 23) {
            res.textContent += e.key.toString()
        }
    }
})
function Somar() {
    res.style = 'color: white;'
    setTimeout( () => {
        res.style = 'color: black;'
    }, 200)
}
function Limpar() {
    res.textContent = null
}