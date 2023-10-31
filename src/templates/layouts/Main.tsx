import Html from "@kitajs/html";
import { Base } from "../Base";

type MainProps = {
  children: Html.Children;
  isLoggedIn: boolean;
};

export const Main = ({ children, isLoggedIn }: MainProps) => (
  <Base>
    <header>
      <span>LOGO</span>
      <nav hx-boost="true">
        <a href="/">Home</a>
        <a href="/characters">Characters</a>
        <a href="/protected">Protected</a>
        {!isLoggedIn && <a href="/login">Log In</a>}
      </nav>
      {isLoggedIn && (
        <a hx-post="/logout" hx-swap="none">
          Log Out
        </a>
      )}
    </header>
    <main>{children}</main>
  </Base>
);
