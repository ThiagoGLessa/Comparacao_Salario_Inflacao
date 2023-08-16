import input from "readline-sync";

var salariosMinimos = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

var historicoInflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

const retornAno = (texto, item) => `${texto.padEnd(30, ".")}${item.ano}`;
const retornaSalario = (texto, item) => `${texto.padEnd(30, ".")}R$ ${item.salario.toFixed(2).replace(".",",")}`;
const retornaIpca = (texto, item) => `${texto.padEnd(30, ".")}${item.ipca.toFixed(2).replace(".",",")}%`;
const retornaCrescimentoSalario = (texto, valor) => `${texto.padEnd(30, ".")}${valor}`;

var opcao;

const tamanhoArray = salariosMinimos.length;

const textoAno = "Ano: ";
const textoSalario = "Salário mínimo: ";
const textoIpca = "Inflação IPCA: ";
const textoCrescimentoSalarial = "Crescimento Salarial: "

do {
    console.log("\nEscolha uma das alternativas:\n\n1 - Listar os salários mínimos de 2010 à 2020\n2 - Listar o índice IPCA de 2010 à 2020\n3 - Comparação entre o percentual de aumento salarial e o IPCA\n4 - Fianlizar o programa\n");
    opcao = input.question("Informe a opção desejada: ");

    switch (Number(opcao)) {
        case 1:
            for (const item of salariosMinimos) {
                console.log("\n")

                console.log(retornAno(textoAno, item));
                console.log(retornaSalario(textoSalario, item));
            }
            break;
            
        case 2:
            for (const item of historicoInflacao) {
                console.log("\n");

                console.log(retornAno(textoAno, item));
                console.log(retornaIpca(textoIpca, item));
            }
            break;
        
        case 3:
            let crescimentoFormatado = "-";

            for(let i = 0; i < tamanhoArray; i++){
                console.log("\n");

                if (i > 0) {
                    const salarioAnterior = salariosMinimos[i - 1].salario;
                    const diferenca = salariosMinimos[i].salario - salarioAnterior;
                    const valor = (diferenca / salarioAnterior) * 100;

                    crescimentoFormatado = `${valor.toFixed(2).replace(".",",")}%`;
                }

                console.log(retornAno(textoAno, salariosMinimos[i]));
                console.log(retornaSalario(textoSalario, salariosMinimos[i]));
                console.log(retornaCrescimentoSalario(textoCrescimentoSalarial, crescimentoFormatado));
                console.log(retornaIpca(textoIpca, historicoInflacao[i]));
            }
            break;
            
        case 4:
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.log("\nOpção inválida, tente novamente!");
    }
} while (opcao != 4);