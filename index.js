import { createServer } from "miragejs";

import seeds from "./seeds";
import routes from "./routes";
import factories from "./factories";
import models from "./models";

function makeServer({ environment = "development", timing = 0 } = {}) {
  const server = createServer({
    environment,

    models,

    factories,

    routes,

    seeds
  });

  server.timing = timing;
}

export { makeServer };
