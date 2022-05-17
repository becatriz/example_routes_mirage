export default function createCategoryTypeSeed(server) {
  server.create("categoryType", {
    id: "18040164-ea2b-4d77-8d1f-3b2135b0d9b8",
    name: "Pizza",
    icon: "pizza"
  });

  server.createList("categoryType", 5);
}
