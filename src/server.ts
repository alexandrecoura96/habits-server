import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(AppRoutes);

app
  .listen({
    host: "0.0.0.0",
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running");
  });
