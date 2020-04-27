/* DECLARAÇÃO DOS PREÇOS DOS PRODUTOS COMO OBJETO */

const precoProdutos = {
    precoVivacity: 3,
    precoPremium: 3.5,
    precoSundae: 5.5,
    precoPablito: 5,
    precoChocosonho: 4,
    precoPaleta: 8,
    precoClassico: 7,
    precoPote2L: 27,
    precoAcai200Ml: 5.5,
    precoPote200Ml: 5,
    precoPote1L: 23,
    precoPote1LDiet: 32,
}

/* DECLARAÇÃO DOS TIPOS DE PRODUTOS */

const tipoProdutos = {
    tipoVivacity: 'Vivacity',
    tipoPremium: 'Premium',
    tipoSundae: 'Sundae',
    tipoPablito: 'Pablito',
    tipoChocosonho: 'Chocosonho',
    tipoPaleta: 'Paleta',
    tipoClassico: 'Classico',
    tipoPote2L: '2l',
    tipoAcai200Ml: 'Acai',
    tipoPote200Ml: '200ml',
    tipoPote1L: '1l',
    tipoPote1LDiet: 'Diet',
}

/* CAPTURA DE INPUTS */
const inputsArray = []
let tipoInput = ''
let quantidadeInput = 0
function capturarInput() {
    tipoInput = document.getElementById('inputTipo').value
    quantidadeInput = document.getElementById('inputQtd').value

    /* CALCULO DO PREÇO */

    if (tipoInput == tipoProdutos.tipoVivacity) {
        inputsArray.push(quantidadeInput * precoProdutos.precoVivacity)
    } else if (tipoInput == tipoProdutos.tipoPremium) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPremium)
    } else if (tipoInput == tipoProdutos.tipoSundae) {
        inputsArray.push(quantidadeInput * precoProdutos.precoSundae)
    } else if (tipoInput == tipoProdutos.tipoPablito) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPablito)
    } else if (tipoInput == tipoProdutos.tipoChocosonho) {
        inputsArray.push(quantidadeInput * precoProdutos.precoChocosonho)
    } else if (tipoInput == tipoProdutos.tipoPaleta) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPaleta)
    } else if (tipoInput == tipoProdutos.tipoClassico) {
        inputsArray.push(quantidadeInput * precoProdutos.precoClassico)
    } else if (tipoInput == tipoProdutos.tipoPote2L) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote2L)
    } else if (tipoInput == tipoProdutos.tipoAcai200Ml) {
        inputsArray.push(quantidadeInput * precoProdutos.precoAcai200Ml)
    } else if (tipoInput == tipoProdutos.tipoPote200Ml) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote200Ml)
    } else if (tipoInput == tipoProdutos.tipoPote1L) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote1L)
    } else if (tipoInput == tipoProdutos.tipoPote1LDiet) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote1LDiet)
    }
    let somarArray = (acumulador, valorAtual) => acumulador + valorAtual
    console.log('R$ ', inputsArray.reduce(somarArray))
    document.getElementById('valorFinal').innerHTML = inputsArray.reduce(somarArray)
}