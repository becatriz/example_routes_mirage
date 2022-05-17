import { Response } from "miragejs";

export default function ComplementRoutes() {
  this.get("/complement/find-all/:companyId", schema => {
    const complements = schema.all("complement");

    return new Response(
      200,
      {},
      complements.models.map(complement => complement.attrs)
    );
  });

  this.post("/complement/create", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    schema.create("complement", attrs);

    return new Response(201, {}, {});
  });

  this.post("/complement/clone/:id", (schema, request) => {
    const { id: complementId } = request.params;

    const { id, ...complement } = schema.complements.findBy({
      id: complementId
    }).attrs;

    schema.create("complement", complement);

    return new Response(201, {}, {});
  });

  this.patch("/complement/patch/:id", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const { id } = request.params;

    schema.find("complement", id).update(attrs);

    return new Response(200, {}, {});
  });

  this.delete("/complement/delete/:id", (schema, request) => {
    const { id } = request.params;

    schema.find("complement", id).destroy();

    return new Response(200, {}, {});
  });

  this.get("/categories/items", schema => {
    const categoriesItems = schema.all("categoryItem").models;

    return new Response(200, {}, categoriesItems);
  });

  this.get("/complements/:id/items", (schema, request) => {
    const { id } = request.params;
    const categoriesItems = schema.complementItemIds.findBy({ id: id }).attrs;

    return new Response(200, {}, categoriesItems);
  });

  this.patch("/complements/:id/items", (schema, request) => {
    const { id } = request.params;
    const attrs = JSON.parse(request.requestBody);

    schema.complementItemIds.findBy({ id: id }).update(attrs);

    return new Response(200, {}, {});
  });
}
