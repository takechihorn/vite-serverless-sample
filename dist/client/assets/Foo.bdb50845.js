import {l as defineComponent, a as createVNode, d as createTextVNode} from "./vendor.01f25a3a.js";
var foo = ".jsx {\n  color: blue;\n}";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      class: "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export {Foo};
