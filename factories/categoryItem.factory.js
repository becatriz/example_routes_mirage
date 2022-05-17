import { Factory } from "miragejs";

export const CategoryItem = Factory.extend({
  id: "9cd0f226-cfb6-11ec-9d64-0242ac120002",
  categoryName: "Pizza Salgada",
  items: [
    {
      id: "63fd0a15-0eee-4da4-84d0-da403032101f",
      name: "Margueritta"
    },
    {
      id: "7b3c8f41-77f0-48ea-9bf5-2425bc78ee98",
      name: "Frango e Catupiry"
    },
    {
      id: "49e38863-15a6-4892-983d-73918eb10e74",
      name: "Carne de Sol"
    }
  ]
});

export default { CategoryItem };
