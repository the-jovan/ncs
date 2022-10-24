import type { NextPage } from "next";
import Modal from "components/modals/modal/Modal";
import { useState } from "react";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <Modal mounted={mounted} unmount={() => setMounted(false)}>
        <div>okokok</div>
      </Modal>
      and other shit?
      <button onClick={() => setMounted(!mounted)}>Toggle</button>
      {mounted ? "munted" : "not munted"}
    </>
  );
};

export default Home;
