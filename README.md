# CâmbioFácil

Pequena landing page para comparar cotações de moedas e calcular conversões a partir de um valor em BRL. Projeto estático feito com HTML, CSS e JavaScript puro — ideal como demo ou ponto de partida para integrar uma API de cotações.

**Funcionalidades**

- Conversão de BRL → várias moedas (USD, EUR, GBP, ARS, CNY, AUD, CHF, KWD).
- Formatação localizada (`pt-BR`) e resultado com atualização acessível (`aria-live="polite"`).
- Layout responsivo com estilos em `style.css`.

**Como usar**

- Abra o arquivo [Cambio_Facil/index.html](Cambio_Facil/index.html) diretamente no navegador.
- Ou sirva localmente (recomendado para testes):

```bash
cd Cambio_Facil
# Python 3
python -m http.server 8000
# Abra http://localhost:8000
```

**Estrutura do projeto**

- [Cambio_Facil/index.html](Cambio_Facil/index.html) — página principal com o formulário de cotação.
- [Cambio_Facil/style.css](Cambio_Facil/style.css) — estilos e layout.
- [Cambio_Facil/script.js](Cambio_Facil/script.js) — lógica de cotação e taxas.

**Notas técnicas**

- IDs relevantes no DOM: `quote-form`, `brl-amount`, `currency-select`, `quote-result`.
- As taxas estão definidas localmente no objeto `rates` dentro de `script.js`. Exemplo:

```js
const rates = {
  USD: 5.22,
  EUR: 5.65,
  GBP: 6.48,
  ARS: 0.0052,
  CNY: 0.71,
  AUD: 3.38,
  CHF: 5.85,
  KWD: 16.98
};
```

- Lógica de conversão: `converted = brl / rate`. O formato usa 4 casas decimais quando o valor convertido é menor que 1, caso contrário 2 casas.

**Personalização**

- Atualize ou adicione moedas editando o objeto `rates` em [Cambio_Facil/script.js](Cambio_Facil/script.js).
- Para alterar aparência, edite [Cambio_Facil/style.css](Cambio_Facil/style.css).

**Contribuição**

Pull requests e sugestões são bem-vindas. Para mudanças rápidas, atualize os arquivos e envie um patch.

**Contato**

contato@cambiofacil.com.br


