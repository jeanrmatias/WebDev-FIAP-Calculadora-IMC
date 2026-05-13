# Calculadora de IMC

Calculadora de Índice de Massa Corporal com tema escuro, desenvolvida com HTML semântico, CSS e JavaScript puro.

## Funcionalidades

- Cálculo do IMC com base no peso (kg) e altura (m)
- Classificação automática para adultos conforme tabela CDC
- Validação de entradas com mensagem de erro
- Animação suave ao exibir o resultado
- Tema escuro com design responsivo
- Acessibilidade com elementos semânticos e ARIA

## Classificações

| IMC | Classificação |
|---|---|
| Menor que 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25,0 a 29,9 | Sobrepeso |
| 30,0 ou mais | Obesidade |

## Tecnologias

- HTML5 (semântico: `<main>`, `<article>`, `<fieldset>`, `<output>`)
- CSS3 (gradientes, flexbox, animações, responsivo)
- JavaScript (manipulação do DOM, cálculo em tempo real)

## Como usar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador
3. Insira peso e altura, clique em "Calcular IMC"

## Estrutura
calculadora-imc/
├── index.html
├── style.css
├── script.js
└── README.md