import type { PokemonResumo } from "../models/Pokemon.ts";

//Formata uma linha do catalogo para exibicao no terminal
export function formatarLinhaPokemon(pokemon: PokemonResumo): string {
  const tipos: string = pokemon.tipos.join(", ");
  return (
    `#${pokemon.id} - ${pokemon.nome} | ` +
    `Tipos: ${tipos} | ` +
    `Altura: ${pokemon.altura} | ` +
    `Peso: ${pokemon.peso} | ` +
    `HP: ${pokemon.hp} | ` +
    `Ataque: ${pokemon.ataque} | ` +
    `Defesa: ${pokemon.defesa}`
  );
}

//Formata mensagem de sucesso
export function mensagemSucesso(texto: string): string {
  return `[OK] ${texto}`;
}

//Formata mensagem de aviso
export function mensagemAviso(texto: string): string {
  return `[AVISO] ${texto}`;
}

//Formata mensagem de erro
export function mensagemErro(texto: string): string {
  return `[ERRO] ${texto}`;
}
