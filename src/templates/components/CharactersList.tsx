import { CharactersListResponse } from "../../types/ListResponse";

type CharactersParams = {
  data: CharactersListResponse;
};

export const CharactersList = ({ data }: CharactersParams) => {
  const { info, results } = data;
  return (
    <>
      <div id="results">
        {results.map((r) => (
          <div>
            <a hx-boost="true" href={`/character/${r.id}`}>
              {r.name}
            </a>
          </div>
        ))}
        {info.prev && (
          <button
            hx-get={`/characters/page?page=${info.prev.at(-1)}`}
            hx-target="#results"
          >
            Previous
          </button>
        )}
        {info.next && (
          <button
            hx-get={`/characters/page?page=${info.next.at(-1)}`}
            hx-target="#results"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
