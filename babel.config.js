module.exports = api => {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          regenerator: true
        }
      ],
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"],
          alias: {
            "@api": "./src/api",
            "@app-types": "./src/utils/types",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@rdx": "./src/redux-store",
            "@rdx-features": "./src/redux-store/features",
            "@styles": "./src/styles",
            "@utils": "./src/utils",
            "@base": ".",
            "@app": "./src"
          }
        }
      ]
    ]
  };
};
