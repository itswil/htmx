import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

import { actionsController } from "./controllers/actions";
import { pagesController } from "./controllers/pages";

export const app = new Elysia();

app
  .use(staticPlugin())

  .use(actionsController)
  .use(pagesController)

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
