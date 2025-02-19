let listaAmigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo == "" || nomeAmigo == undefined || nomeAmigo == null) {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nomeAmigo);

    limparCampoNome();
    limparAmigoSorteado();
    limparListaAmigos();

    for (let index = 0; index < listaAmigos.length; index++) {
        document.getElementById("listaAmigos").appendChild(document.createElement("li")).textContent = listaAmigos[index];
    }
}

function limparCampoNome() {
    document.getElementById("amigo").value = "";
}

function limparAmigoSorteado() {
    document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
    if (listaAmigos.length <= 0)
        alert("Para sortear um amigo é necessário ter uma lista de amigos.");

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").appendChild(document.createElement("li")).textContent = amigoSorteado;
    limparListaAmigos();
    listaAmigos = [];
}

function limparListaAmigos() {
    document.getElementById("listaAmigos").innerHTML = "";
}