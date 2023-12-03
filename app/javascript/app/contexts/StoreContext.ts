import { createContext } from "react";

import RootStore from "@app/stores/RootStore";

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);

export const { Provider } = StoreContext;
