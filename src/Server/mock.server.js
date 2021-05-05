import { createServer, Model, RestSerializer } from "miragejs";
import { DB } from "../Database/DB";

export const mockServer = () => {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      video: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 2000;
      this.resource("videos");
    },

    seeds(server) {
      DB.forEach((video) => {
        server.create("video", {
          ...video,
        });
      });
    },
  });
};
