import { TarefaModel } from '../models/TarefaModel.js';

export class TarefaView {
  static renderizarTarefas(lista, container) {
    container.innerHTML = '';
    if (lista.length === 0) {
      container.innerHTML = '<p>Nenhuma tarefa encontrada.</p>';
      return;
    }

    lista.forEach(tarefa => {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = tarefa.concluida;
      checkbox.addEventListener('change', () => {
        tarefa.concluida = checkbox.checked;
        TarefaModel.atualizar(tarefa.id, tarefa);
      });

      li.appendChild(checkbox);
      li.append(' ' + tarefa.titulo);
      container.appendChild(li);
    });
  }
}
