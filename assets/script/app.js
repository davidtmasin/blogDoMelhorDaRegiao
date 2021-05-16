// Criando um script para apresentar a data na tela
const dateToday = new Date()

let weekend = new Array(
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
)
let day = dateToday.getDate()
let month = new Array(
    'Janeiro', 'Fevereiro',
    'Março', 'Abril',
    'Maio', 'Junho',
    'Julho', 'Agosto',
    'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
)

let year = dateToday.getFullYear()

let completeDate = String(weekend[dateToday.getDay()] + ", " + day + " de " + month[dateToday.getMonth()] + " de " + year)

let subtitle = document.getElementById('date')

subtitle.innerHTML = completeDate


// Criando a funcionalidade do sidebard
function openNav() {
    document.getElementById("opened").style.width = "250px";
    document.getElementById("collapsed").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("opened").style.width = "0";
    document.getElementById("collapsed").style.marginLeft = "0";
}


// Funcionalidade para mudar ícone
function toggleIcon() {    
    if (document.getElementById('mudar2').getAttribute('class') === 'far fa-eye-slash'){
        console.log("Entrou no IF")
        document.getElementById('mudar2').setAttribute('class', 'far fa-eye');
    } else{
        console.log("Entrou no Else")
        document.getElementById('mudar2').setAttribute('class', 'far fa-eye-slash');
    }
}