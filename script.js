let items = [];


document.querySelector('.lista_cadastro input[type=submit]')
.addEventListener('click',()=>{
    let nome_produto = document.querySelector('.lista_cadastro input[name=nome_produto]');
    let valor_produto = document.querySelector('.lista_cadastro input[name=valor_produto]');

    items.push({
        nome: nome_produto.value,
        preco: valor_produto.value
    });
  
    let lista_produtos = document.querySelector('.lista_produtos');
    let soma = 0;
    lista_produtos.innerHTML = ''
    items.map(function(val){
        soma +=parseFloat(val.preco)
        lista_produtos.innerHTML += `
        
        <div class="lista_produtos_single">
                <h3>`+val.nome+`</h3>
                <input type="submit" value="excluir" name="apagar_item">
                <h3 class="price_produto"><span>R$` + parseFloat(val.preco).toFixed(2) + `</span></h3>
            </div>
        
        `
    })
    
    soma = soma.toFixed(2)
    nome_produto.value = '';
    valor_produto.value = '';

    let elemento_soma = document.querySelector('.soma h1')
    elemento_soma.innerHTML = 'Total: R$'+soma
})

let botao_apagar = document.querySelectorAll('.apagar_item')
botao_apagar.forEach((botao,index)=>{
        botao.addEventListener('click',()=>{
            items.splice(index,1)

            lista_produtos.innerHTML = '';
            soma = 0;
            items.map(function (val, index) {
                soma += parseFloat(val.preco);
                lista_produtos.innerHTML += `
                    <div class="lista_produtos_single">
                        <h3>` + val.nome + `</h3>
                        <input type="submit" value="limpar" class="apagar_item">
                        <h3 class="price_produto"><span>R$` + parseFloat(val.preco).toFixed(2) + `</span></h3>
                    </div>
                `
            })
        })
})


document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];

    document.querySelector('.lista_produtos').innerHTML = "";
    document.querySelector('.soma h1').innerHTML = "Total: R$0"
})

