const vuePlugin = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");

/**
 * @type {import('./server/node_modules/vite').UserConfig}
 */
module.exports = {
  router: {
    base: "/dev/",
  },
  plugins: [
    vuePlugin(),
    vueJsx(),
    {
      name: "virtual",
      resolveId(id) {
        if (id === "@foo") {
          return id;
        }
      },
      load(id) {
        if (id === "@foo") {
          return `export default { msg: 'hi' }`;
        }
      },
    },
  ],
  build: {
    minify: false,
  },
};
