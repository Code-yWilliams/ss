import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "@app/components/ScrollToTop";
import { useRootConfig, useUserStore } from "@stores/hooks";
import { camelizeKeys } from "@app/utils/camelize";
import { AppLayout } from "@components";

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
      <AppLayout />
    </Router>
  );
};

export default App;
