import type { PokemonApiResposta, PokemonResumo } from "../models/Pokemon.js";
import { ErroAPI } from "../models/CustomErrors.js";
import { mensagemErro, mensagemSucesso } from "../utils/textFormatters.js";

const URL_BASE: string = "https://pokeapi.co/api/v2/pokemon";

// Busca um Pokemon pelo nome ou ID na PokeAPI
// Retorna um PokemonResumo em caso de sucesso, ou null em caso de erro
export async function buscarPokemon(
  nomeOuId: string,
): Promise<PokemonResumo | null> {
  const url: string = `${URL_BASE}/${nomeOuId.toLowerCase()}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(mensagemErro(`Pokemon nao encontrado: ${nomeOuId}`));
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResposta;

    // Mapeando os tipos
    const tipos: string[] = dados.types.map((item) => item.type.name);

    // Extraindo stats com find
    const statHP = dados.stats.find((s) => s.stat.name === "hp");
    const statAtaque = dados.stats.find((s) => s.stat.name === "attack");
    const statDefesa = dados.stats.find((s) => s.stat.name === "defense");

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
      hp: statHP?.base_stat ?? 0,
      ataque: statAtaque?.base_stat ?? 0,
      defesa: statDefesa?.base_stat ?? 0,
    };

    console.log(mensagemSucesso(`Pokemon encontrado: ${pokemon.nome}`));
    return pokemon;
  } catch (erro) {
    throw new ErroAPI(`Nao foi possivel buscar o Pokemon: ${nomeOuId}`);
  }
}
