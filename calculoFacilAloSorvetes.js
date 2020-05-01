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
    tipoChocosonho: 'Chocosonhos',
    tipoPaleta: 'Paleta',
    tipoClassico: 'Clássicos',
    tipoPote2L: 'Pote 2l',
    tipoAcai200Ml: 'Açaí 200ml',
    tipoPote200Ml: 'Pote 200ml',
    tipoPote1L: 'Pote 1l',
    tipoPote1LDiet: 'Napolitano Diet',
}

/* CAPTURA DE INPUTS */

const inputsArray = [0]
const inputsArrayBrindes = [0]
const nomesBrindes = ['']
let tipoInput = ''
let quantidadeInput = 0
function capturarInput() {
    tipoInput = document.getElementById('inputTipo').value
    quantidadeInput = document.getElementById('inputQtd').value
    let qtdCombo = Math.floor(quantidadeInput / 6) // A cada 5 compras a sexta sai de graça

    /* CALCULO DO PREÇO */

    // VIVACITY
    if (tipoInput == tipoProdutos.tipoVivacity && quantidadeInput > 5) {
        inputsArray.push((quantidadeInput * precoProdutos.precoVivacity) - (precoProdutos.precoVivacity) * qtdCombo)
        inputsArrayBrindes.push(qtdCombo)
        for (let i = 0; i < qtdCombo; i++) {
            nomesBrindes.push(tipoProdutos.tipoVivacity + '; ')
        }
    } else if (tipoInput == tipoProdutos.tipoVivacity) {
        inputsArray.push(quantidadeInput * precoProdutos.precoVivacity)

        // PREMIUM
    } else if (tipoInput == tipoProdutos.tipoPremium && quantidadeInput > 5) {
        inputsArray.push((quantidadeInput * precoProdutos.precoPremium) - (precoProdutos.precoPremium) * qtdCombo)
        inputsArrayBrindes.push(qtdCombo)
        for (let i = 0; i < qtdCombo; i++) {
            nomesBrindes.push(tipoProdutos.tipoPremium + '; ')
        }
    } else if (tipoInput == tipoProdutos.tipoPremium) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPremium)

        // SUNDAE
    } else if (tipoInput == tipoProdutos.tipoSundae) {
        inputsArray.push(quantidadeInput * precoProdutos.precoSundae)

        // PABLITO
    } else if (tipoInput == tipoProdutos.tipoPablito) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPablito)

        // CHOCOSONHO
    } else if (tipoInput == tipoProdutos.tipoChocosonho && quantidadeInput > 5) {
        inputsArray.push((quantidadeInput * precoProdutos.precoChocosonho) - (precoProdutos.precoChocosonho) * qtdCombo)
        inputsArrayBrindes.push(qtdCombo)
        for (let i = 0; i < qtdCombo; i++) {
            nomesBrindes.push(tipoProdutos.tipoChocosonho + '; ')
        }
    } else if (tipoInput == tipoProdutos.tipoChocosonho) {
        inputsArray.push(quantidadeInput * precoProdutos.precoChocosonho)

        // PALETA
    } else if (tipoInput == tipoProdutos.tipoPaleta) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPaleta)

        // CLASSICO
    } else if (tipoInput == tipoProdutos.tipoClassico && quantidadeInput > 5) {
        inputsArray.push((quantidadeInput * precoProdutos.precoClassico) - (precoProdutos.precoClassico) * qtdCombo)
        inputsArrayBrindes.push(qtdCombo)
        for (let i = 0; i < qtdCombo; i++) {
            nomesBrindes.push(tipoProdutos.tipoClassico + '; ')
        }
    } else if (tipoInput == tipoProdutos.tipoClassico) {
        inputsArray.push(quantidadeInput * precoProdutos.precoClassico)

        // POTE 2L
    } else if (tipoInput == tipoProdutos.tipoPote2L) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote2L)

        // ACAI 200 ML
    } else if (tipoInput == tipoProdutos.tipoAcai200Ml) {
        inputsArray.push(quantidadeInput * precoProdutos.precoAcai200Ml)

        // POTE 200 ML
    } else if (tipoInput == tipoProdutos.tipoPote200Ml) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote200Ml)

        // POTE 1 L
    } else if (tipoInput == tipoProdutos.tipoPote1L) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote1L)

        // POTE DIET 1L
    } else if (tipoInput == tipoProdutos.tipoPote1LDiet) {
        inputsArray.push(quantidadeInput * precoProdutos.precoPote1LDiet)
    }

    /* SOMAR ARRAY DE PREÇO */

    let somarArray = (acumulador, valorAtual) => acumulador + valorAtual
    console.log('R$ ', inputsArray.reduce(somarArray))
    document.getElementById('valorFinal').innerHTML = 'Preço final do pedido: R$ ' + inputsArray.reduce(somarArray)

    /* SOMAR ARRAY DE BRINDES */

    let somarArrayBrindes = (acumulador, valorAtual) => acumulador + valorAtual
    console.log('Brindes: ', inputsArrayBrindes.reduce(somarArrayBrindes))
    document.getElementById('qtdBrindes').innerHTML = 'Quantidade de brindes: ' + inputsArrayBrindes.reduce(somarArrayBrindes)

    /* MOSTRAR ARRAY COM NOMES DOS COMBOS */

    let somarArrayNomes = (acumulador, valorAtual) => acumulador + valorAtual
    console.log('Combos: ', nomesBrindes.reduce(somarArrayNomes))
    document.getElementById('nomesBrindes').innerHTML = 'Combos: ' + nomesBrindes.reduce(somarArrayNomes)
}

