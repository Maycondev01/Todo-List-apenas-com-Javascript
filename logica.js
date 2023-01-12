document.querySelector('#add').onclick = function () {
    if (document.querySelector('#novatarefa input').value.length == 0) {
        alert("Por favor, insira uma tarefa");
    } else {
        document.querySelector("#tarefas").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#novatarefa input').value}
            </span>
            <button class="delete">Deletar</button>
        </div>
        `
    }

    var tarefa_atual = document.querySelectorAll('.delete')
    for (var i = 0; i < tarefa_atual.length; i++) {
        tarefa_atual[i].onclick = function () {
            this.parentNode.remove()
        }
    }
}

