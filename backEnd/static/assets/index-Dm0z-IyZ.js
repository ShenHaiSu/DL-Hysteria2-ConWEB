import{B as f,l as y,a as c,k as s,m as l,M as b,Y as p}from"./index-Ctqlg4E2.js";var m=function(n){var t=n.dt;return`
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: `.concat(t("inplace.padding"),`;
    border-radius: `).concat(t("inplace.border.radius"),`;
    transition: background `).concat(t("inplace.transition.duration"),", color ").concat(t("inplace.transition.duration"),", outline-color ").concat(t("inplace.transition.duration"),", box-shadow ").concat(t("inplace.transition.duration"),`;
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: `).concat(t("inplace.display.hover.background"),`;
    color: `).concat(t("inplace.display.hover.color"),`;
}

.p-inplace-display:focus-visible {
    box-shadow: `).concat(t("inplace.focus.ring.shadow"),`;
    outline: `).concat(t("inplace.focus.ring.width")," ").concat(t("inplace.focus.ring.style")," ").concat(t("inplace.focus.ring.color"),`;
    outline-offset: `).concat(t("inplace.focus.ring.offset"),`;
}

.p-inplace-content {
    display: block;
}
`)},v={root:"p-inplace p-component",display:function(n){var t=n.props;return["p-inplace-display",{"p-disabled":t.disabled}]},content:"p-inplace-content"},h=f.extend({name:"inplace",theme:m,classes:v}),g={name:"BaseInplace",extends:y,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},displayProps:{type:null,default:null}},style:h,provide:function(){return{$pcInplace:this,$parentInstance:this}}},O={name:"Inplace",extends:g,inheritAttrs:!1,emits:["open","close","update:active"],data:function(){return{d_active:this.active}},watch:{active:function(n){this.d_active=n}},methods:{open:function(n){this.disabled||(this.d_active=!0,this.$emit("open",n),this.$emit("update:active",!0))},close:function(n){var t=this;this.d_active=!1,this.$emit("close",n),this.$emit("update:active",!1),setTimeout(function(){t.$refs.display.focus()},0)}}};function i(e){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?u(Object(t),!0).forEach(function(o){w(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function w(e,n,t){return(n=P(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){var n=j(e,"string");return i(n)=="symbol"?n:n+""}function j(e,n){if(i(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(i(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var k=["tabindex"];function S(e,n,t,o,a,r){return c(),s("div",l({class:e.cx("root"),"aria-live":"polite"},e.ptmi("root")),[a.d_active?(c(),s("div",l({key:1,class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content",{closeCallback:r.close})],16)):(c(),s("div",l({key:0,ref:"display",class:e.cx("display"),tabindex:e.$attrs.tabindex||"0",role:"button",onClick:n[0]||(n[0]=function(){return r.open&&r.open.apply(r,arguments)}),onKeydown:n[1]||(n[1]=b(function(){return r.open&&r.open.apply(r,arguments)},["enter"]))},d(d({},e.displayProps),e.ptm("display"))),[p(e.$slots,"display")],16,k))],16)}O.render=S;export{O as default};
