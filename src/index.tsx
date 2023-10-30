import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { logger } from "@grotto/logysia";

import { actionsController } from "./controllers/actions";
import { pagesController } from "./controllers/pages";

export const app = new Elysia();

app
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
