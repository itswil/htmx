import { Main } from "../layouts/Main";

export const Logout = ({ isLoggedIn }) => {
  return (
    <Main isLoggedIn={isLoggedIn}>
      <h1>Logout</h1>
      <p>Fake Logout - it just removes a cookie</p>
      <button hx-post="/deleteCookie" hx-swap="innerHTML">
        Delete a cookie
      </button>
    </Main>
  );
};
