import prompt from 'prompt-sync'
let ler = prompt()

export function bemvindo () {
    console.log(`
██████╗ ███████╗███╗   ███╗    ██╗   ██╗██╗███╗   ██╗██████╗  ██████╗      █████╗  ██████╗ 
██╔══██╗██╔════╝████╗ ████║    ██║   ██║██║████╗  ██║██╔══██╗██╔═══██╗    ██╔══██╗██╔═══██╗
██████╔╝█████╗  ██╔████╔██║    ██║   ██║██║██╔██╗ ██║██║  ██║██║   ██║    ███████║██║   ██║
██╔══██╗██╔══╝  ██║╚██╔╝██║    ╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██║   ██║    ██╔══██║██║   ██║
██████╔╝███████╗██║ ╚═╝ ██║     ╚████╔╝ ██║██║ ╚████║██████╔╝╚██████╔╝    ██║  ██║╚██████╔╝
╚═════╝ ╚══════╝╚═╝     ╚═╝      ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝     ╚═╝  ╚═╝ ╚═════╝ 
                                                                                                                                                                                
    ███████╗██╗███╗   ██╗███████╗██████╗ ███████╗██╗    ██╗
    ██╔════╝██║████╗  ██║██╔════╝██╔══██╗██╔════╝██║    ██║
    █████╗  ██║██╔██╗ ██║█████╗  ██████╔╝█████╗  ██║    ██║
    ██╔══╝  ██║██║╚██╗██║██╔══╝  ██╔══██╗██╔══╝  ██║    ╚═╝
    ██║     ██║██║ ╚████║██║     ██║  ██║███████╗██║    ██╗
    ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝    ╚═╝                                                
`);
}

export function informedeposito () {
    console.log('Informe o valor do depósito:');
}

export function informesaque () {
    console.log('Informe o valor do saque:');
}

export function encerrar () {
    console.log('Encerrando programa...');
}

export function qtdjuros () {
    console.log('Quantos % o investimenro deve gerar de lucro mensalmente?');
}

export function qtdmeses () {
    console.log('Ficará guardado por quantos meses?');
}

export function qtdvalor () {
    console.log('Qual o valor investido?');
}