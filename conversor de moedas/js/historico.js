document.addEventListener('DOMContentLoaded', function() {
    carregarHistorico();
    document.getElementById('limparHistorico').addEventListener('click', limparHistorico);
});

function carregarHistorico() {
    let historico = JSON.parse(localStorage.getItem('historicoConversoes')) || [];
    let listaHistorico = document.getElementById('listaHistorico');
    listaHistorico.innerHTML = '';
    historico.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.origem} para ${item.destino} - ${item.resultado}`;
        listaHistorico.appendChild(li);
    });
}

function limparHistorico() {
    localStorage.removeItem('historicoConversoes');
    carregarHistorico();
}
