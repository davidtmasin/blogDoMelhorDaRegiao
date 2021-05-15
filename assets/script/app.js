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