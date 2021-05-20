const form = document.querySelector('form');
        const input = document.querySelector('#adicionar-tarefas');
        const ul = document.querySelector('ul');


        form.addEventListener('submit', function (evento) {

            evento.preventDefault();

            const li = document.createElement('li');
            const botaoExcluir = document.createElement('button')

            li.classList.add('list-group-item');
            botaoExcluir.classList.add('btn', 'btn-outline-danger');

            li.textContent = input.value;
            input.value = '';

            botaoExcluir.textContent = 'x';

            ul.append(li);
            li.append(botaoExcluir);

            botaoExcluir.addEventListener('click', function () {
                const excluir = document.querySelector('li');

                li.remove();

            })

        })
