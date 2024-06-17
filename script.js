let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let c3 = document.querySelector("#c3")
let c4 = document.querySelector("#c4")
let c5 = document.querySelector("#c5")

let paginaInicial = document.getElementById("inicio")
let quiz = document.getElementById("quiz")
let textoCategoria = document.getElementById("categoria")
let textoPergunta = document.getElementById("pergunta")
let fim = document.getElementById("fim")
let b_reset = document.querySelector("#voltar")

let q1 = document.getElementById("questao1")
let q2 = document.getElementById("questao2")
let q3 = document.getElementById("questao3")
let q4 = document.getElementById("questao4")
let q5 = document.getElementById("questao5")

let p1 = document.getElementById("pergunta1")
let p2 = document.getElementById("pergunta2")
let p3 = document.getElementById("pergunta3")
let p4 = document.getElementById("pergunta4")
let p5 = document.getElementById("pergunta5")

let a1q1 = document.getElementById("a1q1")
let a2q1 = document.getElementById("a2q1")
let a3q1 = document.getElementById("a3q1")
let a4q1 = document.getElementById("a4q1")

let a1q2 = document.getElementById("a1q2")
let a2q2 = document.getElementById("a2q2")
let a3q2 = document.getElementById("a3q2")
let a4q2 = document.getElementById("a4q2")

let a1q3 = document.getElementById("a1q3")
let a2q3 = document.getElementById("a2q3")
let a3q3 = document.getElementById("a3q3")
let a4q3 = document.getElementById("a4q3")

let a1q4 = document.getElementById("a1q4")
let a2q4 = document.getElementById("a2q4")
let a3q4 = document.getElementById("a3q4")
let a4q4 = document.getElementById("a4q4")

let a1q5 = document.getElementById("a1q5")
let a2q5 = document.getElementById("a2q5")
let a3q5 = document.getElementById("a3q5")
let a4q5 = document.getElementById("a4q5")

let areaGeral = ["Quem foi o primeiro homem a pisar na Lua?", "Em que bairro fica a EEEP Dr. José Iran Costa?", "Quantos Estados tem os Estados Unidos da América?", "Qual é o único país do mundo que possui uma bandeira que não é retangular?", "Qual o verdadeiro nome de Dociana?"] // 5 perguntas
let infoBasica = ["Quais das seguintes alternativas representa um hardware?", "Quais dos seguintes vírus de computador utiliza uma rede para se espalhar?", "Qual a unidade mínima do Byte?", "Qual dispositivo do computador é responsável por direcionar os dados por todos os outros componentes?", "Das formas de agrupamento dos computadores em uma rede qual delas é a mais utilizada?"] // 5 perguntas
let historia = ["Qual foi a primeira cidade japonesa a ser destruída por uma bomba nuclear na 2 guerra mundial?", "Quem foi considerado o 'rei do cangaço'?", "Quando foi derrubado o Muro de Berlim?", "Quem foi o terceiro gorvenador-geral do Brasil?", "Os escravos que trabalhavam em lavouras eram:"] // 5 perguntas
let portugues = ["'Choveu muito na cidade ontem'. Qual palavra desta frase apresenta contração?", "Em qual das frases abaixo há um erro de concordância verbal?", "Qual das seguintes palavras é um exemplo de oxítona?", "Em qual das alternativas o verbo 'haver' está incorretamente empregado?", "Qual das palavras abaixo está incorretamente acentuada?"] // // 5 perguntas
let logica = ["Em uma família, Paulo é pai de Lúcia. Lúcia tem duas filhas, Letícia e Roberta. Pedro é irmão de Paulo. Qual é a relação de Pedro com Letícia?", "Cada mês tem 30 dias. Se hoje é terça-feira, que dia da semana será daqui a 100 dias?", "Em um jogo, cada vitória vale 3 pontos, cada empate vale 1 ponto e cada derrota não vale pontos. Um time jogou 20 partidas e somou 32 pontos. Quantas vitórias, empates e derrotas esse time teve?", "Cinco amigos — André, Beatriz, Carlos, Daniela e Ítalo — estão sentados em uma fila. Sabemos que:\n- André não está ao lado de Beatriz.\n- Carlos está entre Beatriz e Daniela.\n- Daniela está à direita de Ítalo.\nQual é a ordem dos amigos na fila?", "Dona Olívia tem quatro filhos: Luan, Rodolfo, Emily e Helena. A esse respeito, sabe-se que:\nI. Helena é mais velha que Emily.\nII. Luan é mais novo que Rodolfo.\nIII. Rodolfo é mais velho que Emily.\nAssim, é obrigatoriamente verdadeiro que:"] // 5 perguntas

