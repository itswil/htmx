import type { CharactersListResponse } from "../../types/ListResponse";

type CharactersParams = {
  data: CharactersListResponse;
};

export const CharactersList = ({ data }: CharactersParams) => {
  const { info, results } = data;
  let prevPage = "";
  let nextPage = "";

  if (info.prev) {
    const { searchParams } = new URL(info.prev);
    prevPage = searchParams.get("page") || "";
  }

  if (info.next) {
    const { searchParams } = new URL(info.next);
    nextPage = searchParams.get("page") || "";
  }

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
            hx-get={`/characters/page?page=${prevPage}`}
            hx-target="#results"
          >
            Previous
          </button>
        )}
        {info.next && (
          <button
            hx-get={`/characters/page?page=${nextPage}`}
            hx-target="#results"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
