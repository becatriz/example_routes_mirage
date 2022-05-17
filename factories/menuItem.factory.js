import { Factory } from "miragejs";

import { faker } from "@faker-js/faker";

export const MenuItemFactory = Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  name() {
    return faker.name.firstName();
  },

  highlight() {
    return faker.datatype.boolean();
  },

  description() {
    return faker.lorem.paragraph();
  },
  pdv() {
    return faker.datatype.number();
  },
  nameEN() {
    return faker.name.firstName();
  },
  nameES() {
    return faker.name.firstName();
  },
  descriptionEN() {
    return faker.name.firstName();
  },
  descriptionES() {
    return faker.name.firstName();
  },

  availableMode() {
    return faker.random.arrayElements(["local", "delivery"]);
  },

  amounts() {
    return [
      {
        name: faker.name.firstName(),
        price: faker.datatype.number({ max: 50 }),
        availableMode: faker.random.arrayElements(["local", "delivery"]),
        pdv: faker.datatype.number()
      }
    ];
  },

  tags() {
    return ["kids"];
  },

  amountOfComplements() {
    return faker.datatype.number({ max: 10 });
  }
});

export default { MenuItemFactory };
