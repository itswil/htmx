import * as elements from "typed-html";
import { Base } from "../Base";

export const Main = ({ children }: elements.Children) => {
  return (
    <Base>
      <>
        <header>
          <span>LOGO</span>
          <nav hx-boost="true">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
      </>
    </Base>
  );
};
