import React from "react";
import { Link } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "@app/components/ScrollToTop";
import { useRootConfig, useUserStore } from "@stores/hooks";
import { camelizeKeys } from "@app/utils/camelize";

type Props = {
  config: any;
  user: any;
};

const App = ({ config, user }: Props) => {
  const rootConfig = useRootConfig();
  rootConfig.setConfig(camelizeKeys(config));
  const userStore = useUserStore();
  userStore.setUser(user);

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
