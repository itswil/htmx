import { Main } from "../layouts/Main";

type AboutParams = {
  name: string;
  data: any; // yeeee
};

export const About = ({ name, data }: AboutParams) => {
  return (
    <Main>
      <div>ABOUT: {name}</div>
      <div>{JSON.stringify(data)}</div>
    </Main>
  );
};
