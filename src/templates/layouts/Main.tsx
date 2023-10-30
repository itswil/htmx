import Html from "@kitajs/html";
import { Base } from "../Base";

export const Main = ({ children }: Html.PropsWithChildren) => {
  return (
    <Base>
      <header>
        <span>LOGO</span>
        <nav hx-boost="true">
          <a href="/">Home</a>
          <a href="/characters">Characters</a>
        </nav>
      </header>
      <main>{children}</main>
    </Base>
  );
};