let placar = document.getElementById("placar")
let pontuacao = 0
placar.textContent = pontuacao

function esconder(elemento){
	elemento.style.display = "none"
}

function aparecer(elemento){
	elemento.style.display = "flex"
}

function mudarPerguntas(perguntaAtual, proximaPergunta) {
	esconder(perguntaAtual)
	aparecer(proximaPergunta)
}

function certas_erradas(certa, errada1, errada2, errada3, pA, pP){
	certa.addEventListener('click', (a) => {
		certa.style.border = "7px limegreen solid"
		certa.style.color = "limegreen"
		certa.value = "ACERTOU!!!"
		pontuacao = pontuacao + 10
		placar.textContent = pontuacao
		certa.disabled = true
		errada1.disabled = true
		errada2.disabled = true
		errada3.disabled = true
		setTimeout((j) => {
			mudarPerguntas(pA, pP)
		}, "500")
	})
	errada1.addEventListener('click', (b) => {
		errada1.style.border = "7px red solid"
		errada1.style.color = "red"
		errada1.value = "Errou... Paaarabéns."
		pontuacao = pontuacao - 5
		placar.textContent = pontuacao
		certa.disabled = true
		errada1.disabled = true
		errada2.disabled = true
		errada3.disabled = true
		setTimeout((j) => {
			mudarPerguntas(pA, pP)
		}, "500")
	})
	errada2.addEventListener('click', (c) => {
		errada2.style.border = "7px red solid"
		errada2.style.color = "red"
		errada2.value = "Errou... Paaarabéns."
		pontuacao = pontuacao - 5
		placar.textContent = pontuacao
		certa.disabled = true
		errada1.disabled = true
		errada2.disabled = true
		errada3.disabled = true
		setTimeout((j) => {
			mudarPerguntas(pA, pP)
		}, "500")
	})
	errada3.addEventListener('click', (d) => {
		errada3.style.border = "7px red solid"
		errada3.style.color = "red"
		errada3.value = "Errou... Paaarabéns."
		pontuacao = pontuacao - 5
		placar.textContent = pontuacao
		certa.disabled = true
		errada1.disabled = true
		errada2.disabled = true
		errada3.disabled = true
		setTimeout((j) => {
			mudarPerguntas(pA, pP)
		}, "500")
	})
}

c1.addEventListener('click', (e) => {
	esconder(inicio)
	aparecer(textoCategoria)
	textoCategoria.textContent = "PERGUNTAS DE ÁREA GERAL"
	aparecer(quiz)
	aparecer(q1)
	esconder(q2)
	esconder(q3)
	esconder(q4)
	esconder(q5)
	
	p1.textContent = areaGeral[0]
	a1q1.value = "Neil Armstrong"
	a2q1.value = "Buzz Aldrin"
	a3q1.value = "Alan Shepard"
	a4q1.value = "Yuri Gagarin"
	certas_erradas(a1q1, a2q1, a3q1, a4q1, q1, q2)
	
	p2.textContent = areaGeral[1]
	a1q2.value = "Juremal"
	a2q2.value = "São Vicente"
	a3q2.value = "Betânia"
	a4q2.value = "Varjota"
	certas_erradas(a3q2, a1q2, a2q2, a4q2, q2, q3)
	
	p3.textContent = areaGeral[2]
	a1q3.value = "53"
	a2q3.value = "50"
	a3q3.value = "45"
	a4q3.value = "40"
	certas_erradas(a2q3, a1q3, a3q3, a4q3, q3, q4)
	
	p4.textContent = areaGeral[3]
	a1q4.value = "Suiça"
	a2q4.value = "Bangladesh"
	a3q4.value = "Japão"
	a4q4.value = "Nepal"
	certas_erradas(a4q4, a1q4, a2q4, a3q4, q4, q5)
	
	p5.textContent = areaGeral[4]
	a1q5.value = "Maria de Deus"
	a2q5.value = "Cicera Evangelista"
	a3q5.value = "Maria Evangelista"
	a4q5.value = "Cicera Aparecida"
	certas_erradas(a2q5, a1q5, a3q5, a4q5, q5, fim)
	
})

