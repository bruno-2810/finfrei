import prompt from 'prompt-sync'
let ler = prompt()

export function deposito (saldo, valor) {
    saldo =+ valor
    return saldo
}

export function saque (saldo, valor) {
    saldo =+ valor
    return saldo
}

export function simulacao (investimento, valorinvestimento, valorjuros, valormeses) {
    investimento = valorinvestimento * ((1 + (valorjuros / 100)) ** valormeses)
    return investimento
}