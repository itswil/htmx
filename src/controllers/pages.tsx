import type Elysia from "elysia";
import { html } from "@elysiajs/html";

import { About } from "../templates/pages/About";
import { Home } from "../templates/pages/Home";

export const pagesController = (app: Elysia) =>
  app
    .use(html())
    .get("/", ({ html }) => html(<Home />))
    .get("/about", async ({ html }) => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      return html(<About name="haha" data={data} />);
    });