/* ESCOLHA DOS SABORES */

/* VIVACITY */

let vivacityAmendoim = []
function quantidadeVivacityAmendoim() {
    vivacityAmendoim.push(1)
    let somarVivacityAmendoim = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityAmendoim').innerHTML = 'Quantidade Vivacity Amendoim: ' + vivacityAmendoim.reduce(somarVivacityAmendoim)
}

let vivacityChocolate = []
function quantidadeVivacityChocolate() {
    vivacityChocolate.push(1)
    let somarVivacityChocolate = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityChocolate').innerHTML = 'Quantidade Vivacity Chocolate: ' + vivacityChocolate.reduce(somarVivacityChocolate)
}

let vivacityMorango = []
function quantidadeVivacityMorango() {
    vivacityMorango.push(1)
    let somarVivacityMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityMorango').innerHTML = 'Quantidade Vivacity Morango: ' + vivacityMorango.reduce(somarVivacityMorango)
}

let vivacityCoco = []
function quantidadeVivacityCoco() {
    vivacityCoco.push(1)
    let somarVivacityCoco = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityCoco').innerHTML = 'Quantidade Vivacity Coco: ' + vivacityCoco.reduce(somarVivacityCoco)
}

let vivacityLimao = []
function quantidadeVivacityLimao() {
    vivacityLimao.push(1)
    let somarVivacityLimao = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityLimao').innerHTML = 'Quantidade Vivacity Limão: ' + vivacityLimao.reduce(somarVivacityLimao)
}

let vivacityUva = []
function quantidadeVivacityUva() {
    vivacityUva.push(1)
    let somarVivacityUva = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityUva').innerHTML = 'Quantidade Vivacity Uva: ' + vivacityUva.reduce(somarVivacityUva)
}

let vivacityGoiaba = []
function quantidadeVivacityGoiaba() {
    vivacityGoiaba.push(1)
    let somarVivacityGoiaba = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityGoiaba').innerHTML = 'Quantidade Vivacity Goiaba: ' + vivacityGoiaba.reduce(somarVivacityGoiaba)
}

let vivacityLeiteCondensado = []
function quantidadeVivacityLeiteCondensado() {
    vivacityLeiteCondensado.push(1)
    let somarVivacityLeiteCondensado = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityLeiteCondensado').innerHTML = 'Quantidade Vivacity Leite Condensado: ' + vivacityLeiteCondensado.reduce(somarVivacityLeiteCondensado)
}

