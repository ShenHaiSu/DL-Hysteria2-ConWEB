const __vite__fileDeps=["assets/IconUser-CwMAJOLZ.js","assets/index-D8t-L7d4.js","assets/index-DBoWeEB5.css","assets/index-B4UPiWqD.js","assets/index-BxqxFJ0E.js","assets/index-QjBhl3rU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as le,B as te,U as j,Z as K,D as _,C as de,s as q,O as ue,m as O,R as ce,r as me,o as p,c as g,a as v,w as fe,b as z,n as pe,d as J,e as w,t as G,f as Q,g as C,h as x,T as he,i as D,F as M,j as X,k as U,l as ve,q as be,u as S,v as R,x as ye,_ as ge,y as Ie,z as T,A as N,E as H,G as E,H as ke,I as Le,J as Oe,K as _e,L as xe,M as Ce}from"./index-D8t-L7d4.js";import{s as we}from"./index-QjBhl3rU.js";var Se=le(),Ae=function(n){var e=n.dt;return`
.p-menu {
    background: `.concat(e("menu.background"),`;
    color: `).concat(e("menu.color"),`;
    border: 1px solid `).concat(e("menu.border.color"),`;
    border-radius: `).concat(e("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(e("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(e("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(e("menu.transition.duration"),", color ").concat(e("menu.transition.duration"),`;
    border-radius: `).concat(e("menu.item.border.radius"),`;
    color: `).concat(e("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(e("menu.item.padding"),`;
    gap: `).concat(e("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(e("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(e("menu.item.focus.color"),`;
    background: `).concat(e("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(e("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(e("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(e("menu.submenu.label.background"),`;
    padding: `).concat(e("menu.submenu.label.padding"),`;
    color: `).concat(e("menu.submenu.label.color"),`;
    font-weight: `).concat(e("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-top: 1px solid `).concat(e("menu.separator.border.color"),`;
}
`)},Te={root:function(n){var e=n.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var e=n.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},ze=te.extend({name:"menu",theme:Ae,classes:Te}),Pe={name:"BaseMenu",extends:q,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ze,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ne={name:"Menuitem",hostName:"Menu",extends:q,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,e){return n&&n.item?ue.getItemValue(n.item[e]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:O({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:O({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:O({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:ce}},Fe=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Me=["href","target"];function Ue(t,n,e,c,u,l){var m=me("ripple");return l.visible()?(p(),g("li",O({key:0,id:e.id,class:[t.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":l.label(),"aria-disabled":l.disabled()},l.getPTOptions("item"),{"data-p-focused":l.isItemFocused(),"data-p-disabled":l.disabled()||!1}),[v("div",O({class:t.cx("itemContent"),onClick:n[0]||(n[0]=function(o){return l.onItemClick(o)}),onMousemove:n[1]||(n[1]=function(o){return l.onItemMouseMove(o)})},l.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(p(),z(J(e.templates.item),{key:1,item:e.item,label:l.label(),props:l.getMenuItemProps(e.item)},null,8,["item","label","props"])):w("",!0):fe((p(),g("a",O({key:0,href:e.item.url,class:t.cx("itemLink"),target:e.item.target,tabindex:"-1","aria-hidden":"true"},l.getPTOptions("itemLink")),[e.templates.itemicon?(p(),z(J(e.templates.itemicon),{key:0,item:e.item,class:pe(t.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(p(),g("span",O({key:1,class:[t.cx("itemIcon"),e.item.icon]},l.getPTOptions("itemIcon")),null,16)):w("",!0),v("span",O({class:t.cx("itemLabel")},l.getPTOptions("itemLabel")),G(l.label()),17)],16,Me)),[[m]])],16)],16,Fe)):w("",!0)}ne.render=Ue;function Y(t){return Ve(t)||De(t)||Ee(t)||Be()}function Be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(t,n){if(t){if(typeof t=="string")return W(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?W(t,n):void 0}}function De(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ve(t){if(Array.isArray(t))return W(t)}function W(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,c=Array(n);e<n;e++)c[e]=t[e];return c}var ie={name:"Menu",extends:Pe,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||j()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||j(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&K.clear(this.container),this.container=null},methods:{itemClick:function(n){var e=n.item;this.disabled(e)||(e.command&&e.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(_.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)_.focus(this.target),this.hide(),n.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(_.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var e=_.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),c=e&&_.findSingle(e,'a[data-pc-section="itemlink"]');this.popup&&_.focus(this.target),c?c.click():e&&e.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var e=_.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=Y(e).findIndex(function(u){return u.id===n});return c>-1?c+1:0},findPrevOptionIndex:function(n){var e=_.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=Y(e).findIndex(function(u){return u.id===n});return c>-1?c-1:0},changeFocusedOptionIndex:function(n){var e=_.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=n>=e.length?e.length-1:n<0?0:n;c>-1&&(this.focusedOptionIndex=e[c].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){_.addStyles(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&K.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&_.focus(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&K.clear(n)},alignOverlay:function(){_.absolutePosition(this.container,this.target);var n=_.getOuterWidth(this.target);n>_.getOuterWidth(this.container)&&(this.container.style.minWidth=_.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(e){var c=n.container&&!n.container.contains(e.target),u=!(n.target&&(n.target===e.target||n.target.contains(e.target)));n.overlayVisible&&c&&u?n.hide():!n.popup&&c&&u&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new de(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!_.isTouchDevice()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){Se.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ne,Portal:we}},Ke=["id"],Ne=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],He=["id"];function Re(t,n,e,c,u,l){var m=Q("PVMenuitem"),o=Q("Portal");return p(),z(o,{appendTo:t.appendTo,disabled:!t.popup},{default:C(function(){return[x(he,O({name:"p-connected-overlay",onEnter:l.onEnter,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave},t.ptm("transition")),{default:C(function(){return[!t.popup||u.overlayVisible?(p(),g("div",O({key:0,ref:l.containerRef,id:u.id,class:t.cx("root"),onClick:n[3]||(n[3]=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)})},t.ptmi("root")),[t.$slots.start?(p(),g("div",O({key:0,class:t.cx("start")},t.ptm("start")),[D(t.$slots,"start")],16)):w("",!0),v("ul",O({ref:l.listRef,id:u.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":u.focused?l.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return l.onListFocus&&l.onListFocus.apply(l,arguments)}),onBlur:n[1]||(n[1]=function(){return l.onListBlur&&l.onListBlur.apply(l,arguments)}),onKeydown:n[2]||(n[2]=function(){return l.onListKeyDown&&l.onListKeyDown.apply(l,arguments)})},t.ptm("list")),[(p(!0),g(M,null,X(t.model,function(f,r){return p(),g(M,{key:l.label(f)+r.toString()},[f.items&&l.visible(f)&&!f.separator?(p(),g(M,{key:0},[f.items?(p(),g("li",O({key:0,id:u.id+"_"+r,class:[t.cx("submenuLabel"),f.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[D(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:f},function(){return[U(G(l.label(f)),1)]})],16,He)):w("",!0),(p(!0),g(M,null,X(f.items,function(i,s){return p(),g(M,{key:i.label+r+"_"+s},[l.visible(i)&&!i.separator?(p(),z(m,{key:0,id:u.id+"_"+r+"_"+s,item:i,templates:t.$slots,focusedOptionId:l.focusedOptionId,unstyled:t.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):l.visible(i)&&i.separator?(p(),g("li",O({key:"separator"+r+s,class:[t.cx("separator"),f.class],style:i.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):w("",!0)],64)}),128))],64)):l.visible(f)&&f.separator?(p(),g("li",O({key:"separator"+r.toString(),class:[t.cx("separator"),f.class],style:f.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(p(),z(m,{key:l.label(f)+r.toString(),id:u.id+"_"+r,item:f,index:r,templates:t.$slots,focusedOptionId:l.focusedOptionId,unstyled:t.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Ne),t.$slots.end?(p(),g("div",O({key:1,class:t.cx("end")},t.ptm("end")),[D(t.$slots,"end")],16)):w("",!0)],16,Ke)):w("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ie.render=Re;const We={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ze=v("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"},null,-1),qe=[Ze],Ge=ve({__name:"IconWeb",setup(t){return(n,e)=>(p(),g("svg",We,qe))}});var je=function(n){var e=n.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(e("divider.horizontal.margin"),`;
    padding: `).concat(e("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(e("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(e("divider.vertical.margin"),`;
    padding: `).concat(e("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(e("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(e("divider.content.background"),`;
    color: `).concat(e("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`)},Je={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},Qe={root:function(n){var e=n.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},Xe=te.extend({name:"divider",theme:je,classes:Qe,inlineStyles:Je}),Ye={name:"BaseDivider",extends:q,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Xe,provide:function(){return{$pcDivider:this,$parentInstance:this}}},re={name:"Divider",extends:Ye,inheritAttrs:!1},$e=["aria-orientation"];function et(t,n,e,c,u,l){return p(),g("div",O({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(p(),g("div",O({key:0,class:t.cx("content")},t.ptm("content")),[D(t.$slots,"default")],16)):w("",!0)],16,$e)}re.render=et;function tt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var oe={exports:{}},se={exports:{}};(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,c){return e<<c|e>>>32-c},rotr:function(e,c){return e<<32-c|e>>>c},endian:function(e){if(e.constructor==Number)return n.rotl(e,8)&16711935|n.rotl(e,24)&4278255360;for(var c=0;c<e.length;c++)e[c]=n.endian(e[c]);return e},randomBytes:function(e){for(var c=[];e>0;e--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(e){for(var c=[],u=0,l=0;u<e.length;u++,l+=8)c[l>>>5]|=e[u]<<24-l%32;return c},wordsToBytes:function(e){for(var c=[],u=0;u<e.length*32;u+=8)c.push(e[u>>>5]>>>24-u%32&255);return c},bytesToHex:function(e){for(var c=[],u=0;u<e.length;u++)c.push((e[u]>>>4).toString(16)),c.push((e[u]&15).toString(16));return c.join("")},hexToBytes:function(e){for(var c=[],u=0;u<e.length;u+=2)c.push(parseInt(e.substr(u,2),16));return c},bytesToBase64:function(e){for(var c=[],u=0;u<e.length;u+=3)for(var l=e[u]<<16|e[u+1]<<8|e[u+2],m=0;m<4;m++)u*8+m*6<=e.length*8?c.push(t.charAt(l>>>6*(3-m)&63)):c.push("=");return c.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],u=0,l=0;u<e.length;l=++u%4)l!=0&&c.push((t.indexOf(e.charAt(u-1))&Math.pow(2,-2*l+8)-1)<<l*2|t.indexOf(e.charAt(u))>>>6-l*2);return c}};se.exports=n})();var nt=se.exports,Z={utf8:{stringToBytes:function(t){return Z.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(Z.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var n=[],e=0;e<t.length;e++)n.push(t.charCodeAt(e)&255);return n},bytesToString:function(t){for(var n=[],e=0;e<t.length;e++)n.push(String.fromCharCode(t[e]));return n.join("")}}},$=Z;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var it=function(t){return t!=null&&(ae(t)||rt(t)||!!t._isBuffer)};function ae(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function rt(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&ae(t.slice(0,0))}(function(){var t=nt,n=$.utf8,e=it,c=$.bin,u=function(l,m){l.constructor==String?m&&m.encoding==="binary"?l=c.stringToBytes(l):l=n.stringToBytes(l):e(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var o=t.bytesToWords(l),f=l.length*8,r=1732584193,i=-271733879,s=-1732584194,a=271733878,d=0;d<o.length;d++)o[d]=(o[d]<<8|o[d]>>>24)&16711935|(o[d]<<24|o[d]>>>8)&4278255360;o[f>>>5]|=128<<f%32,o[(f+64>>>9<<4)+14]=f;for(var h=u._ff,I=u._gg,k=u._hh,L=u._ii,d=0;d<o.length;d+=16){var y=r,b=i,F=s,B=a;r=h(r,i,s,a,o[d+0],7,-680876936),a=h(a,r,i,s,o[d+1],12,-389564586),s=h(s,a,r,i,o[d+2],17,606105819),i=h(i,s,a,r,o[d+3],22,-1044525330),r=h(r,i,s,a,o[d+4],7,-176418897),a=h(a,r,i,s,o[d+5],12,1200080426),s=h(s,a,r,i,o[d+6],17,-1473231341),i=h(i,s,a,r,o[d+7],22,-45705983),r=h(r,i,s,a,o[d+8],7,1770035416),a=h(a,r,i,s,o[d+9],12,-1958414417),s=h(s,a,r,i,o[d+10],17,-42063),i=h(i,s,a,r,o[d+11],22,-1990404162),r=h(r,i,s,a,o[d+12],7,1804603682),a=h(a,r,i,s,o[d+13],12,-40341101),s=h(s,a,r,i,o[d+14],17,-1502002290),i=h(i,s,a,r,o[d+15],22,1236535329),r=I(r,i,s,a,o[d+1],5,-165796510),a=I(a,r,i,s,o[d+6],9,-1069501632),s=I(s,a,r,i,o[d+11],14,643717713),i=I(i,s,a,r,o[d+0],20,-373897302),r=I(r,i,s,a,o[d+5],5,-701558691),a=I(a,r,i,s,o[d+10],9,38016083),s=I(s,a,r,i,o[d+15],14,-660478335),i=I(i,s,a,r,o[d+4],20,-405537848),r=I(r,i,s,a,o[d+9],5,568446438),a=I(a,r,i,s,o[d+14],9,-1019803690),s=I(s,a,r,i,o[d+3],14,-187363961),i=I(i,s,a,r,o[d+8],20,1163531501),r=I(r,i,s,a,o[d+13],5,-1444681467),a=I(a,r,i,s,o[d+2],9,-51403784),s=I(s,a,r,i,o[d+7],14,1735328473),i=I(i,s,a,r,o[d+12],20,-1926607734),r=k(r,i,s,a,o[d+5],4,-378558),a=k(a,r,i,s,o[d+8],11,-2022574463),s=k(s,a,r,i,o[d+11],16,1839030562),i=k(i,s,a,r,o[d+14],23,-35309556),r=k(r,i,s,a,o[d+1],4,-1530992060),a=k(a,r,i,s,o[d+4],11,1272893353),s=k(s,a,r,i,o[d+7],16,-155497632),i=k(i,s,a,r,o[d+10],23,-1094730640),r=k(r,i,s,a,o[d+13],4,681279174),a=k(a,r,i,s,o[d+0],11,-358537222),s=k(s,a,r,i,o[d+3],16,-722521979),i=k(i,s,a,r,o[d+6],23,76029189),r=k(r,i,s,a,o[d+9],4,-640364487),a=k(a,r,i,s,o[d+12],11,-421815835),s=k(s,a,r,i,o[d+15],16,530742520),i=k(i,s,a,r,o[d+2],23,-995338651),r=L(r,i,s,a,o[d+0],6,-198630844),a=L(a,r,i,s,o[d+7],10,1126891415),s=L(s,a,r,i,o[d+14],15,-1416354905),i=L(i,s,a,r,o[d+5],21,-57434055),r=L(r,i,s,a,o[d+12],6,1700485571),a=L(a,r,i,s,o[d+3],10,-1894986606),s=L(s,a,r,i,o[d+10],15,-1051523),i=L(i,s,a,r,o[d+1],21,-2054922799),r=L(r,i,s,a,o[d+8],6,1873313359),a=L(a,r,i,s,o[d+15],10,-30611744),s=L(s,a,r,i,o[d+6],15,-1560198380),i=L(i,s,a,r,o[d+13],21,1309151649),r=L(r,i,s,a,o[d+4],6,-145523070),a=L(a,r,i,s,o[d+11],10,-1120210379),s=L(s,a,r,i,o[d+2],15,718787259),i=L(i,s,a,r,o[d+9],21,-343485551),r=r+y>>>0,i=i+b>>>0,s=s+F>>>0,a=a+B>>>0}return t.endian([r,i,s,a])};u._ff=function(l,m,o,f,r,i,s){var a=l+(m&o|~m&f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},u._gg=function(l,m,o,f,r,i,s){var a=l+(m&f|o&~f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},u._hh=function(l,m,o,f,r,i,s){var a=l+(m^o^f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},u._ii=function(l,m,o,f,r,i,s){var a=l+(o^(m|~f))+(r>>>0)+s;return(a<<i|a>>>32-i)+m},u._blocksize=16,u._digestsize=16,oe.exports=function(l,m){if(l==null)throw new Error("Illegal argument "+l);var o=t.wordsToBytes(u(l,m));return m&&m.asBytes?o:m&&m.asString?c.bytesToString(o):t.bytesToHex(o)}})();var ot=oe.exports;const ee=tt(ot),st=be("auth",()=>{const t=S(!0),n=S(""),e=S("none"),c=R({}),u=()=>t.value,l=()=>n.value,m=()=>e.value,o=()=>ye(c);return{isLogin:t,userName:n,userPermission:e,userInfo:c,getIsLogin:u,getUserName:l,getUserPermission:m,getUserInfo:o,setIsLogin:d=>t.value=!!d,setUserName:d=>n.value=d,setUserPermission:d=>e.value=d,setUserInfo:(d,h)=>c[d]=h,coverUserInfo:d=>{Object.keys(o()).forEach(h=>delete c[h]),Object.keys(d).forEach(h=>c[h]=d[h])}}}),P=t=>(Oe("data-v-bdc1753c"),t=t(),_e(),t),at=P(()=>v("span",null,"未登录",-1)),lt=P(()=>v("div",null,[v("h2",null,"认证界面")],-1)),dt={key:0,AuthCardDialogAuthed:""},ut=P(()=>v("div",null,[v("table",null,[v("hr")])],-1)),ct={key:1,AuthCardDialogUnauthed:""},mt=P(()=>v("label",null,"账户名",-1)),ft=P(()=>v("label",null,"密码",-1)),pt=P(()=>v("label",null,"管理员秘钥",-1)),ht=P(()=>v("br",null,null,-1)),vt={__name:"AuthShow",setup(t){const n=N(()=>H(()=>import("./IconUser-CwMAJOLZ.js"),__vite__mapDeps([0,1,2]))),e=N(()=>H(()=>import("./index-D8t-L7d4.js").then(y=>y.$),__vite__mapDeps([1,2]))),c=N(()=>H(()=>import("./index-B4UPiWqD.js"),__vite__mapDeps([3,1,2,4,5]))),u=st(),l=S(!1),m=S(""),o=S(!1),f=S(""),r=S(""),i=Ie(),s=()=>m.value.length==0||r.value.length==0,a=()=>ee(ee(r.value+"DAOLUOLTS").toString()),d=()=>{l.value=!0,o.value=!1,m.value="",r.value="",f.value=""},h=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});if(!o.value)return o.value=!0;E("/auth/regist",{method:"post",data:{userName:m.value,userPassword:a(),adminKey:f.value}}).then(y=>{const b=y.data;u.setUserName(b.userName),u.setUserPermission(b.userPermission),u.coverUserInfo(b.userInfo),u.setIsLogin(!0)}).catch(y=>{i.add({severity:"error",summary:"错误",detail:y,life:3e3})})},I=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});E("/auth/login",{method:"post",data:{userName:m.value,userPassword:a()}}).then(y=>{const b=y.data;u.setUserName(b.userName),u.setUserPermission(b.userPermission),u.coverUserInfo(b.userInfo),u.setIsLogin(!0)}).catch(y=>{i.add({severity:"error",summary:"错误",detail:y,life:3e3})})},k=()=>{if(!u.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});E("/auth/logout",{method:"post"}).then(y=>{y.data,u.setIsLogin(!1),u.setUserName(""),u.setUserPermission("none"),u.coverUserInfo({}),i.add({severity:"success",summary:"成功",detail:"完成登出，现在是未登录状态。",life:3e3}),location.reload()}).catch(y=>{i.add({severity:"error",summary:"错误",detail:y,life:3e3})})},L=()=>{if(!u.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});E("/auth/checkLogin",{method:"post"}).then(y=>{const b=y.data;u.setUserName(b.userName),u.setUserPermission(b.userPermission),u.coverUserInfo(b.userInfo),u.setIsLogin(!0)}).catch(y=>{i.add({severity:"error",summary:"错误",detail:y,life:3e3})})};return(y,b)=>{const F=ke,B=re,V=Le;return p(),g(M,null,[v("div",{AuthCardContainer:"",onClick:d},[x(T(n)),at]),x(T(c),{visible:l.value,"onUpdate:visible":b[3]||(b[3]=A=>l.value=A),modal:"",header:"认证界面",style:{maxWidth:"50vw",minWidth:"350px"}},{header:C(()=>[lt]),default:C(()=>[T(u).isLogin?(p(),g("div",dt,[ut,v("div",null,[x(F,{size:"small",onClick:L},{default:C(()=>[U("刷新")]),_:1}),x(B,{layout:"vertical"}),x(F,{size:"small",onClick:k},{default:C(()=>[U("登出")]),_:1})])])):(p(),g("div",ct,[v("div",null,[x(T(e),null,{default:C(()=>[x(V,{size:"small",modelValue:m.value,"onUpdate:modelValue":b[0]||(b[0]=A=>m.value=A),placeholder:"必填"},null,8,["modelValue"]),mt]),_:1}),x(T(e),null,{default:C(()=>[x(V,{size:"small",type:"password",modelValue:r.value,"onUpdate:modelValue":b[1]||(b[1]=A=>r.value=A),placeholder:"必填"},null,8,["modelValue"]),ft]),_:1}),o.value?(p(),z(T(e),{key:0},{default:C(()=>[x(V,{size:"small",modelValue:f.value,"onUpdate:modelValue":b[2]||(b[2]=A=>f.value=A),placeholder:"选填"},null,8,["modelValue"]),pt]),_:1})):w("",!0)]),ht,v("div",null,[x(F,{size:"small",onClick:h,severity:"secondary"},{default:C(()=>[U("注册")]),_:1}),x(B,{layout:"vertical"}),x(F,{size:"small",onClick:I},{default:C(()=>[U("登录")]),_:1})])]))]),_:1},8,["visible"])],64)}}},bt=ge(vt,[["__scopeId","data-v-bdc1753c"]]),yt={AsideBarMenuStart:""},gt={AsideBarMenuStartAuth:""},It={AsideBarMenuItem:""},Ot={__name:"AsideBar",setup(t){const n=xe(),e=R([]),c=R([{label:"主面板",command:()=>n.push("/")},{label:"文档",items:[{label:"文档-1",command:()=>alert("文档1"),data:"Asdasd"},{label:"文档-2"},{label:"文档-3"}]},{label:"关于",command:()=>n.push("/About")}]);return Ce(()=>{e.unshift({separator:!0});for(let u=0;u<c.length;u++)e.push(c[u],{separator:!0})}),(u,l)=>(p(),z(T(ie),{AsideBarMenuMain:"",model:e,style:{}},{start:C(()=>[v("div",yt,[v("span",null,[x(Ge,{style:{"font-size":"35px"}}),U("Hysteria2ConfWeb ")])]),v("div",gt,[x(bt)])]),item:C(({item:m,props:o})=>[v("div",It,[v("span",null,G(m.label),1)])]),_:1},8,["model"]))}};export{Ot as default};
