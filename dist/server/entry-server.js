"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var App_vue_vue_type_style_index_0_lang = "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`| `);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, {to: "/about"}, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({Component}, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSuspense(_push2, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2);
          },
          _: 2
        });
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
_sfc_main.ssrRender = _sfc_ssrRender;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/takeru/vite-serverless-sample/ssr-vue/src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pages = {"./pages/About.vue": () => false ? __vitePreload(() => Promise.resolve().then(function() {
  return About;
}), "__VITE_PRELOAD__") : Promise.resolve().then(function() {
  return About;
}), "./pages/Home.vue": () => false ? __vitePreload(() => Promise.resolve().then(function() {
  return Home;
}), "__VITE_PRELOAD__") : Promise.resolve().then(function() {
  return Home;
})};
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = vue.createSSRApp(_sfc_main);
  const router = createRouter();
  app.use(router);
  return {app, router};
}
async function render(url, manifest) {
  const {app, router} = createApp();
  router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await serverRenderer.renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
var About_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-27618e83] {\n  color: red;\n}\n";
const _sfc_main$1 = {
  async setup() {
    return {
      msg: "About"
    };
  }
};
const _withId = /* @__PURE__ */ vue.withScopeId("data-v-27618e83");
const _sfc_ssrRender$1 = /* @__PURE__ */ _withId((_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) => {
  _push(`<h1${serverRenderer.ssrRenderAttrs(_attrs)} data-v-27618e83>${serverRenderer.ssrInterpolate($setup.msg)}</h1>`);
});
_sfc_main$1.ssrRender = _sfc_ssrRender$1;
_sfc_main$1.__scopeId = "data-v-27618e83";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/takeru/vite-serverless-sample/ssr-vue/src/pages/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var About = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$1
});
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = {msg: "hi"};
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-37502151],\na[data-v-37502151] {\n  color: green;\n}\n";
const _withId$1 = /* @__PURE__ */ vue.withScopeId("data-v-37502151");
const _sfc_main$2 = {
  expose: [],
  __ssrInlineRender: true,
  setup(__props) {
    const Foo2 = vue.defineAsyncComponent(() => Promise.resolve().then(function() {
      return Foo$1;
    }).then((mod) => mod.Foo));
    const state = vue.reactive({count: 0});
    return /* @__PURE__ */ _withId$1((_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-37502151>Home</h1><p data-v-37502151><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="logo" data-v-37502151></p><button data-v-37502151>count is: ${serverRenderer.ssrInterpolate(state.count)}</button>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(Foo2), null, null, _parent));
      _push(`<p class="virtual" data-v-37502151>msg from virtual module: ${serverRenderer.ssrInterpolate(vue.unref(foo).msg)}</p><!--]-->`);
    });
  }
};
_sfc_main$2.__scopeId = "data-v-37502151";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("/Users/takeru/vite-serverless-sample/ssr-vue/src/pages/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: _sfc_main$2
});
var foo$1 = ".jsx {\n  color: blue;\n}";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = vue.useSSRContext();
    (ssrContext.modules || (ssrContext.modules = new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const Foo = vue.defineComponent({
  name: "foo",
  setup() {
    return () => vue.createVNode("div", {
      class: "jsx"
    }, [vue.createTextVNode("from JSX")]);
  }
});
const __moduleId = "/Users/takeru/vite-serverless-sample/ssr-vue/src/components/Foo.jsx";
ssrRegisterHelper(Foo, __moduleId);
var Foo$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Foo
});
exports.render = render;
