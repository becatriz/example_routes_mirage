import { CategoryRoute } from "./category.route";
import { CategoryTypesRoute } from "./categoryType.route";
import MenuItemRoute from "./menuItem.route";
import ComplementRoutes from "./complement.route";

const EnvConfig = require("~/Helpers/EnvConfig");

export function routes() {
  this.urlPrefix = EnvConfig.API_ROOT().api_url + "/api";

  CategoryRoute.call(this);
  CategoryTypesRoute.call(this);
  MenuItemRoute.call(this);
  ComplementRoutes.call(this);

  this.passthrough(`${this.urlPrefix}/**`);
}

export default routes;