let vivacityMilhoVerde = []
function quantidadeVivacityMilhoVerde() {
    vivacityMilhoVerde.push(1)
    let somarVivacityMilhoVerde = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityMilhoVerde').innerHTML = 'Quantidade Vivacity Milho Verde: ' + vivacityMilhoVerde.reduce(somarVivacityMilhoVerde)
}

let vivacityMaracuja = []
function quantidadeVivacityMaracuja() {
    vivacityMaracuja.push(1)
    let somarVivacityMaracuja = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoVivacityMaracuja').innerHTML = 'Quantidade Vivacity Maracujá: ' + vivacityMaracuja.reduce(somarVivacityMaracuja)
}

/* PREMIUM */

let premiumNapolitano = []
function quantidadePremiumNapolitano() {
    premiumNapolitano.push(1)
    let somarPremiumNapolitano = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPremiumNapolitano').innerHTML = 'Quantidade Premium Napolitano: ' + premiumNapolitano.reduce(somarPremiumNapolitano)
}

let premiumDoceLeite = []
function quantidadePremiumDoceLeite() {
    premiumDoceLeite.push(1)
    let somarPremiumDoceLeite = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPremiumDoceLeite').innerHTML = 'Quantidade Premium Doce de Leite: ' + premiumDoceLeite.reduce(somarPremiumDoceLeite)
}

/* SUNDAE */

let sundaeMorango = []
function quantidadeSundaeMorango() {
    sundaeMorango.push(1)
    let somarSundaeMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoSundaeMorango').innerHTML = 'Quantidade Sundae de Morango: ' + sundaeMorango.reduce(somarSundaeMorango)
}

let sundaeChocolate = []
function quantidadeSundaeChocolate() {
    sundaeChocolate.push(1)
    let somarSundaeChocolate = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoSundaeChocolate').innerHTML = 'Quantidade Sundae de Chocolate: ' + sundaeChocolate.reduce(somarSundaeChocolate)
}

/* PABLITO */

let pablito = []
function quantidadePablito() {
    pablito.push(1)
    let somarPablito = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPablito').innerHTML = 'Quantidade Pablito: ' + pablito.reduce(somarPablito)
}

/* CHOCOSONHOS */

let chocosonhosAmendoky = []
function quantidadeChocosonhosAmendoky() {
    chocosonhosAmendoky.push(1)
    let somarChocosonhosAmendoky = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoChocosonhosAmendoky').innerHTML = 'Quantidade Chocosonhos Amendoky: ' + chocosonhosAmendoky.reduce(somarChocosonhosAmendoky)
}

let chocosonhosBrigadeiro = []
function quantidadeChocosonhosBrigadeiro() {
    chocosonhosBrigadeiro.push(1)
    let somarChocosonhosBrigadeiro = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoChocosonhosBrigadeiro').innerHTML = 'Quantidade Chocosonhos Brigadeiro: ' + chocosonhosBrigadeiro.reduce(somarChocosonhosBrigadeiro)
}

let chocosonhosChococo = []
function quantidadeChocosonhosChococo() {
    chocosonhosChococo.push(1)
    let somarChocosonhosChococo = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoChocosonhosChococo').innerHTML = 'Quantidade Chocosonhos Chococo: ' + chocosonhosChococo.reduce(somarChocosonhosChococo)
}

let chocosonhosSensacao = []
function quantidadeChocosonhosSensacao() {
    chocosonhosSensacao.push(1)
    let somarChocosonhosSensacao = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoChocosonhosSensacao').innerHTML = 'Quantidade Chocosonhos Sensação: ' + chocosonhosSensacao.reduce(somarChocosonhosSensacao)
}

let chocosonhosEsquimoky = []
function quantidadeChocosonhosEsquimoky() {
    chocosonhosEsquimoky.push(1)
    let somarChocosonhosEsquimoky = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoChocosonhosEsquimoky').innerHTML = 'Quantidade Chocosonhos Esquimoky: ' + chocosonhosEsquimoky.reduce(somarChocosonhosEsquimoky)
}

