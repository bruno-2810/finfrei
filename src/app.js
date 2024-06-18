import prompt from 'prompt-sync'
import { escolha } from './menu.js'
import { deposito, saque, simulacao } from './financeiro.js'
import { bemvindo, informedeposito, informesaque, encerrar, qtdjuros, qtdmeses, qtdvalor } from './exibicao.js'
let ler = prompt()
let esc = 0
let saldo = 0
let valor = 0
let valorjuros = 0
let valormeses = 0
let valorinvestimento = 0
let investimento = 0


bemvindo()

for (let cont = 0; cont < 1000; cont ++) {

    escolha()
    esc = Number(ler())

    if (esc == 1) {
        informedeposito()
        valor = Number(ler())
        while (valor <= 0) {
            informedeposito()
            valor = Number(ler())
        }
        if (valor >= 1) {
            saldo = deposito (saldo, valor) + saldo
            console.log(`Saldo atual: R$${saldo}`);
        }
        else if (valor = 'c'){
            valor = 0
        }
    }

    else if (esc == 2) {
        informesaque()
        valor = Number(ler())
        while (valor <= 0) {
            informesaque()
            valor = Number(ler())
        }
        if (valor >= 1) {
            saldo = saldo - saque (saldo, valor)
            console.log(`Saldo atual: R$${saldo}`);
        }
        else if (valor = 'c'){
            valor = 0
        }
    }

    else if (esc == 3) {
        console.log(`Seu saldo é: R$${saldo}`);
    }

    else if (esc == 4) {
        qtdjuros()
        valorjuros = Number(ler())
        qtdmeses()
        valormeses = Number(ler())
        qtdvalor()
        valorinvestimento = Number(ler())
        investimento = simulacao(investimento, valorinvestimento, valorjuros, valormeses)
        console.log(`O investimento renderia R$${investimento.toFixed(2)}`);
    }

    else if (esc == 5) {
        encerrar()
        break
    }
}
