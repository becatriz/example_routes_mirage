export function menuitemSeed(server) {
  server.create("menuitem", {
    id: "0a472d19-6f26-4021-b785-acff4e0e2da2",
    tags: ["kids", "sem_gluten"]
  });

  server.createList("menuitem", 20);
}
