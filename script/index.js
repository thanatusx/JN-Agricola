const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

var cont = 1

document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaImg()
},3000)

function proximaImg(){
    cont++
    if (cont > 5){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}