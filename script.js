let items = [];

function atualizarLista() {
    let lista_produtos = document.querySelector('.lista_produtos');
    let soma = 0;
    lista_produtos.innerHTML = '';

    items.forEach(function (val, indice) {
        soma += parseFloat(val.preco);
        lista_produtos.innerHTML += `
            <div class="lista_produtos_single">
                <h3>${val.nome}</h3>
                <input type="button" value="excluir" class="apagar_item" data-indice=${indice}>
                <h3 class="price_produto"><span>R$${parseFloat(val.preco).toFixed(2)}</span></h3>
            </div>
        `;
    });

    soma = soma.toFixed(2);
    let elemento_soma = document.querySelector('.soma h1');
    elemento_soma.innerHTML = 'Total: R$' + soma;

    adicionarEventosExcluir();
}


function adicionarItem() {
    let nome_produto = document.querySelector('.lista_cadastro input[name=nome_produto]');
    let valor_produto = document.querySelector('.lista_cadastro input[name=valor_produto]');

    items.push({
        nome: nome_produto.value,
        preco: valor_produto.value
    });

    nome_produto.value = '';
    valor_produto.value = '';

    atualizarLista();
}


function adicionarEventosExcluir() {
    let botao_apagar = document.querySelectorAll('.apagar_item');
    botao_apagar.forEach((botao) => {
        botao.addEventListener('click', () => {
            let indice = botao.getAttribute('data-indice');
            items.splice(indice, 1);
            atualizarLista();
        });
    });
}

document.querySelector('.lista_cadastro input[type=submit]').addEventListener('click', adicionarItem);

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];
    atualizarLista();
});

atualizarLista();


