import { ProjetoModel } from '../models/ProjetoModel.js';
import { ProjetoView } from '../views/ProjetoView.js';
import { TarefaModel } from '../models/TarefaModel.js';
import { TarefaView } from '../views/TarefaView.js';

export class ProjetoController {
  constructor(containerProjetos, containerTarefas) {
    this.containerProjetos = containerProjetos;
    this.containerTarefas = containerTarefas;
  }

  async carregarProjetos() {
    const projetos = await ProjetoModel.listarProjetos();
    ProjetoView.renderizarProjetos(projetos, this.containerProjetos);

    if (projetos.length === 0) {
      ProjetoView.renderizarMensagemSemTarefas(this.containerTarefas);
    }
  }

  async exibirProjeto(id) {
    const projeto = await ProjetoModel.obterProjeto(id);
    ProjetoView.renderizarDetalhes(projeto);

    const tarefas = await TarefaModel.listarPorProjeto(id);
    TarefaView.renderizarTarefas(tarefas, document.getElementById('lista-tarefas'));
  }
}
