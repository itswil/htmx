import type Elysia from "elysia";

import { Character } from "../templates/pages/Character";
import { Characters } from "../templates/pages/Characters";
import { Login } from "../templates/pages/Login";
import { Logout } from "../templates/pages/Logout";
import { Protected } from "../templates/pages/Protected";
import { Home } from "../templates/pages/Home";

import { isAuthenticated } from "../db/auth";

import type { Character as CharacterType } from "../types/Character";
import type { CharactersListResponse } from "../types/ListResponse";

export const pagesController = (app: Elysia) =>
  app
    .get("/", () => <Home />)
    .get("/characters", async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data: CharactersListResponse = await response.json();
      return <Characters data={data} />;
    })
    .get("/character/:id", async ({ params }) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.id}`
      );
      const data: CharacterType = await response.json();
      return <Character data={data} />;
    })
    .get("/login", () => <Login />)
    .get("/logout", ({ cookie }) => {
      console.log("🚀 ~ .get ~ cookie:", cookie);
      return <Logout isLoggedIn={!!cookie.sessionId} />;
    })
    .get(
      "/protected",
      () => {
        return <Protected />;
      },
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
