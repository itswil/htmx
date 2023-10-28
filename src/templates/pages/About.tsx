import { Main } from "../layouts/Main";

type AboutParams = {
  name: string;
};

export const About = ({ name }: AboutParams) => {
  return <Main>ABOUT: {name}</Main>;
};
