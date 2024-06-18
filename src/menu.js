import prompt from 'prompt-sync'
let ler = prompt()

export function escolha () {
    console.log(`
    Escolha entre as opções:
    1. Depositar
    2. Sacar
    3. Exibir saldo
    4. Simular investimento
    5. Encerrar
    `);
}

