import type Elysia from "elysia";

import { Character } from "../templates/pages/Character";
import { Characters } from "../templates/pages/Characters";
import { Login } from "../templates/pages/Login";
import { Protected } from "../templates/pages/Protected";
import { Home } from "../templates/pages/Home";

import { isAuthenticated } from "../db/auth";

import type { Character as CharacterType } from "../types/Character";
import type { CharactersListResponse } from "../types/ListResponse";

export const pagesController = (app: Elysia) =>
  app
    .derive(({ cookie }) => ({
      isLoggedIn: !!cookie.sessionId,
    }))
    .get("/", ({ isLoggedIn }) => <Home isLoggedIn={isLoggedIn} />)
    .get("/characters", async ({ isLoggedIn }) => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data: CharactersListResponse = await response.json();
      return <Characters data={data} isLoggedIn={isLoggedIn} />;
    })
    .get("/character/:id", async ({ isLoggedIn, params }) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );
      const data: CharacterType = await response.json();
      return <Character data={data} isLoggedIn={isLoggedIn} />;
    })
    .get("/login", () => <Login />)
    .get(
      "/protected",
      ({ isLoggedIn }) => <Protected isLoggedIn={isLoggedIn} />,
      {
        beforeHandle: ({ cookie, set }) => {
          if (
            !cookie.sessionId ||
            !isAuthenticated(cookie.sessionId.toString())
          ) {
            return (set.redirect = "/login");
          }
        },
      }
    );
