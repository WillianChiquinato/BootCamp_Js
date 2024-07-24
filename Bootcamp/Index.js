let NomeJogador = "Robert";
let QuantidadeXP = 9500;

const mensagem = "Seu rank é: "

if (QuantidadeXP <= 1000) 
{
    console.log(mensagem + "Ferro");
}
else if (QuantidadeXP >= 1001 && QuantidadeXP <= 2000) 
{
    console.log(mensagem + "Bronze");
}
else if (QuantidadeXP >= 2001 && QuantidadeXP <= 5000) 
{
    console.log(mensagem + "Prata");
}
else if (QuantidadeXP >= 5001 && QuantidadeXP <= 7000) 
{
    console.log(mensagem + "Ouro");
}
else if (QuantidadeXP >= 7001 && QuantidadeXP <= 8000) 
{
    console.log(mensagem + "Platina");
}
else if (QuantidadeXP >= 8001 && QuantidadeXP <= 9000) 
{
    console.log(mensagem + "Ascendente");
}
else if (QuantidadeXP >= 9001 && QuantidadeXP <= 10000) 
{
    console.log(mensagem + "Imortal");
}
else
{
    console.log(mensagem + "Radiante");
}