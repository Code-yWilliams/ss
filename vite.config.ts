import { UserConfig, defineConfig } from "vite";
import environmentPlugin from "vite-plugin-environment";
import rubyPlugin from "vite-plugin-ruby";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";

export const baseConfig: UserConfig = {
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]--[hash:base64:5]",
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `$cdn: "${
          process.env.ASSET_HOST ? `https://${process.env.ASSET_HOST}` : ""
        }";`,
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./app/javascript/app/components"),
      "@theme": path.resolve(__dirname, "./app/javascript/app/theme"),
      "@utils": path.resolve(__dirname, "./app/javascript/app/utils"),
      "@shared": path.resolve(__dirname, "./app/javascript/app/shared"),
    },
  },
};

interface ConfigProps {
  mode: string;
}

export default ({ mode }: ConfigProps) => {
  const plugins = [
    environmentPlugin({
      ASSET_HOST: null,
    }),
    rubyPlugin(),
    tsConfigPaths(),
  ];

  return defineConfig({
    ...baseConfig,
    plugins,
  });
};
