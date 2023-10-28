import { Main } from "../layouts/Main";

export const Home = () => {
  return (
    <Main>
      <button hx-post="/click" hx-swap="innerHTML">
        nice
      </button>
    </Main>
  );
};
