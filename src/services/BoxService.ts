import type { PokemonResumo } from "../models/Pokemon.js";
import { ErroCatalogo } from "../models/CustomErrors.js";
import {
  formatarLinhaPokemon,
  mensagemAviso,
  mensagemErro,
  mensagemSucesso,
} from "../utils/textFormatters.js";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  //Adiciona um Pokemon ao catalogo, impedindo duplicatas
  adicionar(pokemon: PokemonResumo): void {
    const jaExiste: boolean = this.pokemons.some(
      (item) => item.id === pokemon.id,
    );

    if (jaExiste) {
      console.log(mensagemAviso(`${pokemon.nome} ja esta no catalogo.`));
      return;
    }

    this.pokemons.push(pokemon);
    console.log(mensagemSucesso(`${pokemon.nome} adicionado ao catalogo.`));
  }

  //Lista todos os Pokemon do catalogo
  listar(): void {
    if (this.pokemons.length === 0) {
      console.log(mensagemAviso("Catalogo vazio."));
      return;
    }

    console.log("\nCatalogo atual:");
    this.pokemons.forEach((pokemon) => {
      console.log(formatarLinhaPokemon(pokemon));
    });
    console.log("");
  }

  //Remove um Pokemon pelo ID
  remover(id: number): void {
    const existe: boolean = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log(mensagemAviso("Nenhum Pokemon encontrado com esse ID."));
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log(mensagemSucesso("Pokemon removido do catalogo."));
  }

  //Verifica se todos os Pokemon do catalogo tem nome
  verificarIntegridade(): boolean {
    if (this.pokemons.length === 0) return true;
    return this.pokemons.every((pokemon) => pokemon.nome !== "");
  }

  //Calcula o peso total dos Pokemon no catalogo
  calcularPesoTotal(): number {
    return this.pokemons.reduce((total, pokemon) => total + pokemon.peso, 0);
  }

  //Retorna o array interno (para persistencia futura)
  obterTodos(): PokemonResumo[] {
    return this.pokemons;
  }

  //Retorna a quantidade de Pokemon no catalogo
  obterQuantidade(): number {
    return this.pokemons.length;
  }
}
