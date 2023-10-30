import type Elysia from "elysia";
import { html } from "@elysiajs/html";
import { CharactersList } from "../templates/components/CharactersList";
import type { CharactersListResponse } from "../types/ListResponse";

export const actionsController = (app: Elysia) =>
  app
    .use(html())
    .post("/click", () => "lol")
    .get("/characters/page", async ({ html, query }) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${query.page}`
      );
      const data: CharactersListResponse = await response.json();
      return html(<CharactersList data={data} />);
    });
