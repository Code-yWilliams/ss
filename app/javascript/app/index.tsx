import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "@components";
import { useRootConfig, useUserStore } from "@stores/hooks";
import { camelizeKeys } from "@app/utils/camelize";
import { AppLayout } from "@components";
import { IUser } from "@app/typings/shared";

type Props = {
  config: any;
  user: any;
};

const App = ({ config, user }: Props) => {
  const rootConfig = useRootConfig();
  rootConfig.setConfig(camelizeKeys(config));
  const userStore = useUserStore();

  if (user && !userStore.user) {
    userStore.setUser(user as IUser);
  }

  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
};

export default App;
