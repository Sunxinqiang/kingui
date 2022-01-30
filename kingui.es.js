import { openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
var reset = "";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = ["disabled"];
const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["success", "primary", "warning", "danger", "default"].includes(value);
      }
    },
    fluid: Boolean,
    outline: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "normal",
      validator(value) {
        return ["large", "normal", "small", "mini"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["k-btn", {
          [`k-btn--${__props.type}`]: true,
          [`k-btn--${__props.size}`]: true,
          "k-btn--fluid": __props.fluid,
          "k-btn--outline": __props.outline,
          "k-btn--disabled": __props.disabled
        }]),
        disabled: __props.disabled ? "disabled" : false
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
};
var KButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00d3f2e0"]]);
var _export = {
  install(Vue) {
    Vue.component("KButton", KButton);
  }
};
export { _export as default };
