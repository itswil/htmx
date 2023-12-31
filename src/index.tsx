import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { logger } from "@bogeychan/elysia-logger";

import { actionsController } from "./controllers/actions";
import { pagesController } from "./controllers/pages";

export const app = new Elysia();

app
  .use(html())
  .use(logger())
  .use(staticPlugin())

  .use(actionsController)
  .use(pagesController)

  .onError(({ code, error }) => {
    return new Response(error.toString());
  })

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
