import { Factory } from "miragejs";

import { faker } from "@faker-js/faker";

export const CategoryFactory = Factory.extend({
  id() {
    return faker.datatype.uuid();
  },
  name: "Pizza",
  pdv: "PDV01",
  nameEN: "Pizza",
  nameES: "Pizza",
  position: 2,
  categoryType: {
    id() {
      return faker.datatype.uuid();
    },
    name: "suco",
    icon: "suco"
  },
  availableMode() {
    return [faker.random.arrayElement(["local", "delivery"])];
  }
});

export default { CategoryFactory };
