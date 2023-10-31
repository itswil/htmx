import { Base } from "../Base";

export const Login = () => (
  <Base>
    <h1>Login</h1>
    <p>Fake login - username should be "admin" or "user"</p>
    <form hx-post="/login" hx-swap="beforebegin">
      <label>
        Username:
        <input type="text" name="username" autocomplete="off" required="true" />
      </label>

      <label>
        Password:
        <input type="password" name="password" required="true" />
      </label>
      <button type="submit">Log in</button>
    </form>
  </Base>
);
