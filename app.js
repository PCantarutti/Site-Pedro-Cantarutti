let nome = prompt('Digite seu nome:')
let idade = parseInt(prompt('Digite sua idade:'))
let linguagem = prompt('Qual linguagem de programação está estudando:')
let pergunta = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`))


console.log(nome, idade, linguagem)

if (pergunta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso")
}
if (pergunta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}