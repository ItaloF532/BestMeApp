//Requisição da função log para a emissão de eventos
const log = require('./logger')

//Array com as perguntas desejadas
const questions = [
    "Que dia é hoje?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que podera fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

/*Explicando a Arrow Function utilziada:
Arrow function, utilizando o process.stdout.write
para apresentar as mensagens do array questions ao utilizador, no caso eu.
O parametro index é iniciado com 0, devido ao array começar no index(posição) 0
*/

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " >")
}

//Chamando a função
ask()

const answers = []
/*Explicando o uso do process.stdin.on() :
Com o process.stdin.on() é caputarado o data (Mensagem escrita no terminal).
Toda vez que houver um data será ececutada um arrow function.
Está arrow function atribui ao array answers, o valor data tratando para seja apenas Strings e sem espaços desnecessários.
E enquanto houver perguntas a serem respondidas a função adciona novamente a função "ask" para exibirr a proxima pergunta.

No final é as respostas são armazenas em um array, e acionada a função log para grava-las no log.txt
A descrição da função log se encontra em logger.js
Utilizei o setInterval, para que a função log pudesse ser acionada e executa e posteriormente o processo seja encerrado.
*/
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else{
        const message = {
            m1: `Dia ${answers[0]}`,
            m2: `O que aprendi no dia: ${answers[1]}`,
            m3: `O que me aborreceu e o que posso fazer para melhorar: ${answers[2]}`,
            m4: `Felicidade do dia: ${answers[3]}`,
            m5: `Ajudei ${answers[4]} pessoas`,
        } 
        log(`\n ${JSON.stringify(message)}`)
        setInterval(()=>{process.exit()},3000)
    }
})

    
