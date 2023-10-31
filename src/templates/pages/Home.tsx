import { Main } from "../layouts/Main";

type HomeProps = {
  isLoggedIn: boolean;
};

export const Home = ({ isLoggedIn }: HomeProps) => {
  return (
    <Main isLoggedIn={isLoggedIn}>
      <h1>Home</h1>
    </Main>
  );
};
