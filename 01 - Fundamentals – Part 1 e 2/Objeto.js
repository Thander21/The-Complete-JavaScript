const jonas = {
    nome: 'Rahman',
    sobrenome: 'Brussolo',
    amigos: ['michael', 'rahman', 'linus'],
    ano: 1978,
    job: 'empreendedor',
    temCarteira: false,

    calcIdade: function () {
        this.idade = 2022 - this.ano;
        return this.idade;
    },

    getSummary: function () {
        return `${this.nome} tem ${this.calcIdade()} anos de idade em ${this.job} e ele ${this.temCarteira ? 'tem' : 'não tem'} carteira motorista`
    }
}

//console.log (`${jonas.nome} tem ${jonas.amigos.length} amigos e seu melhor amigo é ${jonas.amigos[0]}`);

console.log(jonas.getSummary())