/* PALETA */

let paletaMorango = []
function quantidadePaletaMorango() {
    paletaMorango.push(1)
    let somarPaletaMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPaletaMorango').innerHTML = 'Quantidade Paletas Morango c/ Leite Condensado: ' + paletaMorango.reduce(somarPaletaMorango)
}

let paletaBaunilhaCapuccino = []
function quantidadePaletaBaunilhaCapuccino() {
    paletaBaunilhaCapuccino.push(1)
    let somarPaletaBaunilhaCapuccino = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPaletaBaunilhaCapuccino').innerHTML = 'Quantidade Paletas Baunilha c/ Capuccino: ' + paletaBaunilhaCapuccino.reduce(somarPaletaBaunilhaCapuccino)
}

let paletaChocolateTrufado = []
function quantidadePaletaChocolateTrufado() {
    paletaChocolateTrufado.push(1)
    let somarPaletaChocolateTrufado = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPaletaChocolateTrufado').innerHTML = 'Quantidade Paletas Chocolate Trufado: ' + paletaChocolateTrufado.reduce(somarPaletaChocolateTrufado)
}

let paletaMaracujaLeiteCondensado = []
function quantidadePaletaMaracujaLeiteCondensado() {
    paletaMaracujaLeiteCondensado.push(1)
    let somarPaletaMaracujaLeiteCondensado = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPaletaMaracujaLeiteCondensado').innerHTML = 'Quantidade Paletas Maracujá c/ Leite Condensado: ' + paletaMaracujaLeiteCondensado.reduce(somarPaletaMaracujaLeiteCondensado)
}

/* CLÁSSICOS */

let classicosCapuccinoBelga = []
function quantidadeClassicosCapuccinoBelga() {
    classicosCapuccinoBelga.push(1)
    let somarClassicosCapuccinoBelga = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosCapuccinoBelga').innerHTML = 'Quantidade Clássicos Capuccino com Chocolate Belga: ' + classicosCapuccinoBelga.reduce(somarClassicosCapuccinoBelga)
}

let classicosMousseMaracuja = []
function quantidadeClassicosMousseMaracuja() {
    classicosMousseMaracuja.push(1)
    let somarClassicosMousseMaracuja = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosMousseMaracuja').innerHTML = 'Quantidade Clássicos Mousse de Maracujá: ' + classicosMousseMaracuja.reduce(somarClassicosMousseMaracuja)
}

let classicosCastanha = []
function quantidadeClassicosCastanha() {
    classicosCastanha.push(1)
    let somarClassicosCastanha = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosCastanha').innerHTML = 'Quantidade Clássicos Baunilha c/ Chocolate Belga e Castanha de Cajú: ' + classicosCastanha.reduce(somarClassicosCastanha)
}

let classicosTortaAlema = []
function quantidadeClassicosTortaAlema() {
    classicosTortaAlema.push(1)
    let somarClassicosTortaAlema = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosTortaAlema').innerHTML = 'Quantidade Clássicos Torta Alemã: ' + classicosTortaAlema.reduce(somarClassicosTortaAlema)
}

let classicosTortaLimao = []
function quantidadeClassicosTortaLimao() {
    classicosTortaLimao.push(1)
    let somarClassicosTortaLimao = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosTortaLimao').innerHTML = 'Quantidade Clássicos Torta Limão: ' + classicosTortaLimao.reduce(somarClassicosTortaLimao)
}

let classicosBaunilhaBelga = []
function quantidadeClassicosBaunilhaBelga() {
    classicosBaunilhaBelga.push(1)
    let somarClassicosBaunilhaBelga = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoClassicosBaunilhaBelga').innerHTML = 'Quantidade Clássicos Baunilha com Chocolate Belga: ' + classicosBaunilhaBelga.reduce(somarClassicosBaunilhaBelga)
}

/* POTE 2L */

