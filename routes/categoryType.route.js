import { Response } from "miragejs";

export function CategoryTypesRoute() {
  this.get("/category/types", schema => {
    const categoriesTypes = schema.all("categoryType").models;

    return new Response(200, {}, categoriesTypes);
  });
}

export default { CategoryTypesRoute };
