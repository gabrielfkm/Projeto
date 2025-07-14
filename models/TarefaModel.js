const BASE_URL = "https://6875284bdd06792b9c96fd2e.mockapi.io/project/API";

export class TarefaModel {
  static async listarPorProjeto(projetoId) {
    const res = await fetch(`${BASE_URL}/tarefas?projetoId=${projetoId}`);
    return res.json();
  }

  static async adicionar(tarefa) {
    const res = await fetch(`${BASE_URL}/tarefas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefa)
    });
    return res.json();
  }

  static async atualizar(id, dados) {
    const res = await fetch(`${BASE_URL}/tarefas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    return res.json();
  }

  static async excluir(id) {
    await fetch(`${BASE_URL}/tarefas/${id}`, { method: 'DELETE' });
  }
}
