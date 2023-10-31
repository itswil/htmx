import Html from "@kitajs/html";
import { Base } from "../Base";

export const Main = ({ children, isLoggedIn }: Html.PropsWithChildren) => {
  return (
    <Base>
      <header>
        <span>LOGO</span>
        <nav hx-boost="true">
          <a href="/">Home</a>
          <a href="/characters">Characters</a>
          <a href="/protected">Protected</a>
          <a href="/login">Log In</a>
          {/* {isLoggedIn && <a href="/logout">Log Out</a>} */}
          <a href="/logout">Log Out</a>
        </nav>
      </header>
      <main>{children}</main>
    </Base>
  );
};
