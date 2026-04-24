/* script.js - lógica de cotação simples */
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('quote-form');
	const amountInput = document.getElementById('brl-amount');
	const currencySelect = document.getElementById('currency-select');
	const resultDiv = document.getElementById('quote-result');

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

	function formatBRL(value) {
		return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const brl = parseFloat(amountInput.value);
		const code = currencySelect.value;

		if (isNaN(brl) || brl <= 0) {
			resultDiv.textContent = 'Por favor insira um valor válido em BRL.';
			resultDiv.classList.add('error');
			return;
		}

		const rate = rates[code];
		if (!rate) {
			resultDiv.textContent = 'Cotação não disponível para a moeda selecionada.';
			return;
		}

		const converted = brl / rate;
		const decimals = converted < 1 ? 4 : 2;
		const convertedFormatted = converted.toLocaleString('pt-BR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + ' ' + code;

		resultDiv.innerHTML = `<div class="result-line"><strong>${formatBRL(brl)}</strong> → <strong>${convertedFormatted}</strong></div><div class="small">Cotação: R$ ${rate}</div>`;
		resultDiv.classList.remove('error');
	});
});

