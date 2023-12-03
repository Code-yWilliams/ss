import { useContext } from "react";

import { StoreContext } from "@app/contexts/StoreContext";
import RootStore from "@app/stores/RootStore";
import Config from "@app/stores/RootStore/Config";
import UserStore from "@app/stores/UserStore";

export const useRootStore = (): RootStore => useContext(StoreContext);
export const useRootConfig = (): Config => {
  const { config } = useRootStore();
  if (!config) throw new Error("No config in root store");
  return config;
};
export const useUserStore = (): UserStore => {
  const { userStore } = useRootStore();
  if (!userStore) throw new Error("No user store in root store");
  return userStore;
};
