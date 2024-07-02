import{B as ve,l as ge,a as K,k as B,m as V,b as Z,t as ye,x as be}from"./index-CLcwi-Aw.js";function te(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function Se(e){return!!(e&&e.constructor&&e.call&&e.apply)}function p(e){return!te(e)}function M(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function F(e,...t){return Se(e)?e(...t):e}function N(e,t=!0){return typeof e=="string"&&(t||e!=="")}function ke(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}function se(e){return p(e)&&!isNaN(e)}function b(e,t){if(t){const s=t.test(e);return t.lastIndex=0,s}return!1}function H(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function ne(e){return N(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(t,s)=>s===0?t:"-"+t.toLowerCase()).toLowerCase():e}function q(e){return N(e)?e.replace(/[A-Z]/g,(t,s)=>s===0?t:"."+t.toLowerCase()).toLowerCase():e}function _e(){const e=new Map;return{on(t,s){let n=e.get(t);return n?n.push(s):n=[s],e.set(t,n),this},off(t,s){let n=e.get(t);return n&&n.splice(n.indexOf(s)>>>0,1),this},emit(t,s){let n=e.get(t);n&&n.slice().map(a=>{a(s)})},clear(){e.clear()}}}var we=Object.defineProperty,xe=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,G=(e,t,s)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,$=(e,t)=>{for(var s in t||(t={}))re.call(t,s)&&G(e,s,t[s]);if(j)for(var s of j(t))ae.call(t,s)&&G(e,s,t[s]);return e},U=(e,t)=>xe(e,Re(t)),C=(e,t)=>{var s={};for(var n in e)re.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&j)for(var n of j(e))t.indexOf(n)<0&&ae.call(e,n)&&(s[n]=e[n]);return s},Ne=_e(),w=Ne;function J(e,t){ke(e)?e.push(...t||[]):M(e)&&Object.assign(e,t)}function Ve(e){return M(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Q(e,t=""){return["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some(n=>t.endsWith(n))?e:`${e}`.trim().split(" ").map(r=>se(r)?`${r}px`:r).join(" ")}function $e(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function W(e="",t=""){return $e(`${N(e,!1)&&N(t,!1)?`${e}-`:e}${t}`)}function ie(e="",t=""){return`--${W(e,t)}`}function oe(e,t="",s="",n=[],a){if(N(e)){const r=/{([^}]*)}/g,d=e.trim();if(b(d,r)){const o=d.replaceAll(r,i=>{const h=i.replace(/{|}/g,"").split(".").filter(g=>!n.some(m=>b(g,m)));return`var(${ie(s,ne(h.join("-")))}${p(a)?`, ${a}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,u=/var\([^)]+\)/g;return b(o.replace(u,"0"),l)?`calc(${o})`:o}return Q(d,t)}else if(se(e))return Q(e,t)}function Ce(e,t,s){N(t,!1)&&e.push(`${t}:${s};`)}function L(e,t){return e?`${e}{${t}}`:""}var I=e=>{var t;const s=E.getTheme(),n=ee(s,e,void 0,"variable"),a=(t=n.match(/--[\w-]+/g))==null?void 0:t[0],r=ee(s,e,void 0,"value");return{name:a,variable:n,value:r}},ee=(e={},t,s,n="variable")=>{if(t){const{variable:a,options:r}=E.defaults||{},{prefix:d,transform:o}=(e==null?void 0:e.options)||r||{},u=b(t,/{([^}]*)}/g)?t:`{${t}}`;return n==="value"||o==="strict"?E.getTokenValue(t):oe(u,void 0,d,[a.excludedKeyRegex],s)}return""};function Le(e,t={}){const s=E.defaults.variable,{prefix:n=s.prefix,selector:a=s.selector,excludedKeyRegex:r=s.excludedKeyRegex}=t,d=(u,i="")=>Object.entries(u).reduce((c,[h,g])=>{const m=b(h,r)?W(i):W(i,ne(h)),f=Ve(g);if(M(f)){const{variables:S,tokens:y}=d(f,m);J(c.tokens,y),J(c.variables,S)}else c.tokens.push((n?m.replace(`${n}-`,""):m).replaceAll("-",".")),Ce(c.variables,ie(m),oe(f,m,n,[r]));return c},{variables:[],tokens:[]}),{variables:o,tokens:l}=d(e,n);return{value:o,tokens:l,declarations:o.join(""),css:L(a,o.join(""))}}var v={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){const t=Object.keys(this.rules).filter(s=>s!=="custom").map(s=>this.rules[s]);return[e].flat().map(s=>{var n;return(n=t.map(a=>a.resolve(s)).find(a=>a.matched))!=null?n:this.rules.custom.resolve(s)})}},_toVariables(e,t){return Le(e,{prefix:t==null?void 0:t.prefix})},getCommon({name:e="",theme:t={},params:s,set:n,defaults:a}){var r,d,o,l;const{preset:u,options:i}=t;let c,h,g,m;if(p(u)){const{primitive:f,semantic:S}=u,y=S||{},{colorScheme:_}=y,k=C(y,["colorScheme"]),x=_||{},{dark:O}=x,T=C(x,["dark"]),P=p(f)?this._toVariables({primitive:f},i):{},D=p(k)?this._toVariables({semantic:k},i):{},A=p(T)?this._toVariables({light:T},i):{},z=p(O)?this._toVariables({dark:O},i):{},[X,Y]=[(r=P.declarations)!=null?r:"",P.tokens],[le,de]=[(d=D.declarations)!=null?d:"",D.tokens||[]],[ue,ce]=[(o=A.declarations)!=null?o:"",A.tokens||[]],[he,me]=[(l=z.declarations)!=null?l:"",z.tokens||[]];c=this.transformCSS(e,X,"light","variable",i,n,a),h=Y;const pe=this.transformCSS(e,`${le}${ue}color-scheme:light`,"light","variable",i,n,a),fe=this.transformCSS(e,`${he}color-scheme:dark`,"dark","variable",i,n,a);g=`${pe}${fe}`,m=[...new Set([...de,...ce,...me])]}return{primitive:{css:c,tokens:h},semantic:{css:g,tokens:m}}},getPreset({name:e="",preset:t={},options:s,params:n,set:a,defaults:r,selector:d}){var o,l,u;const i=e.replace("-directive",""),c=t,{colorScheme:h}=c,g=C(c,["colorScheme"]),m=h||{},{dark:f}=m,S=C(m,["dark"]),y=p(g)?this._toVariables({[i]:g},s):{},_=p(S)?this._toVariables({[i]:S},s):{},k=p(f)?this._toVariables({[i]:f},s):{},[x,O]=[(o=y.declarations)!=null?o:"",y.tokens||[]],[T,P]=[(l=_.declarations)!=null?l:"",_.tokens||[]],[D,A]=[(u=k.declarations)!=null?u:"",k.tokens||[]],z=[...new Set([...O,...P,...A])],X=this.transformCSS(i,`${x}${T}`,"light","variable",s,a,r,d),Y=this.transformCSS(i,D,"dark","variable",s,a,r,d);return{css:`${X}${Y}`,tokens:z}},getPresetC({name:e="",theme:t={},params:s,set:n,defaults:a}){var r;const{preset:d,options:o}=t,l=(r=d==null?void 0:d.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:o,params:s,set:n,defaults:a})},getPresetD({name:e="",theme:t={},params:s,set:n,defaults:a}){var r;const d=e.replace("-directive",""),{preset:o,options:l}=t,u=(r=o==null?void 0:o.directives)==null?void 0:r[d];return this.getPreset({name:d,preset:u,options:l,params:s,set:n,defaults:a})},getColorSchemeOption(e,t){var s;return this.regex.resolve((s=e.darkModeSelector)!=null?s:t.options.darkModeSelector)},getLayerOrder(e,t={},s,n){const{cssLayer:a}=t;return a?`@layer ${F(a.order||"primeui",s)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:s,props:n={},set:a,defaults:r}){const d=this.getCommon({name:e,theme:t,params:s,set:a,defaults:r}),o=Object.entries(n).reduce((l,[u,i])=>l.push(`${u}="${i}"`)&&l,[]).join(" ");return Object.entries(d||{}).reduce((l,[u,i])=>{if(i!=null&&i.css){const c=H(i==null?void 0:i.css),h=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${o}>${c}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:t={},params:s,props:n={},set:a,defaults:r}){var d;const o={name:e,theme:t,params:s,set:a,defaults:r},l=(d=e.includes("-directive")?this.getPresetD(o):this.getPresetC(o))==null?void 0:d.css,u=Object.entries(n).reduce((i,[c,h])=>i.push(`${c}="${h}"`)&&i,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${H(l)}</style>`:""},createTokens(e={},t,s="",n="",a={}){return Object.entries(e).forEach(([r,d])=>{const o=b(r,t.variable.excludedKeyRegex)?s:s?`${s}.${q(r)}`:q(r),l=n?`${n}.${r}`:r;M(d)?this.createTokens(d,t,o,l,a):(a[o]||(a[o]={paths:[],computed(u,i={}){if(u){const c=this.paths.find(h=>h.scheme===u)||this.paths.find(h=>h.scheme==="none");return c==null?void 0:c.computed(u,i.binding)}return this.paths.map(c=>c.computed(c.scheme,i[c.scheme]))}}),a[o].paths.push({path:l,value:d,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(u,i={}){const c=/{([^}]*)}/g;let h=d;if(i.name=this.path,i.binding||(i.binding={}),b(d,c)){const m=d.trim().replaceAll(c,y=>{var _,k;const x=y.replace(/{|}/g,"");return(k=(_=a[x])==null?void 0:_.computed(u,i))==null?void 0:k.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,S=/var\([^)]+\)/g;h=b(m.replace(S,"0"),f)?`calc(${m})`:m}return te(i.binding)&&delete i.binding,{colorScheme:u,path:this.path,paths:i,value:h.includes("undefined")?void 0:h}}}))}),a},getTokenValue(e,t,s){var n;const r=(l=>l.split(".").filter(i=>!b(i.toLowerCase(),s.variable.excludedKeyRegex)).join("."))(t),d=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,o=[(n=e[r])==null?void 0:n.computed(d)].flat().filter(l=>l);return o.length===1?o[0].value:o.reduce((l={},u)=>{const i=u,{colorScheme:c}=i,h=C(i,["colorScheme"]);return l[c]=h,l},void 0)},transformCSS(e,t,s,n,a={},r,d,o){if(p(t)){const{cssLayer:l}=a;if(n!=="style"){const u=this.getColorSchemeOption(a,d),i=o?L(o,t):t;t=s==="dark"?u.reduce((c,{selector:h})=>(p(h)&&(c+=h.includes("[CSS]")?h.replace("[CSS]",i):L(h,i)),c),""):L(o??":root",t)}if(l){const u={name:"primeui",order:"primeui"};M(l)&&(u.name=F(l.name,{name:e,type:n})),p(u.name)&&(t=L(`@layer ${u.name}`,t),r==null||r.layerNames(u.name))}return t}return""}},E={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=U($({},t),{options:$($({},this.defaults.options),t.options)}),this._tokens=v.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),w.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=U($({},this.theme),{preset:e}),this._tokens=v.createTokens(e,this.defaults),this.clearLoadedStyleNames(),w.emit("preset:change",e),w.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=U($({},this.theme),{options:e}),this.clearLoadedStyleNames(),w.emit("options:change",e),w.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return v.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return v.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const s={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPresetC(s)},getDirective(e="",t){const s={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPresetD(s)},getCustomPreset(e="",t,s,n){const a={name:e,preset:t,options:this.options,selector:s,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPreset(a)},getLayerOrderCSS(e=""){return v.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,s="style",n){return v.transformCSS(e,t,n,s,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,s={}){return v.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,s={}){return v.getStyleSheet({name:e,theme:this.theme,params:t,props:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),w.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&w.emit("theme:load"))}},Me=function(t){var s=t.dt;return`
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}

.p-knob-value {
    animation-name: p-knob-dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}

.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}

.p-knob svg {
    border-radius: 50%;
    outline-color: transparent;
    transition: background `.concat(s("knob.transition.duration"),", color ").concat(s("knob.transition.duration"),", outline-color ").concat(s("knob.transition.duration"),", box-shadow ").concat(s("knob.transition.duration"),`;
}

.p-knob svg:focus-visible {
    box-shadow: `).concat(s("knob.focus.ring.shadow"),`;
    outline: `).concat(s("knob.focus.ring.width")," ").concat(s("knob.focus.ring.style")," ").concat(s("knob.focus.ring.color"),`;
    outline-offset: `).concat(s("knob.focus.ring.offset"),`;
}

@keyframes p-knob-dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
`)},Oe={root:function(t){var s=t.props;return["p-knob p-component",{"p-disabled":s.disabled}]},range:"p-knob-range",value:"p-knob-value",text:"p-knob-text"},Te=ve.extend({name:"knob",theme:Me,classes:Oe}),Pe={name:"BaseKnob",extends:ge,props:{modelValue:{type:Number,default:null},size:{type:Number,default:100},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:100},valueColor:{type:String,default:function(){return I("knob.value.background").variable}},rangeColor:{type:String,default:function(){return I("knob.range.background").variable}},textColor:{type:String,default:function(){return I("knob.text.color").variable}},strokeWidth:{type:Number,default:14},showValue:{type:Boolean,default:!0},valueTemplate:{type:[String,Function],default:"{value}"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Te,provide:function(){return{$pcKnob:this,$parentInstance:this}}},R=3.14159265358979,De={name:"Knob",extends:Pe,inheritAttrs:!1,emits:["update:modelValue","change"],data:function(){return{radius:40,midX:50,midY:50,minRadians:4*R/3,maxRadians:-R/3}},methods:{updateValue:function(t,s){var n=t-this.size/2,a=this.size/2-s,r=Math.atan2(a,n),d=-R/2-R/6;this.updateModel(r,d)},updateModel:function(t,s){var n;if(t>this.maxRadians)n=this.mapRange(t,this.minRadians,this.maxRadians,this.min,this.max);else if(t<s)n=this.mapRange(t+2*R,this.minRadians,this.maxRadians,this.min,this.max);else return;var a=Math.round((n-this.min)/this.step)*this.step+this.min;this.$emit("update:modelValue",a),this.$emit("change",a)},updateModelValue:function(t){t>this.max?this.$emit("update:modelValue",this.max):t<this.min?this.$emit("update:modelValue",this.min):this.$emit("update:modelValue",t)},mapRange:function(t,s,n,a,r){return(t-s)*(r-a)/(n-s)+a},onClick:function(t){!this.disabled&&!this.readonly&&this.updateValue(t.offsetX,t.offsetY)},onMouseDown:function(t){!this.disabled&&!this.readonly&&(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),t.preventDefault())},onMouseUp:function(t){!this.disabled&&!this.readonly&&(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),t.preventDefault())},onTouchStart:function(t){!this.disabled&&!this.readonly&&(window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),t.preventDefault())},onTouchEnd:function(t){!this.disabled&&!this.readonly&&(window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),t.preventDefault())},onMouseMove:function(t){!this.disabled&&!this.readonly&&(this.updateValue(t.offsetX,t.offsetY),t.preventDefault())},onTouchMove:function(t){if(!this.disabled&&!this.readonly&&t.touches.length==1){var s=this.$el.getBoundingClientRect(),n=t.targetTouches.item(0),a=n.clientX-s.left,r=n.clientY-s.top;this.updateValue(a,r)}},onKeyDown:function(t){if(!this.disabled&&!this.readonly)switch(t.code){case"ArrowRight":case"ArrowUp":{t.preventDefault(),this.updateModelValue(this.modelValue+this.step);break}case"ArrowLeft":case"ArrowDown":{t.preventDefault(),this.updateModelValue(this.modelValue-this.step);break}case"Home":{t.preventDefault(),this.$emit("update:modelValue",this.min);break}case"End":{t.preventDefault(),this.$emit("update:modelValue",this.max);break}case"PageUp":{t.preventDefault(),this.updateModelValue(this.modelValue+10);break}case"PageDown":{t.preventDefault(),this.updateModelValue(this.modelValue-10);break}}}},computed:{rangePath:function(){return"M ".concat(this.minX," ").concat(this.minY," A ").concat(this.radius," ").concat(this.radius," 0 1 1 ").concat(this.maxX," ").concat(this.maxY)},valuePath:function(){return"M ".concat(this.zeroX," ").concat(this.zeroY," A ").concat(this.radius," ").concat(this.radius," 0 ").concat(this.largeArc," ").concat(this.sweep," ").concat(this.valueX," ").concat(this.valueY)},zeroRadians:function(){return this.min>0&&this.max>0?this.mapRange(this.min,this.min,this.max,this.minRadians,this.maxRadians):this.mapRange(0,this.min,this.max,this.minRadians,this.maxRadians)},valueRadians:function(){return this.mapRange(this.modelValue,this.min,this.max,this.minRadians,this.maxRadians)},minX:function(){return this.midX+Math.cos(this.minRadians)*this.radius},minY:function(){return this.midY-Math.sin(this.minRadians)*this.radius},maxX:function(){return this.midX+Math.cos(this.maxRadians)*this.radius},maxY:function(){return this.midY-Math.sin(this.maxRadians)*this.radius},zeroX:function(){return this.midX+Math.cos(this.zeroRadians)*this.radius},zeroY:function(){return this.midY-Math.sin(this.zeroRadians)*this.radius},valueX:function(){return this.midX+Math.cos(this.valueRadians)*this.radius},valueY:function(){return this.midY-Math.sin(this.valueRadians)*this.radius},largeArc:function(){return Math.abs(this.zeroRadians-this.valueRadians)<R?0:1},sweep:function(){return this.valueRadians>this.zeroRadians?0:1},valueToDisplay:function(){return typeof this.valueTemplate=="string"?this.valueTemplate.replace(/{value}/g,this.modelValue):this.valueTemplate(this.modelValue)}}},Ae=["width","height","tabindex","aria-valuemin","aria-valuemax","aria-valuenow","aria-labelledby","aria-label"],ze=["d","stroke-width","stroke"],je=["d","stroke-width","stroke"],Ee=["fill"];function Xe(e,t,s,n,a,r){return K(),B("div",V({class:e.cx("root")},e.ptmi("root")),[(K(),B("svg",V({viewBox:"0 0 100 100",role:"slider",width:e.size,height:e.size,tabindex:e.readonly||e.disabled?-1:e.tabindex,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onClick:t[0]||(t[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)}),onKeydown:t[1]||(t[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)}),onMousedown:t[2]||(t[2]=function(){return r.onMouseDown&&r.onMouseDown.apply(r,arguments)}),onMouseup:t[3]||(t[3]=function(){return r.onMouseUp&&r.onMouseUp.apply(r,arguments)}),onTouchstartPassive:t[4]||(t[4]=function(){return r.onTouchStart&&r.onTouchStart.apply(r,arguments)}),onTouchend:t[5]||(t[5]=function(){return r.onTouchEnd&&r.onTouchEnd.apply(r,arguments)})},e.ptm("svg")),[Z("path",V({d:r.rangePath,"stroke-width":e.strokeWidth,stroke:e.rangeColor,class:e.cx("range")},e.ptm("range")),null,16,ze),Z("path",V({d:r.valuePath,"stroke-width":e.strokeWidth,stroke:e.valueColor,class:e.cx("value")},e.ptm("value")),null,16,je),e.showValue?(K(),B("text",V({key:0,x:50,y:57,"text-anchor":"middle",fill:e.textColor,class:e.cx("text")},e.ptm("text")),ye(r.valueToDisplay),17,Ee)):be("",!0)],16,Ae))],16)}De.render=Xe;export{De as default};