let pote2lFlocos = []
function quantidadePote2lFlocos() {
    pote2lFlocos.push(1)
    let somarPote2lFlocos = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote2lFlocos').innerHTML = 'Quantidade Pote de 2l de Flocos: ' + pote2lFlocos.reduce(somarPote2lFlocos)
}

let pote2lChocolate = []
function quantidadePote2lChocolate() {
    pote2lChocolate.push(1)
    let somarPote2lChocolate = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote2lChocolate').innerHTML = 'Quantidade Pote de 2l de Chocolate: ' + pote2lChocolate.reduce(somarPote2lChocolate)
}

let pote2lNapolitano = []
function quantidadePote2lNapolitano() {
    pote2lNapolitano.push(1)
    let somarPote2lNapolitano = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote2lNapolitano').innerHTML = 'Quantidade Pote de 2l de Napolitano: ' + pote2lNapolitano.reduce(somarPote2lNapolitano)
}

let pote2lPassasAoRum = []
function quantidadePote2lPassasAoRum() {
    pote2lPassasAoRum.push(1)
    let somarPote2lPassasAoRum = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote2lPassasAoRum').innerHTML = 'Quantidade Pote de 2l de Passas ao Rum: ' + pote2lPassasAoRum.reduce(somarPote2lPassasAoRum)
}

let pote2lMorango = []
function quantidadePote2lMorango() {
    pote2lMorango.push(1)
    let somarPote2lMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote2lMorango').innerHTML = 'Quantidade Pote de 2l de Morango: ' + pote2lMorango.reduce(somarPote2lMorango)
}

/* AÇAÍ */

let acaiMorango = []
function quantidadeAcaiMorango() {
    acaiMorango.push(1)
    let somarAcaiMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoAcaiMorango').innerHTML = 'Quantidade Açaí de Morango: ' + acaiMorango.reduce(somarAcaiMorango)
}

let acaiBanana = []
function quantidadeAcaiBanana() {
    acaiBanana.push(1)
    let somarAcaiBanana = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoAcaiBanana').innerHTML = 'Quantidade Açaí de Banana: ' + acaiBanana.reduce(somarAcaiBanana)
}

let acaiNatural = []
function quantidadeAcaiNatural() {
    acaiNatural.push(1)
    let somarAcaiNatural = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoAcaiNatural').innerHTML = 'Quantidade Açaí Natural: ' + acaiNatural.reduce(somarAcaiNatural)
}

/* POTE 200ML */

let pote200mlChocolate = []
function quantidadePote200mlChocolate() {
    pote200mlChocolate.push(1)
    let somarPote200mlChocolate = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote200mlChocolate').innerHTML = 'Quantidade Pote 200ml Chocolate: ' + pote200mlChocolate.reduce(somarPote200mlChocolate)
}

let pote200mlFlocos = []
function quantidadePote200mlFlocos() {
    pote200mlFlocos.push(1)
    let somarPote200mlFlocos = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote200mlFlocos').innerHTML = 'Quantidade Pote 200ml Flocos: ' + pote200mlFlocos.reduce(somarPote200mlFlocos)
}

let pote200mlNapolitano = []
function quantidadePote200mlNapolitano() {
    pote200mlNapolitano.push(1)
    let somarPote200mlNapolitano = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote200mlNapolitano').innerHTML = 'Quantidade Pote 200ml Napolitano: ' + pote200mlNapolitano.reduce(somarPote200mlNapolitano)
}

let pote200mlPassasAoRum = []
function quantidadePote200mlPassasAoRum() {
    pote200mlPassasAoRum.push(1)
    let somarPote200mlPassasAoRum = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote200mlPassasAoRum').innerHTML = 'Quantidade Pote 200ml de Passas ao Rum: ' + pote200mlPassasAoRum.reduce(somarPote200mlPassasAoRum)
}

let pote200mlMorango= []
function quantidadePote200mlMorango() {
    pote200mlMorango.push(1)
    let somarPote200mlMorango = (acumulador, valorAtual) => acumulador + valorAtual
    document.getElementById('resultadoPote200mlMorango').innerHTML = 'Quantidade Pote 200ml de Morango: ' + pote200mlMorango.reduce(somarPote200mlMorango)
}

