const axios = require('axios')
const sha1 = require('js-sha1')
const fs = require('fs');
const formData = require('form-data')
const FormData = new formData()

const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=6d98bf236be36bea086ea142843275c7d41f6e16'
const submit = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=6d98bf236be36bea086ea142843275c7d41f6e16'

axios.get(url).then(resposta => {
    var Data = resposta.data
    CreateFile(Data)
})

setTimeout(SavePost, 4000)

function SavePost() {
    const Data = JSON.parse(fs.readFileSync('answer.json'))
    const Result = Decodificando(Data.cifrado, Data.numero_casas)

    Data.decifrado = Result
    Data.resumo_criptografico = sha1(Result)

    let obj = Object.assign({file: 'answer'}, Data)

    fs.writeFile("answer.json", JSON.stringify(obj), (err) => {
        if (err) throw err
    })

    setTimeout(() => {

        
    }, 4000)
}

function CreateFile(Data) {
    fs.writeFile("answer.json", JSON.stringify(Data), (err) => {
        if (err) throw err
    })
}

function Codificando(frase, NumeroDeCasas, Original) {
    let ASCII = []
    let Codificado = []
    for (let i = 0; i < frase.length; i++) {
        let valor = frase.charCodeAt(i)
        // 115 = 122 - numero de casas ; valor + numero de casas
        if (valor >= 97 && valor <= (122 - NumeroDeCasas)) ASCII.push(valor + NumeroDeCasas)
        // 116 = 123 - numero de casas ; -19 = 97 - (123- numero de casas)
        else if (valor >= 123 - NumeroDeCasas && valor <= 122) ASCII.push(valor + (97 - (123 - NumeroDeCasas)))

        else ASCII.push(valor)
    }

    for (let i = 0; i < ASCII.length; i++) {
        var letra = String.fromCharCode(ASCII[i])
        Codificado.push(letra)
    }

    if (Codificado.join('') === Original) console.log("Codficação e Decodicação CONCLUIDA!")
}

function Decodificando(Frase, NumeroDeCasas) {
    let ASCII = []
    let Decodificado = []
    for (let i = 0; i < Frase.length; i++) {
        let valor = Frase.charCodeAt(i)
        // 104 = 97 + 7 ; valor - numero de casas
        if (valor >= (97 + NumeroDeCasas) && valor <= 122) ASCII.push(valor - NumeroDeCasas)
        // 103 = 96 + 7 ; 19 = (123-NdC) - 97 
        else if (valor >= 97 && valor <= (96 + NumeroDeCasas)) ASCII.push(valor + (123 - NumeroDeCasas) - 97)

        else ASCII.push(valor)
    }

    for (let i = 0; i < ASCII.length; i++) {
        var letra = String.fromCharCode(ASCII[i])
        Decodificado.push(letra)
    }
    // Codificando(Decodificado.join(''), NumeroDeCasas, Frase)
    return Decodificado.join('');
}