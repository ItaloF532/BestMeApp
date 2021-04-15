// Emissor de eventos
const EventEmitter = require('events')
const emitter = new EventEmitter()

//FS trabalha com FileSytem, sistema de arquivos
const fs = require('fs')

/* Exeplicando o processo do Logger:
Com o emissor de eventos, podemos identificar eventos emitidos pelo sistema, e a partir disso executar um  processo.
Com a função do FileSystem,  fs.writeFile(), para gravar um arquivo com apoio de uma constante que captura o dia
para o nome do arquivo.*/
emitter.on('log', (message) => {
    const now = new Date()
    const monthFormatter = String(now.getMonth()+1).padStart(2, '0')
    const nowToString = `${now.getDate()}.${monthFormatter}.${now.getFullYear()}`
    const nowFile = nowToString.toString()

    fs.writeFile(`${nowFile}.JSON`, message, err =>{
        if (err) throw err
    })
})


function log(message) {
    emitter.emit('log', message)
    console.log('Gravando no log')
}

/*
A funcao log é exportada e acessada pelo BestMeApp.js emitindo o evento para EventEmitter, que após receber
a menssagem passada pelo, ele irá gravar as informações no log.txt
*/
module.exports = log;