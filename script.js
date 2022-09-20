// me mata aaaaaaaaaaaaa
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // points for the score
let placar = 0 // score

// aduio
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// question
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// answares
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article with class questions
let articleQuestoes = document.querySelector('.questoes')
// ol li with alternatives
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "O quê é a radioatividade  natural?",
    alternativaA : "Corrida de F1.",
    alternativaB : "É aquela que se manifesta nos elementos radioativos.",
    alternativaC : "É aquela que o elemento não se manifesta.",
    alternativaD : "É um elemnto que foi criado de plantas.",
    correta      : "É aquela que se manifesta nos elementos radioativos.",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "O quê é a radiotividade artificial",
    alternativaA : "É aquela que é provocada por transformações nucleares artificiais.",
    alternativaB : "É aquela que surgiu na revolução industrial.",
    alternativaC : "É aquela que veio surgir de fabricação artificial.",
    alternativaD : "É aquela que é um derivado de substancias naturais e Joghurt.",
    correta      : "É aquela que é provocada por transformações nucleares artificiais.",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Quais destas alternativas faz coerencia com radioatividade  na medicina",
    alternativaA : "Radiograma e Tomografia",
    alternativaB : "Tomografia e analise",
    alternativaC : "Tomografia e reo irirangi",
    alternativaD : "Radiograma e surf",
    correta      : "Radiograma e Tomografia",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual periodo foi descoberto acidentalmente radioatividade ",
    alternativaA : "1990",
    alternativaB : "1894",
    alternativaC : "1896",
    alternativaD : "1980",
    correta      : "1896",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Quais os tipos de emissões radioativas conhecidas",
    alternativaA : "Alfa e Gama",
    alternativaB : "Alfa, Beta e Gama ",
    alternativaC : "Beta e Delta",
    alternativaD : "Alfa, Gama e Dell",
    correta      : "Alfa, Beta e Gama",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Um objeto, que se desloca horizontalmente com velocidade v0, é submetido à ação de uma força constante de intensidade F que o acelera, levando-o a atingir a velocidade v em um intervalo de tempo t. Nessas condições, é correto afirmar que a massa do objeto vale:",
    alternativaA : "(v – v0) ÷ F.t",
    alternativaB : "F.t ÷ (v – v0)",
    alternativaC : "F.(v – v0) ÷ t",
    alternativaD : "(F – v) ÷ v0.t",
    correta      : "F.t ÷ (v – v0)",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "A respeito da inércia, marque a alternativa falsa:",
    alternativaA : "A massa é a medida quantitativa da inércia.",
    alternativaB : "Na falta de atrito, um corpo em movimento permanecerá em movimento perpetuamente.",
    alternativaC : "A tendência de um corpo em movimento uniforme e com aceleração constante é manter-se em movimento perpetuamente",
    alternativaD : "Quanto maior a massa de um corpo, mais fácil será alterar sua velocidade.",
    correta      : "A tendência de um corpo em movimento uniforme e com aceleração constante é manter-se em movimento perpetuamente",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O foguete (O Saturno V) Queimou uma quantidade grande de gasolina, segundo o post, qual foi a quantidade bustivel?",
    alternativaA : "2.872.00L",
    alternativaB : "2.458.00L",
    alternativaC : "2.120.00L",
    alternativaD : "2.000.00L",
    correta      : "2.120.00L",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Podemos liberar o combustível solído com materiais não-metalicos(carvão, por exemplo) para melhorar parârametros de queima ?",
    alternativaA : "Sim, desde que não sejam tóxicos. ",
    alternativaB : "Não, pois seria crime ambiental.",
    alternativaC : "Talvez, só teria que ser no espaço,  longe da terra.",
    alternativaD : "Não, eles são altamente tóxicos e prejudicariam o ambiente.",
    correta      : "Sim, desde que não sejam tóxicos. ",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Há alguma especificação de peso?",
    alternativaA : "Sim. ",
    alternativaB : "Não.",
    alternativaC : "Sim, no mínimo tem que ser 5 Toneladas.",
    alternativaD : "Sim, não pode ultrapassar 22 Toneladas.",
    correta      : "Não.",
}

// constant with a array of objects with all the questions
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// ASSEMBLE THE 1st COMPLETE QUESTION, to start the Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD


// CONFIGURE THE INITIAL VALUE OF THE 1st COMPLETE QUESTION
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// TO ASSEMBLE THE NEXT QUESTIONS
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFY DOUBLE CLICK ON ALTERNATIVES
alternativas.addEventListener('dblclick', () => {
    //console.log('bouble click')
    pontos -= 10 // take 10 points in case of double click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + Chosen Answer)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Rigth")
        //answerThis.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("wrong!")
        //answerThis.textContent = "wrong! 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 500);
    
    // update score
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // block the choice of options

    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // ocult article of question
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // reset the score
        //location.reload();
        instrucoes.classList.remove('placar')
        // reset the game
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}