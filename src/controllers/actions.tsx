import { cookie } from "@elysiajs/cookie";
import { CharactersList } from "../templates/components/CharactersList";

import type Elysia from "elysia";
import type { CharactersListResponse } from "../types/ListResponse";
import { userExists } from "../db/auth";

export const actionsController = (app: Elysia) =>
  app
    .use(cookie())
    .post("/login", ({ body, set, setCookie }) => {
      if (!userExists(body.username)) {
        return <p>User does not exist or credentials are incorrect</p>;
      }

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