c2.addEventListener('click', (e) => {
	esconder(inicio)
	aparecer(textoCategoria)
	textoCategoria.textContent = "PERGUNTAS DE INFORMÁTICA BÁSICA"
	aparecer(quiz)
	aparecer(q1)
	esconder(q2)
	esconder(q3)
	esconder(q4)
	esconder(q5)
	
	p1.textContent = infoBasica[0]
	a1q1.value = "Windows 7"
	a2q1.value = "Facebook"
	a3q1.value = "Google Chrome"
	a4q1.value = "Placa-mãe"
	certas_erradas(a4q1, a1q1, a3q1, a2q1, q1, q2)
	
	p2.textContent = infoBasica[1]
	a1q2.value = "Malware"
	a2q2.value = "Trojan"
	a3q2.value = "Worms"
	a4q2.value = "Spywares"
	certas_erradas(a3q2, a1q2, a2q2, a4q2, q2, q3)
	
	p3.textContent = infoBasica[2]
	a1q3.value = "1024 bytes"
	a2q3.value = "8 bits"
	a3q3.value = "1024 megabytes"
	a4q3.value = "1024 gigabytes"
	certas_erradas(a2q3, a1q3, a3q3, a4q3, q3, q4)
	
	p4.textContent = infoBasica[3]
	a1q4.value = "Cooler"
	a2q4.value = "Memória RAM"
	a3q4.value = "HD (Hard disk)"
	a4q4.value = "Processador"
	certas_erradas(a4q4, a1q4, a2q4, a3q4, q4, q5)
	
	p5.textContent = infoBasica[4]
	a1q5.value = "Topologia em Estrela"
	a2q5.value = "Topologia em Anel"
	a3q5.value = "Topologia Wireless"
	a4q5.value = "Topologia em Barramento"
	certas_erradas(a1q5, a2q5, a3q5, a4q5, q5, fim)
	
})

c3.addEventListener('click', (e) => {
	esconder(inicio)
	aparecer(textoCategoria)
	textoCategoria.textContent = "PERGUNTAS DE HISTÓRIA"
	aparecer(quiz)
	aparecer(q1)
	esconder(q2)
	esconder(q3)
	esconder(q4)
	esconder(q5)
	
	p1.textContent = historia[0]
	a1q1.value = "Hinamizawa"
	a2q1.value = "Hiroshima"
	a3q1.value = "Nagazaki"
	a4q1.value = "Okinawa"
	certas_erradas(a2q1, a1q1, a4q1, a3q1, q1, q2)
	
	p2.textContent = historia[1]
	a1q2.value = "Maria Bonita"
	a2q2.value = "Querosene"
	a3q2.value = "Caba di Ferro"
	a4q2.value = "Lampião"
	certas_erradas(a4q2, a1q2, a2q2, a3q2, q2, q3)
	
	p3.textContent = historia[2]
	a1q3.value = "1984"
	a2q3.value = "1982"
	a3q3.value = "1989"
	a4q3.value = "1987"
	certas_erradas(a3q3, a1q3, a2q3, a4q3, q3, q4)
	
	p4.textContent = historia[3]
	a1q4.value = "Tomé de Sousa"
	a2q4.value = "Martim Afonso"
	a3q4.value = "Álvares Cabral"
	a4q4.value = "Mem de Sá"
	certas_erradas(a4q4, a1q4, a2q4, a3q4, q4, q5)
	
	p5.textContent = historia[4]
	a1q5.value = "Escravos do eito"
	a2q5.value = "Escravos de ganho"
	a3q5.value = "Escravos bantos"
	a4q5.value = "Escravos domésticos"
	certas_erradas(a1q5, a2q5, a3q5, a4q5, q5, fim)
	
})

