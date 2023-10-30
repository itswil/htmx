import type { Character as CharacterType } from "../../types/Character";
import { Main } from "../layouts/Main";

type CharacterParams = {
  data: CharacterType;
};

export const Character = ({ data }: CharacterParams) => {
  return (
    <Main>
      <h1>Character</h1>
      <h2>{data.name}</h2>
      <p>{data.gender}</p>
      <p>{data.origin.name}</p>
      <p>{data.species}</p>
      <p>{data.status}</p>
    </Main>
  );
};
