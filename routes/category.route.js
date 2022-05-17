import { Response } from "miragejs";

export function CategoryRoute() {
  this.get("/category/find-all", schema => {
    const categories = schema.all("category").models;

    return new Response(200, {}, categories);
  });

  this.post("/category/create", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    schema.create("category", attrs);

    return new Response(201, {}, {});
  });

  this.put("/category/edit/:id", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const { id } = request.params;

    schema.find("category", id).update(attrs);

    return new Response(200, {}, {});
  });

  this.delete("/category/delete/:id", (schema, request) => {
    const { id } = request.params;

    schema.find("category", id).destroy();

    return new Response(200, {}, {});
  });
}

export default { CategoryRoute };
