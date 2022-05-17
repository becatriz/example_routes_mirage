import { CategoryFactory } from "./category.factory";
import { CategoryTypeFactory } from "./categoryType.factory";
import { MenuItemFactory } from "./menuItem.factory";
import { ComplementFactory } from "./complement.factory";
import { CategoryItem } from "./categoryItem.factory";
import { ComplementItemId } from "./complementItemId.factory";

export default {
  category: CategoryFactory,
  categoryType: CategoryTypeFactory,
  menuitem: MenuItemFactory,
  complement: ComplementFactory,
  categoryItem: CategoryItem,
  complementItemId: ComplementItemId
};