c4.addEventListener('click', (e) => {
	esconder(inicio)
	aparecer(textoCategoria)
	textoCategoria.textContent = "PERGUNTAS DE PORTUGUÊS"
	aparecer(quiz)
	aparecer(q1)
	esconder(q2)
	esconder(q3)
	esconder(q4)
	esconder(q5)
	
	p1.textContent = portugues[0]
	a1q1.value = "Ontem"
	a2q1.value = "Choveu"
	a3q1.value = "Na"
	a4q1.value = "Muito"
	certas_erradas(a3q1, a1q1, a2q1, a4q1, q1, q2)
	
	p2.textContent = portugues[1]
	a1q2.value = "Eles foram ao cinema."
	a2q2.value = "Nós vamos ao parque."
	a3q2.value = "Eu e ela estudamos juntos."
	a4q2.value = "Os alunos entregou os trabalhos."
	certas_erradas(a4q2, a1q2, a2q2, a3q2, q2, q3)
	
	p3.textContent = portugues[2]
	a1q3.value = "Café"
	a2q3.value = "Fácil"
	a3q3.value = "Árvore"
	a4q3.value = "Tênis"
	certas_erradas(a1q3, a2q3, a3q3, a4q3, q3, q4)
	
	p4.textContent = portugues[3]
	a1q4.value = "Deve haver muitas dúvidas sobre o assunto."
	a2q4.value = "Haviam muitas pessoas na festa."
	a3q4.value = "Eles houveram de ir ao médico."
	a4q4.value = "Haverão novos desafios no futuro."
	certas_erradas(a2q4, a1q4, a3q4, a4q4, q4, q5)
	
	p5.textContent = portugues[4]
	a1q5.value = "Coração"
	a2q5.value = "Túnel"
	a3q5.value = "Pêra"
	a4q5.value = "Lápis"
	certas_erradas(a3q5, a1q5, a2q5, a4q5, q5, fim)
	
})

c5.addEventListener('click', (e) => {
	esconder(inicio)
	aparecer(textoCategoria)
	textoCategoria.textContent = "PERGUNTAS DE LÓGICA"
	aparecer(quiz)
	aparecer(q1)
	esconder(q2)
	esconder(q3)
	esconder(q4)
	esconder(q5)
	
	p1.textContent = logica[0]
	a1q1.value = "Avô"
	a2q1.value = "Tio"
	a3q1.value = "Primo"
	a4q1.value = "Padrinho"
	certas_erradas(a2q1, a1q1, a3q1, a4q1, q1, q2)
	
	p2.textContent = logica[1]
	a1q2.value = "Terça-feira"
	a2q2.value = "Quarta-feira"
	a3q2.value = "Quinta-feira"
	a4q2.value = "Sexta-feira"
	certas_erradas(a3q2, a1q2, a2q2, a4q2, q2, q3)
	
	p3.textContent = logica[2]
	a1q3.value = "9 vitórias, 5 empates, 6 derrotas"
	a2q3.value = "8 vitórias, 9 empates, 3 derrotas"
	a3q3.value = "6 vitórias, 10 empates, 4 derrotas"
	a4q3.value = "10 vitórias, 3 empates, 7 derrotas"
	certas_erradas(a1q3, a2q3, a3q3, a4q3, q3, q4)
	
	p4.textContent = logica[3]
	a1q4.value = "Beatriz, Ítalo, Carlos, André, Daniela"
	a2q4.value = "Ítalo, Carlos, Beatriz, André, Daniela"
	a3q4.value = "Ítalo, André, Carlos, Beatriz, Daniela"
	a4q4.value = "Ítalo, Beatriz, Carlos, Daniela, André"
	certas_erradas(a4q4, a1q4, a2q4, a3q4, q4, q5)
	
	p5.textContent = logica[4]
	a1q5.value = "Rodolfo é o mais velho."
	a2q5.value = "Helena não é a mais nova."
	a3q5.value = "Emily é a mais nova."
	a4q5.value = "Luan é o mais novo."
	certas_erradas(a2q5, a1q5, a3q5, a4q5, q5, fim)
	
})

voltar.addEventListener('click', (e) => {
	window.location.reload()
})