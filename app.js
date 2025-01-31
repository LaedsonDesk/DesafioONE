let amigos = [];

// Função para adicionar amigos na lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        exibirListaAmigos();
    }
    else {
        return alert('Por favor, insira um nome válido.');
    }
}

// Função para exibir a lista de amigos
function exibirListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos dois amigos para sortear!');
        return;
    }

    // Embaralha os amigos
    const amigosEmbaralhados = [...amigos];
    const amigoSorteado = amigosEmbaralhados[Math.floor(Math.random() * amigosEmbaralhados.length)];

    // Exibe o resultado (apenas o amigo secreto sorteado)
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior
    const li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
    resultado.appendChild(li);
}

