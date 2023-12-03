import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";

import { Theme } from "@app/components";

// imports param is an object that looks like
// const imports = {
//   Tool: () => import('@components/Tool/index'),
// }
// This is used along with the react_component helper to load react components
// into the DOM

type Imports = {
  [key: string]: () => Promise<{ default: React.ComponentType<any> }>;
};

const componentLoader = (imports: Imports = {}) => {
  document.addEventListener("DOMContentLoaded", () => {
    const components = Array.prototype.slice.call(
      document.querySelectorAll("[data-component]")
    );

    components.forEach((el) => {
      const data = el.dataset;
      const load = imports[data.component];

      if (!load) {
        throw new Error(
          `Component (${data.component}) not found.
          Make sure you have resolved it correctly in the imports object`
        );
      }

      load().then(({ default: Component }) => {
        const element: ReactElement = React.createElement(
          Component,
          JSON.parse(data.reactProps)
        );
        const root = createRoot(el);
        root.render(<Theme>{element}</Theme>);
      });
    });
  });
};

export default componentLoader;
