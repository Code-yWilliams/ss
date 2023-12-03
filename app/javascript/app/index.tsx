import React from "react";
import { Button, Link } from "@mui/material";

const App = () => {
  return (
    <>
      <div>Hello my name is Cody</div>
      <Link href="/logout" variant="button">
        Log Out
      </Link>
    </>
  );
};

export default App;
