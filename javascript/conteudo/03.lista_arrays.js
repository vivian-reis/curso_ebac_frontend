let listaDeMaterias = ['HTML', 'CSS', 'JavaScript']

console.log(listaDeMaterias.length)
/*
O comando length serve para contar a quantidade de ítens dentro da lista.
*/

listaDeMaterias.splice(1,1)


console.log(listaDeMaterias)


listaDeMaterias.push('CSS')
/*
O comando push serve para incluir um ítem na lista.
*/

console.log(listaDeMaterias)


listaDeMaterias.splice(1,2)
/* O comando splice faz a remoção de elementos dentro da variável.
O primeiro número entre parênteses é referente ao posicionamento do elemento.
Já o segundo número determina a quantidade de elementos a serem excluídos.
*/
console.log(listaDeMaterias)
