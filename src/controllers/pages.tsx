import type Elysia from "elysia";
import { html } from "@elysiajs/html";

import { Character } from "../templates/pages/Character";
import { Characters } from "../templates/pages/Characters";
import { Home } from "../templates/pages/Home";

import type { Character as CharacterType } from "../types/Character";
import type { CharactersListResponse } from "../types/ListResponse";

export const pagesController = (app: Elysia) =>
  app
    .use(html())
    .get("/", ({ html }) => html(<Home />))
    .get("/characters", async ({ html }) => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data: CharactersListResponse = await response.json();
      return html(<Characters data={data} />);
    })
    .get("/character/:id", async (req) => {
      const { html, params } = req;
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );
      const data: CharacterType = await response.json();
      return html(<Character data={data} />);
    });
