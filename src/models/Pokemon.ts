// Representa o retorno bruto da PokeAPI (apenas os campos que usamos)
export interface PokemonApiResposta {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

// Representa o Pokemon simplificado salvo no catalogo local
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
  hp: number;
  ataque: number;
  defesa: number;
}
