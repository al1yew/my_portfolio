import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "src/legacy/**",
      "src/legacy-pages/**",
    ],
  },
];

export default eslintConfig;
