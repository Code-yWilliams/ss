import React from "react";
import { Link } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";

type Props = {
  config: any;
  user: any;
};

const App = ({ config, user }: Props) => {
  return (
    <Router>
      <ScrollToTop />
      <div>Hello. You are logged in. This is the SPA</div>
      <Link href="/logout" variant="button">
        Log Out
      </Link>
    </Router>
  );
};

export default App;
