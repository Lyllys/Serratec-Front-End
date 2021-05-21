const inputUrl = document.querySelector('#url');
const inputTitulo = document.querySelector('#titulo');
const inputDescricao = document.querySelector('#descricao');
const containerCards = document.querySelector('#containerDeCards')
const form = document.querySelector('form');

form.addEventListener('submit' , function(evento){
    
    evento.preventDefault();


    const divCard = document.createElement('div');
    divCard.classList.add('card');


    const img = document.createElement('img');
    img.setAttribute("src", inputUrl.value);
    inputUrl.value= '';
    img.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const titulo = document.createElement('h5');
    titulo.textContent = inputTitulo.value;
    inputTitulo.value ='';
    titulo.classList.add('card-title');
  

    const descricao = document.createElement('p');
    descricao.textContent = inputDescricao.value;
    inputDescricao.value ='';
    descricao.classList.add('card-text');
    

    divCard.append(img);
    divCard.append(cardBody);
    cardBody.append(titulo);
    cardBody.append(descricao);
    containerCards.append(divCard);

    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('btn', 'btn-outline-danger');
    botaoExcluir.textContent = 'x';
    descricao.append(botaoExcluir);

    botaoExcluir.addEventListener('click', function () {
        const excluir = document.querySelector('divCard');

        divCard.remove();

    })



})


