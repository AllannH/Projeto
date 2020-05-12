const frase = "a ligeira raposa marrom saltou sobre o cachorro cansado"
const frase2 = "d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr"

const token = "6d98bf236be36bea086ea142843275c7d41f6e16"



function Codificando(frase) {
    let ASCII = []
    let Codificado = []
    for (let i = 0; i < frase.length; i++) {
        let valor = frase.charCodeAt(i)

        if (valor >= 97 && valor <= 119) ASCII.push(valor + 3)
        
        else if (valor == 120 || valor == 121 || valor == 122) ASCII.push(valor - 23)
        
        else ASCII.push(valor) 
    }

    for (let i = 0; i < ASCII.length; i++) {
        var letra = String.fromCharCode(ASCII[i])
        Codificado.push(letra)
    }

    console.log(Codificado.join(''))
}

function Decodficando(frase) {
    let ASCII = []
    let Decodificado = []
    for (let i = 0; i < frase.length; i++) {
        let valor = frase.charCodeAt(i)

        if (valor >= 100 && valor <= 122) ASCII.push(valor - 3)

        else if (valor == 97 || valor == 98 || valor == 99) ASCII.push(valor + 23)
        
        else ASCII.push(valor)
    }

    for (let i = 0; i < ASCII.length; i++) {
        var letra = String.fromCharCode(ASCII[i])
        Decodificado.push(letra)
    }

    console.log(Decodificado.join(''))
}
