const inputNome = document.querySelector('#nome');
const inputQuantidade = document.querySelector('#quantidade');
const inputCategoria = document.querySelector('select');
const inputValor = document.querySelector('#valor');
const botaoLimparItens = document.querySelector('#botaoLimpar');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const valorTotalTudo = document.querySelector('#valor-total-tudo');
let valorTotalPedido = 0;


form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let produto = {};

    produto.nome = inputNome.value;
    produto.categoria = inputCategoria.value;
    produto.quantidade = inputQuantidade.value;
    produto.valor = inputValor.value;
    produto.total = produto.quantidade * produto.valor;
    console.log(produto);


    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    const tdCategoria = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdValor = document.createElement('td');
    const tdTotal = document.createElement('td');
    tdTotal.classList.add("valor-total-item");
    const tdExcluir = document.createElement('td');

    const btnExcluir = document.createElement('button');
    tdExcluir.append(btnExcluir);
    btnExcluir.textContent = 'x';
    btnExcluir.classList.add('btn', 'btn-danger');
    btnExcluir.addEventListener('click', function () {
        // Aqui criamos a opção de excluir todos os itens e zerar o valor total do pedido
        valorTotalPedido = Number(valorTotalPedido) - Number(produto.total)
        valorTotalTudo.textContent = Number(valorTotalPedido).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        tr.remove();
    });

    botaoLimparItens.addEventListener('click', function () {
        valorTotalPedido = 0
        valorTotalTudo.textContent = ''
        tr.remove();
    });

    tdExcluir.append(btnExcluir);

    // Aqui foi feita a criação dos botões de atualizar a quantidade para mais e menos e fizemos a alteração do valor total de acordo
    const mais = document.createElement('button');
    mais.textContent = "\+";

    const menos = document.createElement('button');
    menos.textContent = "\-";

    const quantidade = document.createElement('div');

    const divQ = document.createElement('div');
    divQ.classList.add('row', 'align-items-center');

    const divBtnExcluir = document.createElement('div');
    divBtnExcluir.classList.add('row', 'align-items-baseline');

    const divB = document.createElement('div');
    divB.classList.add('btn-group', 'col-8');
    divB.role = "group";

    tr.classList.add('align-middle');



    mais.addEventListener('click', () => {

        produto.total = Number(produto.total) + Number(produto.valor)
        quantidade.textContent = Number(quantidade.textContent) + 1;
        tdTotal.textContent = Number(produto.total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        valorTotalPedido = valorTotalPedido + Number(produto.valor);
        valorTotalTudo.textContent = 'Total:'+Number(valorTotalPedido).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    });
    menos.addEventListener('click', () => {
        if (!(quantidade.textContent <= 1)) {
            produto.total = Number(produto.total) - Number(produto.valor);
            quantidade.textContent = Number(quantidade.textContent) - 1;
            tdTotal.textContent = Number(produto.total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            valorTotalPedido = valorTotalPedido - Number(produto.valor);
            valorTotalTudo.textContent ='Total:'+ Number(valorTotalPedido).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        }
    });

    quantidade.classList.add('col-4');
    mais.classList.add('col-4', 'p-0', 'm-0', 'btn', 'btn-outline-secondary');
    menos.classList.add('col-4', 'p-0', 'm-0', 'btn', 'btn-outline-secondary');


    tdNome.textContent = produto.nome;
    tdCategoria.textContent = produto.categoria;
    quantidade.textContent = produto.quantidade;
    tdValor.textContent = Number(produto.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    tdTotal.textContent = Number(produto.total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    tr.append(tdNome);
    tr.append(tdCategoria);
    tr.append(tdQuantidade);
    tdQuantidade.append(divQ);
    divQ.append(quantidade);
    divQ.append(divB);
    divB.append(mais);
    divB.append(menos);
    tr.append(tdValor);
    tr.append(tdTotal);
    tr.append(tdExcluir);


    tbody.append(tr);

    //valor total do pedido atualizado

    valorTotalPedido = Number(produto.total) + Number(valorTotalPedido);

    valorTotalTudo.textContent = 'Total:'+ Number(valorTotalPedido).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    valorTotalTudo.classList.add('valorTotalTudo');


    inputNome.value = '';
    inputQuantidade.value = 1;
    inputValor.value = 1;



});