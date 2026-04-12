const dados = [
  {
    dia_da_semana: 'Segunda-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Língua Portuguesa',
    terceiraAula: 'Matemática',
    quartaAula: 'Geografia',
    quintaAula: 'Geografia',
    livros: 'Geografia'
  },
  {
    dia_da_semana: 'Terça-feira',
    primeiraAula: 'Arte',
    segundaAula: 'Arte',
    terceiraAula: 'Ale',
    quartaAula: 'Edu. Físc',
    quintaAula: 'Edu. Físc',
    livros: ''
  },
  {
    dia_da_semana: 'Quarta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Ativ. de Pesquisa',
    terceiraAula: 'Matemática',
    quartaAula: 'Ciências',
    quintaAula: 'Ciências',
    livros: 'Ciências'
  },
  {
    dia_da_semana: 'Quinta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Matemática',
    terceiraAula: 'Matemática',
    quartaAula: 'Ale',
    quintaAula: 'História',
    livros: 'Matemática'
  },
  {
    dia_da_semana: 'Sexta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Língua Portuguesa',
    terceiraAula: 'Matemática',
    quartaAula: 'História',
    quintaAula: 'História',
    livros: 'Língua Portuguesa e História'
  },
  {
    dia_da_semana: 'Sábado',
    primeiraAula: '',
    segundaAula: '',
    terceiraAula: '',
    quartaAula: '',
    quintaAula: '',
    livros: ''
  },
  {
    dia_da_semana: 'Domingo',
    primeiraAula: '',
    segundaAula: '',
    terceiraAula: '',
    quartaAula: '',
    quintaAula: '',
    livros: ''
  }
]

let aula1 = document.getElementById('aula1')
let aula2 = document.getElementById('aula2')
let aula3 = document.getElementById('aula3')
let aula4 = document.getElementById('aula4')
let aula5 = document.getElementById('aula5')
let livros = document.getElementById('livros')
let hoje = document.getElementById('hoje')

const data = new Date()
const diaDaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' })

const diaAtual = dados.find(
  item => item.dia_da_semana.toLowerCase() === diaDaSemana.toLowerCase()
)

aula1.innerHTML = diaAtual.primeiraAula
aula2.innerHTML = diaAtual.segundaAula
aula3.innerHTML = diaAtual.terceiraAula
aula4.innerHTML = diaAtual.quartaAula
aula5.innerHTML = diaAtual.quintaAula
livros.innerHTML = diaAtual.livros
hoje.innerHTML = diaAtual.dia_da_semana
