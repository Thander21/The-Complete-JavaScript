const account = 275
const tax20 = account * 20 / 100
const tax15 = account * 15 / 100

console.log(`Valor da conta R$${account}
Valor do Imposto ${account >= 50 && account <= 300 ?
        "15% R$" + tax15 +
        "\nTotal da conta R$" + (account + tax15) :
        "20% R$" + tax20 +
        "\nTotal da conta R$" + (account + tax20)}`)