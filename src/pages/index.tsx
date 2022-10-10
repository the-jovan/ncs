import type { NextPage } from "next";
import Button from "components/ui/button/Button";

const Home: NextPage = () => {
  return (
    <>
      <Button label="'tis but a text" secondary />
      <p>Some test thing</p>
    </>
  );
};

export default Home;
