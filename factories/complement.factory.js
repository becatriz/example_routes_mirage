import { Factory } from "miragejs";

import { faker } from "@faker-js/faker";

export const ComplementFactory = Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  name() {
    return faker.random.arrayElement([
      "Borda",
      "Adicionais",
      "Tipo de Batata",
      "Tamanho da embalagem"
    ]);
  },
  required() {
    return faker.datatype.boolean();
  },
  minQuantity() {
    return faker.datatype.number({ min: 0 });
  },
  maxQuantity() {
    return faker.datatype.number({ min: 0 });
  },
  nameES() {
    return faker.random.arrayElement([
      "Borda",
      "Adicionais",
      "Tipo de Batata",
      "Tamanho da embalagem"
    ]);
  },
  nameEN() {
    return faker.random.arrayElement([
      "Borda",
      "Adicionais",
      "Tipo de Batata",
      "Tamanho da embalagem"
    ]);
  },
  relatedItemsCount() {
    return faker.datatype.number({ min: 0, max: 10 });
  },

  availableMode() {
    return [faker.random.arrayElement(["local", "delivery"])];
  },

  complementOptions() {
    return Array.from({
      length: faker.datatype.number({ min: 1, max: 5 })
    }).map((v, k) => ({
      id: faker.datatype.uuid(),

      name: faker.random.arrayElement([
        "Queijo",
        "Cheddar",
        "Bacon",
        "Hamburger"
      ]),

      nameES: faker.random.arrayElement([
        "Queijo",
        "Cheddar",
        "Bacon",
        "Hamburger"
      ]),

      nameEN: faker.random.arrayElement([
        "Queijo",
        "Cheddar",
        "Bacon",
        "Hamburger"
      ]),

      pdv: faker.datatype.number(),

      availableMode: faker.random.arrayElement(["local", "delivery"]),

      priceLocal: faker.datatype.number({ min: 0 }),

      priceDelivery: faker.datatype.number({ min: 0 })
    }));
  }
});

export default { ComplementFactory };
