import { categorySeed } from "./category.seed";
import createCategoryTypeSeed from "./categoryType.seed";
import { menuitemSeed } from "./menuItem.seed";
import { complementSeed } from "./complement.seed";
import { categoryItemSeed } from "./categoryItem.seed";

function seeds(server) {
  createCategoryTypeSeed(server);
  categoryItemSeed(server);
  categorySeed(server);
  menuitemSeed(server);
  complementSeed(server);

  server.createList("complementItemId", 1);
}

export default seeds;
