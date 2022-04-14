const prompt = require('prompt-sync')();
let respostas = 0;

console.clear
console.log(`Um Guerreiro que Havia Morrido em Batalha, Chamado Link,
Precisaria Voltar do Inferno Para Concluir Sua Vingança Contra Aquele que o Matou.
Mas Para Isso, Ele Precisa Realizar a Missão de Coletar 5 Jóias que São os Amuletos
Para Ele Poder Sair do Inferno`);
console.log('Link Pega uma Espada Que Estava Ao Seu Lado e Parte pra Sua Missão.');

console.log();
console.log();

console.log('Link conseguiu pegar a Primeira Jóia que Estava com o Demônio Guardião do Inferno?');

pergunta = prompt('sim ou não?')
console.clear();

do {
    if (pergunta !== "nao" && pergunta !== "sim") {
      pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
      console.clear();
    }
  } while (pergunta !== "nao" && pergunta !== "sim");
  
  if (pergunta === "sim") {
    respostas++;
  }

console.log();

console.log('Link Pegou a Segunda Jóia que estava no colar de uma Alma Perdida?');

pergunta = prompt('sim ou não?');
console.clear();

do {
    if (pergunta !== "nao" && pergunta !== "sim") {
      pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
      console.clear();
    }
  } while (pergunta !== "nao" && pergunta !== "sim");
  
  if (pergunta === "sim") {
    respostas++;
  }

console.log();

console.log('Link Conseguiu a Terceira Jóia que Estava na Sla de Tortura?');

pergunta = prompt('sim ou não?');
console.clear();

do {
    if (pergunta !== "nao" && pergunta !== "sim") {
      pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
      console.clear();
    }
  } while (pergunta !== "nao" && pergunta !== "sim");
  
  if (pergunta === "sim") {
    respostas++;
  }

console.log('Link Pegou a Quarta Jóia que Estava no Desfiladeiro de Larvas?');

pergunta = prompt('sim ou não?');
console.clear();

do {
    if (pergunta !== "nao" && pergunta !== "sim") {
      pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
      console.clear();
    }
  } while (pergunta !== "nao" && pergunta !== "sim");
  
  if (pergunta === "sim") {
    respostas++;
  }

console.log('Link Conseguiu a Quinta Jóia Que EStava na Escadaria para a Saída do Inferno?');

pergunta = prompt('sim ou não?');
console.clear();

do {
    if (pergunta !== "nao" && pergunta !== "sim") {
      pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
      console.clear();
    }
  } while (pergunta !== "nao" && pergunta !== "sim");
  
  if (pergunta === "sim") {
    respostas++;
  }


  console.log('Nosso Guerreiro Completou Enfrentou Vários Desafios em Busca de Vingança: '
  );
  
  console.clear();


  if (respostas === 5) {
    console.log('Link Concluiu Seu Objetivo,Completando Assim sua Vingança e Sabendo que o Seu Carrasco Agora Sofreria Tudo o que Ele Sofreu');
  } else if (respostas === 4) {
      console.log('Link Conseguiu Escapar do Inferno, E Ter Sua Vingança,Mas Vai Ser Sempre Atormentado Pelo Espirito daquele que Ele Matou.');
  }else if (respostas === 3) {
      console.log(`Mesmo Lutando e Usando Todas as Suas Artimanhas Link Conseguiu Sair do Inferno,
      Mas Não Conseguiu Concluir Sua Vingança.
      Sendo Assim Condenado a Vagar Pela Terra Como um Espirito Vingativo.`);
  }else if (respostas === 2 || respostas ===1) {
      console.log(`Link fez de Tudo pra Sair e Concluir Sua Vingança,
      Mas Lutando Contra Todos os Obstáculos Você Percebeu que Não Valia a Pena se Vingar e Assim Buscou Redenção.
      Continua Morto,Mas Agora em Um Lugar Melhor`);
  }else if (respostas === 0) {
      console.log(`Link Não Estava Preparado para Lutar e Conseguir as Jóias que lhe Tirassem de Onde Ele Estava.
      Assim, Tendo Que Viver num Mundo de Torturas Físicas e PSicologica, Por Toda Eternidade.`)
  }


