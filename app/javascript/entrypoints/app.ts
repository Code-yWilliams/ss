import componentLoader from "@shared/componentLoader";

componentLoader({
  App: () => import("../app"),
});
