import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/BoxService.js";
import { mensagemErro } from "../utils/textFormatters.js";

export class TerminalController {
  private catalogo: CatalogoPokemon;

  constructor(catalogo: CatalogoPokemon) {
    this.catalogo = catalogo;
  }

  //Busca um Pokemon e exibe os dados no terminal
  async buscarEExibir(nomeOuId: string): Promise<void> {
    try {
      const pokemon = await buscarPokemon(nomeOuId);
      if (pokemon !== null) {
        console.log(
          `  -> #${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`,
        );
      }
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(mensagemErro(erro.message));
      }
    }
  }

  //Busca um Pokemon e ja adiciona ao catalogo
  async buscarEAdicionar(nomeOuId: string): Promise<void> {
    try {
      const pokemon = await buscarPokemon(nomeOuId);
      if (pokemon !== null) {
        this.catalogo.adicionar(pokemon);
      }
    } catch (erro) {
      if (erro instanceof Error) {
        console.log(mensagemErro(erro.message));
      }
    }
  }

  //Exibe o catalogo atual
  exibirCatalogo(): void {
    this.catalogo.listar();
  }

  //Remove um Pokemon do catalogo pelo ID
  removerDoCatalogo(id: number): void {
    this.catalogo.remover(id);
  }

  //Exibe estatisticas do catalogo
  exibirEstatisticas(): void {
    const quantidade: number = this.catalogo.obterQuantidade();
    const pesoTotal: number = this.catalogo.calcularPesoTotal();
    const integro: boolean = this.catalogo.verificarIntegridade();

    console.log("\n=== Estatisticas do Catalogo ===");
    console.log(`Total de Pokemon: ${quantidade}`);
    console.log(`Peso total: ${pesoTotal}`);
    console.log(
      `Integridade dos dados: ${integro ? "OK" : "Problema encontrado"}`,
    );
    console.log("================================\n");
  }
}
