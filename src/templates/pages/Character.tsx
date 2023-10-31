import { Main } from "../layouts/Main";
import type { Character as CharacterType } from "../../types/Character";

type CharacterParams = {
  data: CharacterType;
  isLoggedIn: boolean;
};

export const Character = ({ data, isLoggedIn }: CharacterParams) => {
  return (
    <Main isLoggedIn={isLoggedIn}>
      <h1>Character</h1>
      <h2>{data.name}</h2>
      <p>{data.gender}</p>
      <p>{data.origin.name}</p>
      <p>{data.species}</p>
      <p>{data.status}</p>
    </Main>
  );
};
