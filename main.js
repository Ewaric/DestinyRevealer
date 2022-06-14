// variaveis?
// dados de entrada?
// dados de saida?

const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inpPergunta')
const buttonAsk = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// Ação de click para pergunta

function perguntar() {
  // Gerar condição de pergunta
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonAsk.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // Gerando número aleatório para respostas

  const totalRespostas = respostas.length
  const numAleatorio = Math.floor(Math.random() * totalRespostas)

  respostaElement.innerHTML = pergunta + respostas[numAleatorio]

  respostaElement.style.opacity = 1

  // Removendo resposta após curto espaço de tempo

  setTimeout(function () {
    respostaElement.style.opacity = 0
    buttonAsk.removeAttribute('disabled')
  }, 5000)
}
