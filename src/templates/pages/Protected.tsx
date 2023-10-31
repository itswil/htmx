import { Main } from "../layouts/Main";

type ProtectedParams = {
  isLoggedIn: boolean;
};

export const Protected = ({ isLoggedIn }: ProtectedParams) => {
  return (
    <Main isLoggedIn={isLoggedIn}>
      <h1>Protected</h1>
      <p>SUPER SECRET CONTENT</p>
    </Main>
  );
};
