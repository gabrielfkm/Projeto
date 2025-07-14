const BASE_URL = "https://6875284bdd06792b9c96fd2e.mockapi.io/project/API";

export class ProjetoModel {
  static async listarProjetos() {
    const res = await fetch(`${BASE_URL}/projetos`);
    return res.json();
  }

  static async adicionarProjeto(projeto) {
    const res = await fetch(`${BASE_URL}/projetos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projeto)
    });
    return res.json();
  }

  static async excluirProjeto(id) {
    await fetch(`${BASE_URL}/projetos/${id}`, {
      method: 'DELETE'
    });
  }

  static async atualizarProjeto(id, dados) {
    const res = await fetch(`${BASE_URL}/projetos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    return res.json();
  }
  }
