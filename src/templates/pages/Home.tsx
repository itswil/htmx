import { Main } from "../layouts/Main";

export const Home = () => {
  return (
    <Main>
      <h1>Home</h1>
      <button hx-post="/click" hx-swap="innerHTML">
        nice
      </button>
    </Main>
  );
};
