import type { CharactersListResponse } from "../../types/ListResponse";
import { CharactersList } from "../components/CharactersList";
import { Main } from "../layouts/Main";

type CharactersParams = {
  data: CharactersListResponse;
};

export const Characters = ({ data }: CharactersParams) => {
  return (
    <Main>
      <h1>Characters</h1>
      <p>This is a list of characters from Rick and Morty</p>
      <CharactersList data={data} />
    </Main>
  );
};
