// Erro para falhas na consulta da API
export class ErroAPI extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ErroAPI";
  }
}

// Erro para operacoes invalidas no catalogo local
export class ErroCatalogo extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = "ErroCatalogo";
  }
}
