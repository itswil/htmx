import { CharactersList } from "../components/CharactersList";
import { Main } from "../layouts/Main";
import type { CharactersListResponse } from "../../types/ListResponse";

type CharactersParams = {
  data: CharactersListResponse;
  isLoggedIn: boolean;
};

export const Characters = ({ data, isLoggedIn }: CharactersParams) => {
  return (
    <Main isLoggedIn={isLoggedIn}>
      <h1>Characters</h1>
      <p>This is a list of characters from Rick and Morty</p>
      <CharactersList data={data} />
    </Main>
  );
};
