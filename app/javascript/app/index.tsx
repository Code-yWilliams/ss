import React from "react";
import { Link } from "@mui/material";

const App = () => {
  return (
    <>
      <div>Hello. You are logged in. This is the SPA</div>
      <Link href="/logout" variant="button">
        Log Out
      </Link>
    </>
  );
};

export default App;
