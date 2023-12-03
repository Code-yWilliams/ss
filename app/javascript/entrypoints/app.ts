import componentLoader from "@app/shared/componentLoader";

componentLoader({
  App: () => import("../app"),
});
