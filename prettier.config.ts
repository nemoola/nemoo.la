import { type Config } from "prettier";

const config: Config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.ts",
};

export default config;
