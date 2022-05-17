export function categorySeed(server) {
  server.create("category", {
    id: 1,
    name: "Sucos",
    availableMode: ["local"],
    categoryType: {
      id: "40c83354-96d8-45fc-882c-1e1eaf8db326",
      name: "juice",
      icon: "juice"
    }
  });

  server.create("category", {
    id: 1,
    name: "Borda",
    required: false,
    minQuantity: 1,
    maxQuantity: 1,
    nameES: "Borda",
    nameEN: "Borda",
    complementOptions: [
      {
        nameES: "Queijo",
        nameEN: "Queijo",
        pdv: "123",
        availableMode: ["local", "delivery"],
        priceLocal: 1,
        priceDelivery: 1
      }
    ]
  });

  server.createList("category", 5);
}
