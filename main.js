import { ProjetoController } from './controllers/ProjetoController.js';
import { TarefaController } from './controllers/TarefaController.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projetoId = urlParams.get('id');

  const listaProjetos = document.getElementById('lista-projetos');
  const listaTarefas = document.getElementById('lista-tarefas');

  const projetoController = new ProjetoController(listaProjetos, listaTarefas);
  projetoController.carregarProjetos().then(() => {
    if (projetoId) {
      projetoController.exibirProjeto(projetoId);
    }
  });

  if (document.getElementById('form-nova-tarefa')) {
    const tarefaController = new TarefaController();
    tarefaController.inicializarFormulario();
  }
});