let pote200mlMaracuja= []
function quantidadePote200mlMaracuja() {
    pote200mlMaracuja.push(1)
    let somarPote200mlMaracuja = (acumulador, valorAtual) => acumulador + valorAtual
    let precoFinal200mlMaracuja = pote200mlMaracuja.reduce(somarPote200mlMaracuja) * precoProdutos.precoPote200Ml
    document.getElementById('resultadoPote200mlMaracuja').innerHTML = 'Quantidade Pote 200ml de Maracujá (' + pote200mlMaracuja.reduce(somarPote200mlMaracuja) + ' x ' + 'valor unitário de R$ ' + precoProdutos.precoPote200Ml + ') = ' + ' R$ ' + precoFinal200mlMaracuja
}

/* POTE 1L */

let pote1lMousseMaracuja= []
function quantidadePote1lMousseMaracuja() {
    pote1lMousseMaracuja.push(1)
    let somarPote1lMousseMaracuja = (acumulador, valorAtual) => acumulador + valorAtual
    let precoFinalMousseMaracuja = pote1lMousseMaracuja.reduce(somarPote1lMousseMaracuja) * precoProdutos.precoPote1L
    document.getElementById('resultadoPote1lMousseMaracuja').innerHTML = 'Quantidade Pote 1l Mousse de Maracujá (' + pote1lMousseMaracuja.reduce(somarPote1lMousseMaracuja) + ' x ' + 'valor unitário de R$ ' + precoProdutos.precoPote1L + ') = ' + ' R$ ' + precoFinalMousseMaracuja
}

let pote1lGregoMorango= []
function quantidadePote1lGregoMorango() {
    pote1lGregoMorango.push(1)
    let somarPote1lGregoMorango = (acumulador, valorAtual) => acumulador + valorAtual
    let precoFinalGregoMorango = pote1lGregoMorango.reduce(somarPote1lGregoMorango) * precoProdutos.precoPote1L
    document.getElementById('resultadoPote1lGregoMorango').innerHTML = 'Quantidade Pote 1l Grego de Morango (' + pote1lGregoMorango.reduce(somarPote1lGregoMorango) + ' x ' + 'valor unitário de R$ ' + precoProdutos.precoPote1L + ') = ' + ' R$ ' + precoFinalGregoMorango
}

let pote1lChocolateTrufado= []
function quantidadePote1lChocolateTrufado() {
    pote1lChocolateTrufado.push(1)
    let somarPote1lChocolateTrufado = (acumulador, valorAtual) => acumulador + valorAtual
    let precoFinalChocolateTrufado = pote1lChocolateTrufado.reduce(somarPote1lChocolateTrufado) * precoProdutos.precoPote1L
    document.getElementById('resultadoPote1lChocolateTrufado').innerHTML = 'Quantidade Pote 1l Chocolate Trufado (' + pote1lChocolateTrufado.reduce(somarPote1lChocolateTrufado) + ' x ' + 'valor unitário de R$ ' + precoProdutos.precoPote1L + ') = ' + ' R$ ' + precoFinalChocolateTrufado
}

/* POTE DIET */

let pote1lNapolitanoDiet= []
function quantidadePote1lNapolitanoDiet() {
    pote1lNapolitanoDiet.push(1)
    let somarPote1lNapolitanoDiet = (acumulador, valorAtual) => acumulador + valorAtual
    let precoFinalDiet = pote1lNapolitanoDiet.reduce(somarPote1lNapolitanoDiet) * precoProdutos.precoPote1LDiet
    document.getElementById('resultadoPote1lNapolitanoDiet').innerHTML = 'Quantidade Pote 1l Napolitano Diet (' + pote1lNapolitanoDiet.reduce(somarPote1lNapolitanoDiet) + ' x ' + 'valor unitário de R$ ' + precoProdutos.precoPote1LDiet + ') = ' + ' R$ ' + precoFinalDiet
}