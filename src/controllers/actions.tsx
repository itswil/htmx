import type Elysia from "elysia";

export const actionsController = (app: Elysia) =>
  app.post("/click", () => "lol");
