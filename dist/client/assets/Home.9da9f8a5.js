import {_ as __vitePreload} from "./index.b0c92099.js";
import {i as defineAsyncComponent, j as reactive, c as createBlock, a as createVNode, t as toDisplayString, u as unref, F as Fragment, h as withScopeId, p as pushScopeId, k as popScopeId, o as openBlock} from "./vendor.01f25a3a.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = {msg: "hi"};
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-37502151],\na[data-v-37502151] {\n  color: green;\n}\n";
const _withId = /* @__PURE__ */ withScopeId("data-v-37502151");
pushScopeId("data-v-37502151");
const _hoisted_1 = /* @__PURE__ */ createVNode("h1", null, "Home", -1);
const _hoisted_2 = /* @__PURE__ */ createVNode("p", null, [
  /* @__PURE__ */ createVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1);
const _hoisted_3 = {class: "virtual"};
popScopeId();
const _sfc_main = {
  expose: [],
  setup(__props) {
    const Foo = defineAsyncComponent(() => __vitePreload(() => __import__("./Foo.bdb50845.js"), true ? ["/assets/Foo.bdb50845.js","/assets/Foo.6ac8e7a5.css","/assets/vendor.01f25a3a.js"] : void 0).then((mod) => mod.Foo));
    const state = reactive({count: 0});
    return /* @__PURE__ */ _withId((_ctx, _cache) => {
      return openBlock(), createBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => state.count++)
        }, "count is: " + toDisplayString(state.count), 1),
        createVNode(unref(Foo)),
        createVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1)
      ], 64);
    });
  }
};
_sfc_main.__scopeId = "data-v-37502151";
export default _sfc_main;
