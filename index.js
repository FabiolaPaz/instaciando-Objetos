class Biscoito {
    static quantidade = 0;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        Biscoito.quantidade++
    }

    consultaPreco() {
        return this.preco;
    }
    atualizaNome(novoNome) {
        this.nome = novoNome;
    }

}

const futurinhos = new Biscoito("futurinhos", 2.50)

console.log(futurinhos)

const treloso = new Biscoito("treloso", 1.25)

console.log(treloso)

const oreo = new Biscoito("oreo", 3.50)

console.log(oreo)

futurinhos.atualizaNome("Futurinhos")
treloso.atualizaNome("Treloso")
oreo.atualizaNome("Oreo")

console.log("Nome dos biscoitos atualizados: ")

console.log(futurinhos)
console.log(treloso)
console.log(oreo)
console.log("")
console.log("Quantidade de Biscoitos cadastrados: ")
console.log(Biscoito.quantidade)