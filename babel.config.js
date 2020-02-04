module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ["module-resolver", {
        root: ["./"],
        alias: {
            "@": "./",
            "@src": "./src",
            "@store": "./src/store",
            "@components": "./src/components",
            "@router": "./src/router",
            "@utils": "./src/utils",
            "@views": "./src/views",
            "@mixins": "./src/mixins"
        }
    }]
]
};
