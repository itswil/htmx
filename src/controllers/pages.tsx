import type Elysia from "elysia";
import { html } from "@elysiajs/html";

import { About } from "../templates/pages/About";
import { Home } from "../templates/pages/Home";

export const pagesController = (app: Elysia) =>
  app
    .use(html())
    .get("/", ({ html }) => html(<Home />))
    .get("/about", ({ html }) => html(<About name="haha" />));
