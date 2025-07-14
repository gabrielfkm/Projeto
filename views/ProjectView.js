export class ProjetoView {
  static renderizarProjetos(lista, container, projetoAtualId = null) {
    container.innerHTML = '';
    lista.forEach(projeto => {
      const li = document.createElement('li');
      li.textContent = projeto.nome;
      li.dataset.id = projeto.id;
      if (projeto.id == projetoAtualId) li.classList.add('ativo');
      container.appendChild(li);
    });
  }

  static renderizarDetalhes(projeto) {
    document.getElementById('nome-projeto').textContent = projeto.nome;
    document.getElementById('descricao-projeto').textContent = projeto.descricao;
    document.getElementById('prazo-projeto').textContent = projeto.prazo || 'Sem prazo definido';
    document.getElementById('membros-projeto').textContent = projeto.membros?.join(', ') || 'Nenhum membro';
  }

  static renderizarMensagemSemTarefas(container) {
    container.innerHTML = '<p>Nenhuma tarefa encontrada.</p>';
  }
      }
