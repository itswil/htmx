import { cookie } from "@elysiajs/cookie";
import { CharactersList } from "../templates/components/CharactersList";

import type Elysia from "elysia";
import type { CharactersListResponse } from "../types/ListResponse";

export const actionsController = (app: Elysia) =>
  app
    .use(cookie())
    .post("/login", ({ set, setCookie }) => {
      setCookie("sessionId", "abc123", { httpOnly: true });
      return (set.headers["HX-Redirect"] = "/");
    })
    .post("/logout", ({ removeCookie, set }) => {
      removeCookie("sessionId");
      return (set.headers["HX-Redirect"] = "/");
    })
    .get("/characters/page", async ({ query }) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${query.page}`
      );
      const data: CharactersListResponse = await response.json();
      return <CharactersList data={data} />;
    });
