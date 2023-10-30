import type { CharactersListResponse } from "../../types/ListResponse";
import { Main } from "../layouts/Main";

type CharactersParams = {
  data: CharactersListResponse;
};

export const Characters = ({ data }: CharactersParams) => {
  const { results } = data;
  return (
    <Main>
      <h1>Characters</h1>
      {results.map((r) => (
        <div>
          <a hx-boost="true" href={`/character/${r.id}`}>
            {r.name}
          </a>
        </div>
      ))}
    </Main>
  );
};
