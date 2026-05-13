document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calculadora-imc');
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const resultado = document.getElementById('resultado');
  const botao = document.getElementById('calcular');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Estado de loading no botão
    botao.disabled = true;
    botao.textContent = 'Calculando...';

    // Ler valores e normalizar vírgula para ponto
    const pesoStr = pesoInput.value.trim().replace(',', '.');
    const alturaStr = alturaInput.value.trim().replace(',', '.');
    const peso = parseFloat(pesoStr);
    const altura = parseFloat(alturaStr);

    // Validação das entradas
    if (!pesoStr || !alturaStr || isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
      resultado.classList.remove('visible', 'abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade');
      resultado.innerHTML = '<p class="mensagem-erro">Preencha valores válidos.</p>';
      botao.disabled = false;
      botao.textContent = 'Calcular IMC';
      return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    // Classificação (adultos)
    let classe, texto;
    if (imc < 18.5) {
      classe = 'abaixo-peso';
      texto = 'Abaixo do peso';
    } else if (imc < 25) {
      classe = 'peso-normal';
      texto = 'Peso normal';
    } else if (imc < 30) {
      classe = 'sobrepeso';
      texto = 'Sobrepeso';
    } else {
      classe = 'obesidade';
      texto = 'Obesidade';
    }

    // Remover classes anteriores e aplicar classificação
    resultado.classList.remove('visible', 'abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade');
    resultado.classList.add(classe);

    // Formatar IMC com vírgula (padrão brasileiro)
    const imcFormatado = imc.toFixed(2).replace('.', ',');

    resultado.innerHTML =
      '<span class="imc-value">' + imcFormatado + '</span>' +
      '<p class="classificacao">' + texto + '</p>';

    // Delay para garantir animação em cálculos consecutivos
    setTimeout(function() {
      resultado.classList.add('visible');
    }, 10);

    botao.disabled = false;
    botao.textContent = 'Calcular IMC';
  });
});