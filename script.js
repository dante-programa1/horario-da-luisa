const dados = [
  {
    dia_da_semana: 'segunda-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Língua Portuguesa',
    terceiraAula: 'Matemática',
    quartaAula: 'Geografia',
    quintaAula: 'Geografia',
    livros: ''
  },
  {
    dia_da_semana: 'terça-feira',
    primeiraAula: 'Arte',
    segundaAula: 'Arte',
    terceiraAula: 'Ale',
    quartaAula: 'Edu. Físc',
    quintaAula: 'Edu. Físc',
    livros: ''
  },
  {
    dia_da_semana: 'quarta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Ativ. de Pesquisa',
    terceiraAula: 'Matemática',
    quartaAula: 'Ciências',
    quintaAula: 'Ciências',
    livros: ''
  },
  {
    dia_da_semana: 'quinta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Matemática',
    terceiraAula: 'Matemática',
    quartaAula: 'Ale',
    quintaAula: 'História',
    livros: ''
  },
  {
    dia_da_semana: 'sexta-feira',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Língua Portuguesa',
    terceiraAula: 'Matemática',
    quartaAula: 'História',
    quintaAula: 'História',
    livros: ''
  },
  {
    dia_da_semana: 'sábado',
    primeiraAula: 'Língua Portuguesa',
    segundaAula: 'Língua Portuguesa',
    terceiraAula: 'Matemática',
    quartaAula: 'História',
    quintaAula: 'História',
    livros: ''
  }
]

let aula1 = document.getElementById('aula1')
let aula2 = document.getElementById('aula2')
let aula3 = document.getElementById('aula3')
let aula4 = document.getElementById('aula4')
let aula5 = document.getElementById('aula5')
let livros = document.getElementById('livros')
const data = new Date()
const diaDaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' })

const diaAtual = dados.filter(item => item.dia_da_semana === diaDaSemana)

aula1.innerHTML = diaAtual[0].primeiraAula
aula2.innerHTML = diaAtual[0].segundaAula
aula3.innerHTML = diaAtual[0].terceiraAula
aula4.innerHTML = diaAtual[0].quartaAula
aula5.innerHTML = diaAtual[0].quintaAula
livros.innerHTML = diaAtual[0].livros
