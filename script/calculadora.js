const visor = document.getElementById('visor')
var res = document.querySelector('p')
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
let vs = []
function Delete() {
    res.textContent = res.textContent.substring(0, res.textContent.length - 1)
}
function Somar() {
    res.style = 'color: white;'
    setTimeout( () => {
        res.style = 'color: black;'
    }, 200)
    vs.push(Number(res.textContent))
    if (vs.length == 2) {
        vs[0] += vs[1]
        vs.pop()
        res.textContent = vs[0]
    }
}
function Limpar() {
    res.textContent = null
    vs = []
}
addEventListener('keydown', e => { 
    if (e.key === 'c' || e.key === 'C') {
        Limpar()
    }
    if (e.keyCode <= 57 && e.keyCode >= 48 || e.keyCode <= 105 && e.keyCode >= 96) {
        if (res.textContent.length <= 23) {
            res.textContent += e.key.toString()
        }
    }
    if (e.code === 'Backspace') {
        Delete()
    }
    if (e.code === 'NumpadAdd') {
        Somar()
    }
})
n0.addEventListener("click", () => res.textContent += '0' )
n1.addEventListener("click", () => res.textContent += '1' )
n2.addEventListener("click", () => res.textContent += '2' )
n3.addEventListener("click", () => res.textContent += '3' )
n4.addEventListener("click", () => res.textContent += '4' )
n5.addEventListener("click", () => res.textContent += '5' )
n6.addEventListener("click", () => res.textContent += '6' )
n7.addEventListener("click", () => res.textContent += '7' )
n8.addEventListener("click", () => res.textContent += '8' )
n9.addEventListener("click", () => res.textContent += '9' )