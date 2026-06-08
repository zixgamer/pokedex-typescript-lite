import { CatalogoPokemon } from "./services/BoxService.js";
import { TerminalController } from "./controllers/TerminalController.js";

async function main(): Promise<void> {
  console.log("=========================================");
  console.log("   POKEDEX TYPESCRIPT LITE");
  console.log("=========================================\n");

  //Instanciando o catalogo e o controller (injecao de dependencia)
  const catalogo = new CatalogoPokemon();
  const controller = new TerminalController(catalogo);

  //Buscando Pokemon validos
  console.log("--- Buscando Pokemon ---\n");

  await controller.buscarEAdicionar("pikachu");
  await controller.buscarEAdicionar("charmander");
  await controller.buscarEAdicionar("bulbasaur");
  await controller.buscarEAdicionar("squirtle");

  //Testando Pokemon inexistente
  console.log("\n--- Testando Pokemon inexistente ---\n");
  await controller.buscarEAdicionar("pokemon-inexistente");

  //Testando duplicidade
  console.log("\n--- Testando duplicidade (pikachu ja esta no catalogo) ---\n");
  await controller.buscarEAdicionar("pikachu");

  //Listando o catalogo
  console.log("--- Listando catalogo completo ---");
  controller.exibirCatalogo();

  //Removendo um Pokemon pelo ID
  console.log("--- Removendo Pikachu (ID 25) ---\n");
  controller.removerDoCatalogo(25);

  //Listando apos remocao
  console.log("--- Catalogo apos remocao ---");
  controller.exibirCatalogo();

  //Estatisticas finais
  controller.exibirEstatisticas();

  console.log("=========================================");
  console.log("   Execucao finalizada com sucesso!");
  console.log("=========================================");
}

main();
