import type Elysia from "elysia";
import { html } from "@elysiajs/html";
import { CharactersListResponse } from "../types/ListResponse";
import { CharactersList } from "../templates/components/CharactersList";

export const actionsController = (app: Elysia) =>
  app
    .use(html())
    .post("/click", () => "lol")
    .get("/characters/page", async (req) => {
      const { html, query } = req;
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${query.page}`
      );
      const data: CharactersListResponse = await response.json();
      return html(<CharactersList data={data} />);
    });
