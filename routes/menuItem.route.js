import { Response } from "miragejs";

export default function MenuItemRoute() {
  this.get("/menuitem/find-all/:companyId", schema => {
    const items = schema.all("menuitem");

    return new Response(
      200,
      {},
      items.models.map(item => item.attrs)
    );
  });

  this.post("/menuitem/clone/:id", (schema, request) => {
    const { id: itemId } = request.params;

    const { id, ...item } = schema.menuitems.findBy({ id: itemId }).attrs;

    schema.create("menuitem", item);

    return new Response(201, {}, {});
  });

  this.post("/menuitem/create", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);

    schema.create("menuitem", attrs);

    return new Response(201, {}, {});
  });

  this.post("/menuitem/:id/tags", (schema, request) => {
    const newTags = JSON.parse(request.requestBody);
    const { id } = request.params;

    schema.find("menuitem", id).update({
      tags: newTags.tags
    });

    return new Response(200, {}, {});
  });

  this.put("/menuitem/update/:id", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const { id } = request.params;

    schema.find("menuitem", id).update(attrs);

    return new Response(200, {}, {});
  });

  this.delete("/menuitems/delete/:id", (schema, request) => {
    const { id } = request.params;

    schema.find("menuitem", id).destroy();

    return new Response(200, {}, {});
  });

  this.patch("/menuitem/patch/:id", (schema, request) => {
    const attrs = JSON.parse(request.requestBody);
    const { id } = request.params;

    schema.find("menuitem", id).update(attrs);

    return new Response(200, {}, {});
  });
}
