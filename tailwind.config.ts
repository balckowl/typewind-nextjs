import type { Config } from "tailwindcss";
import { typewindTransforms } from "typewind/dist/transform.mjs";

const config: Config = {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}'],
    transform: typewindTransforms,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
