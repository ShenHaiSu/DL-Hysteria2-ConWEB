import{B as m,l as v,a as w,k as b,b as a,m as r,h as k,G as y,H as S,o as V,J as p,d,e as g,S as N,V as B,f as u}from"./index-BzstpyG_.js";var C=function(o){var e=o.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: `).concat(e("toggleswitch.handle.background"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    left: `).concat(e("toggleswitch.gap"),`;
    margin-top: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", left ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    left: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}
`)},P={root:{position:"relative"}},M={root:function(o){var e=o.instance,s=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":s.disabled,"p-invalid":s.invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider"},T=m.extend({name:"toggleswitch",theme:C,classes:M,inlineStyles:P}),L={name:"BaseToggleSwitch",extends:v,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:T,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},c={name:"ToggleSwitch",extends:L,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(o){var e=o==="root"?this.ptmi:this.ptm;return e(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.$emit("update:modelValue",e),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){this.$emit("blur",o)}},computed:{checked:function(){return this.modelValue===this.trueValue}}},x=["data-p-checked","data-p-disabled"],I=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function O(t,o,e,s,l,n){return w(),b("div",r({class:t.cx("root"),style:t.sx("root")},n.getPTOptions("root"),{"data-p-checked":n.checked,"data-p-disabled":t.disabled}),[a("input",r({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:n.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":n.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:o[0]||(o[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:o[1]||(o[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:o[2]||(o[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,I),a("span",r({class:t.cx("slider")},n.getPTOptions("slider")),null,16)],16,x)}c.render=O;const h=t=>(N("data-v-b9e52ba5"),t=t(),B(),t),D={"key-name":"allowNonManagerRegister"},R=h(()=>a("span",null,[u("是否允许非管理员 "),a("b",null,"注册")],-1)),z={"key-name":"allowNonManagerLogin"},A=h(()=>a("span",null,[u("是否允许非管理员 "),a("b",null,"登录")],-1)),F={"key-name":"hy2ServerDefaultPermission"},_=h(()=>a("span",null,[u("代理服务器 "),a("b",null,"默认可连接")],-1)),U={__name:"PanelConf",setup(t){const o=y(),e=S({allowNonManagerRegister:!1,allowNonManagerLogin:!1,hy2ServerDefaultPermission:!1});V(()=>{p.get("/panelConf/getAll").then(l=>{e.value.allowNonManagerRegister=l.data.allowNonManagerRegister||!1,e.value.allowNonManagerLogin=l.data.allowNonManagerLogin||!1,e.value.hy2ServerDefaultPermission=l.data.hy2ServerDefaultPermission||!1})});function s(l){l.target.setAttribute("disabled",!0);const n=l.target.closest("li>div").getAttribute("key-name"),i=l.target.checked;p.post("/panelConf/update",{key:n,value:i}).then(f=>{o.add({severity:"success",summary:"成功",detail:"设置已保存",life:500})}).catch(f=>{o.add({severity:"error",summary:"错误",detail:"设置保存失败",life:500}),e.value[n]=!i}).finally(()=>{l.target.removeAttribute("disabled")})}return(l,n)=>(w(),b("div",null,[a("ul",{onChange:s},[a("li",null,[a("div",D,[R,d(g(c),{modelValue:e.value.allowNonManagerRegister,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value.allowNonManagerRegister=i)},null,8,["modelValue"])])]),a("li",null,[a("div",z,[A,d(g(c),{modelValue:e.value.allowNonManagerLogin,"onUpdate:modelValue":n[1]||(n[1]=i=>e.value.allowNonManagerLogin=i)},null,8,["modelValue"])])]),a("li",null,[a("div",F,[_,d(g(c),{modelValue:e.value.hy2ServerDefaultPermission,"onUpdate:modelValue":n[2]||(n[2]=i=>e.value.hy2ServerDefaultPermission=i)},null,8,["modelValue"])])])],32)]))}},E=k(U,[["__scopeId","data-v-b9e52ba5"]]);export{E as default};
