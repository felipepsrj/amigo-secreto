let amigos = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    //pega o array antigo e transforma em um novo com nomes em minusculas
    let listaEmMinuscula = amigos.map(l => l.toLowerCase());
    //transforma o nome inserido em minusculo
    let nomeMinusculo = amigo.value.toLowerCase();
    
    //verifica se o nome está vazio
    if (amigo.value == '') {
        alert('Informe o nome do amigo.');
        return;
    }

    //verifica se o nome já está incluido
    if (listaEmMinuscula.includes(nomeMinusculo)) {
        alert('Nome já adicionado.');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    //insere o nome em uma lista
    amigos.push(amigo.value);
    
    //se a lista estiver vazia, insere o nome sem virgula
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else { // se já possuir elemento na lista, insere o novo com virgula
        lista.textContent += `, ${amigo.value}`;
    }

    //limpa campo input
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;    
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';    
        }
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
