import { Main } from "../layouts/Main";

export const Login = () => {
  return (
    <Main>
      <h1>Login</h1>
      <p>Fake login - it just sets a cookie</p>
      <button hx-post="/setCookie" hx-swap="innerHTML">
        Set a cookie
      </button>
    </Main>
  );
};
