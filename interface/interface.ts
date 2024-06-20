interface Humano {
    nome: string
    idade?: number //opcional
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: {nome: string}){
    pessoa.nome = 'joana'
    
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string){
        console.log('ola meu nome e ' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome: 'jonas', idade: 27, altura: 1.75})
pessoa.saudar('bezerra')


//usando classes 
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date =  new Date
    saudar(sobrenome: string){
        console.log('ola meu nome e ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('solo')
console.log(meuCliente.ultimaCompra)

//Iterdface função
interface FuncaoCalculo {
    (a: number, b:number): number
}

let potencia:FuncaoCalculo

potencia = function (base: number, exp:number): number {
    return Array(exp).fill(base).reduce((t, a ) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)