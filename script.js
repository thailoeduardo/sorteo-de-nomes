const elfos = [
	'Losuyborn',
	'Duxior',
	'Amos',
	'Mianborn',
	'Reor'
];

const orcs = [
	'Nagvuigu',
	'Soh',
	'Urimu',
	'Xapen',
	'Malleion'
];

const anoes = [
	'Tewegrim',
	'Ovrim',
	'Barrim',
	'Dali',
	'Elal'
];

const gerar_numero = (valor_maximo, valor_minimo) =>
	Math.floor(Math.random() * (valor_maximo - valor_minimo + 0)) + valor_minimo;

const get_nome = (lista_nomes) =>
	lista_nomes[gerar_numero(0, lista_nomes.length - 1)];

// nome sorteado
console.log( get_nome(orcs) );