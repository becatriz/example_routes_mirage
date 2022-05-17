export function categoryItemSeed(server) {
  server.create("categoryItem", {
    id: "816df525-abf1-47f6-b693-9318ff3a9031",
    categoryName: "Humburguer",
    items: [
      {
        id: "f98309a6-dbaa-4e25-9e45-e53608a62a44",
        name: "Queijo"
      },
      {
        id: "7e44666c-0e22-4f47-aac8-b1eaef1a0ad5",
        name: "Calabresa"
      },
      {
        id: "40ba1b80-85f5-4147-a0cf-f0f298cb5bfb",
        name: "Atum"
      }
    ]
  });

  server.createList("categoryItem", 1);
}
