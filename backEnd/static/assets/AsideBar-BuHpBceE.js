const __vite__fileDeps=["assets/IconUser-jgTM9VbO.js","assets/index-y2OTdhSz.js","assets/index-DBoWeEB5.css","assets/index-DqRxSBt9.js","assets/index-BYsJsfdP.js","assets/index-aIwPl2OI.js","assets/index-DCbf2nc8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as de,B as ne,U as Q,Z as H,D as x,C as ue,s as J,O as ce,m as _,R as me,r as fe,o as h,c as y,a as p,w as pe,b as F,n as he,d as X,e as A,t as P,f as Y,g as C,h as O,T as ve,i as V,F as U,j as Z,k as M,l as be,q as ye,u as z,v as q,x as ge,_ as Ie,y as ke,z as Le,A as S,E as R,G as W,H as D,I as _e,J as Oe,K as xe,L as Ce,M as we,N as Se}from"./index-y2OTdhSz.js";import{s as Ae}from"./index-DCbf2nc8.js";var Te=de(),ze=function(n){var e=n.dt;return`
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
`)},Ue={root:function(n){var e=n.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var e=n.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Pe=ne.extend({name:"menu",theme:ze,classes:Ue}),Fe={name:"BaseMenu",extends:J,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Pe,provide:function(){return{$pcMenu:this,$parentInstance:this}}},ie={name:"Menuitem",hostName:"Menu",extends:J,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,e){return n&&n.item?ce.getItemValue(n.item[e]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:_({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:_({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:_({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:me}},Me=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Be=["href","target"];function Ee(t,n,e,c,d,l){var m=fe("ripple");return l.visible()?(h(),y("li",_({key:0,id:e.id,class:[t.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":l.label(),"aria-disabled":l.disabled()},l.getPTOptions("item"),{"data-p-focused":l.isItemFocused(),"data-p-disabled":l.disabled()||!1}),[p("div",_({class:t.cx("itemContent"),onClick:n[0]||(n[0]=function(o){return l.onItemClick(o)}),onMousemove:n[1]||(n[1]=function(o){return l.onItemMouseMove(o)})},l.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(h(),F(X(e.templates.item),{key:1,item:e.item,label:l.label(),props:l.getMenuItemProps(e.item)},null,8,["item","label","props"])):A("",!0):pe((h(),y("a",_({key:0,href:e.item.url,class:t.cx("itemLink"),target:e.item.target,tabindex:"-1","aria-hidden":"true"},l.getPTOptions("itemLink")),[e.templates.itemicon?(h(),F(X(e.templates.itemicon),{key:0,item:e.item,class:he(t.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(h(),y("span",_({key:1,class:[t.cx("itemIcon"),e.item.icon]},l.getPTOptions("itemIcon")),null,16)):A("",!0),p("span",_({class:t.cx("itemLabel")},l.getPTOptions("itemLabel")),P(l.label()),17)],16,Be)),[[m]])],16)],16,Me)):A("",!0)}ie.render=Ee;function $(t){return Ne(t)||Ke(t)||Ve(t)||De()}function De(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(t,n){if(t){if(typeof t=="string")return j(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?j(t,n):void 0}}function Ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ne(t){if(Array.isArray(t))return j(t)}function j(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,c=Array(n);e<n;e++)c[e]=t[e];return c}var re={name:"Menu",extends:Fe,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||Q()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||Q(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&H.clear(this.container),this.container=null},methods:{itemClick:function(n){var e=n.item;this.disabled(e)||(e.command&&e.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(x.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)x.focus(this.target),this.hide(),n.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var e=x.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),c=e&&x.findSingle(e,'a[data-pc-section="itemlink"]');this.popup&&x.focus(this.target),c?c.click():e&&e.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=$(e).findIndex(function(d){return d.id===n});return c>-1?c+1:0},findPrevOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=$(e).findIndex(function(d){return d.id===n});return c>-1?c-1:0},changeFocusedOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=n>=e.length?e.length-1:n<0?0:n;c>-1&&(this.focusedOptionIndex=e[c].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){x.addStyles(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&H.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&x.focus(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&H.clear(n)},alignOverlay:function(){x.absolutePosition(this.container,this.target);var n=x.getOuterWidth(this.target);n>x.getOuterWidth(this.container)&&(this.container.style.minWidth=x.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(e){var c=n.container&&!n.container.contains(e.target),d=!(n.target&&(n.target===e.target||n.target.contains(e.target)));n.overlayVisible&&c&&d?n.hide():!n.popup&&c&&d&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new ue(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!x.isTouchDevice()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){Te.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ie,Portal:Ae}},He=["id"],Re=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],We=["id"];function Ze(t,n,e,c,d,l){var m=Y("PVMenuitem"),o=Y("Portal");return h(),F(o,{appendTo:t.appendTo,disabled:!t.popup},{default:C(function(){return[O(ve,_({name:"p-connected-overlay",onEnter:l.onEnter,onLeave:l.onLeave,onAfterLeave:l.onAfterLeave},t.ptm("transition")),{default:C(function(){return[!t.popup||d.overlayVisible?(h(),y("div",_({key:0,ref:l.containerRef,id:d.id,class:t.cx("root"),onClick:n[3]||(n[3]=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)})},t.ptmi("root")),[t.$slots.start?(h(),y("div",_({key:0,class:t.cx("start")},t.ptm("start")),[V(t.$slots,"start")],16)):A("",!0),p("ul",_({ref:l.listRef,id:d.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":d.focused?l.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return l.onListFocus&&l.onListFocus.apply(l,arguments)}),onBlur:n[1]||(n[1]=function(){return l.onListBlur&&l.onListBlur.apply(l,arguments)}),onKeydown:n[2]||(n[2]=function(){return l.onListKeyDown&&l.onListKeyDown.apply(l,arguments)})},t.ptm("list")),[(h(!0),y(U,null,Z(t.model,function(f,r){return h(),y(U,{key:l.label(f)+r.toString()},[f.items&&l.visible(f)&&!f.separator?(h(),y(U,{key:0},[f.items?(h(),y("li",_({key:0,id:d.id+"_"+r,class:[t.cx("submenuLabel"),f.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[V(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:f},function(){return[M(P(l.label(f)),1)]})],16,We)):A("",!0),(h(!0),y(U,null,Z(f.items,function(i,s){return h(),y(U,{key:i.label+r+"_"+s},[l.visible(i)&&!i.separator?(h(),F(m,{key:0,id:d.id+"_"+r+"_"+s,item:i,templates:t.$slots,focusedOptionId:l.focusedOptionId,unstyled:t.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):l.visible(i)&&i.separator?(h(),y("li",_({key:"separator"+r+s,class:[t.cx("separator"),f.class],style:i.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):A("",!0)],64)}),128))],64)):l.visible(f)&&f.separator?(h(),y("li",_({key:"separator"+r.toString(),class:[t.cx("separator"),f.class],style:f.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(h(),F(m,{key:l.label(f)+r.toString(),id:d.id+"_"+r,item:f,index:r,templates:t.$slots,focusedOptionId:l.focusedOptionId,unstyled:t.unstyled,onItemClick:l.itemClick,onItemMousemove:l.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Re),t.$slots.end?(h(),y("div",_({key:1,class:t.cx("end")},t.ptm("end")),[V(t.$slots,"end")],16)):A("",!0)],16,He)):A("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}re.render=Ze;const qe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},je=p("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"},null,-1),Ge=[je],Je=be({__name:"IconWeb",setup(t){return(n,e)=>(h(),y("svg",qe,Ge))}});var Qe=function(n){var e=n.dt;return`
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
`)},Xe={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},Ye={root:function(n){var e=n.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},$e=ne.extend({name:"divider",theme:Qe,classes:Ye,inlineStyles:Xe}),et={name:"BaseDivider",extends:J,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:$e,provide:function(){return{$pcDivider:this,$parentInstance:this}}},oe={name:"Divider",extends:et,inheritAttrs:!1},tt=["aria-orientation"];function nt(t,n,e,c,d,l){return h(),y("div",_({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(h(),y("div",_({key:0,class:t.cx("content")},t.ptm("content")),[V(t.$slots,"default")],16)):A("",!0)],16,tt)}oe.render=nt;function it(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var se={exports:{}},ae={exports:{}};(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,c){return e<<c|e>>>32-c},rotr:function(e,c){return e<<32-c|e>>>c},endian:function(e){if(e.constructor==Number)return n.rotl(e,8)&16711935|n.rotl(e,24)&4278255360;for(var c=0;c<e.length;c++)e[c]=n.endian(e[c]);return e},randomBytes:function(e){for(var c=[];e>0;e--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(e){for(var c=[],d=0,l=0;d<e.length;d++,l+=8)c[l>>>5]|=e[d]<<24-l%32;return c},wordsToBytes:function(e){for(var c=[],d=0;d<e.length*32;d+=8)c.push(e[d>>>5]>>>24-d%32&255);return c},bytesToHex:function(e){for(var c=[],d=0;d<e.length;d++)c.push((e[d]>>>4).toString(16)),c.push((e[d]&15).toString(16));return c.join("")},hexToBytes:function(e){for(var c=[],d=0;d<e.length;d+=2)c.push(parseInt(e.substr(d,2),16));return c},bytesToBase64:function(e){for(var c=[],d=0;d<e.length;d+=3)for(var l=e[d]<<16|e[d+1]<<8|e[d+2],m=0;m<4;m++)d*8+m*6<=e.length*8?c.push(t.charAt(l>>>6*(3-m)&63)):c.push("=");return c.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],d=0,l=0;d<e.length;l=++d%4)l!=0&&c.push((t.indexOf(e.charAt(d-1))&Math.pow(2,-2*l+8)-1)<<l*2|t.indexOf(e.charAt(d))>>>6-l*2);return c}};ae.exports=n})();var rt=ae.exports,G={utf8:{stringToBytes:function(t){return G.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(G.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var n=[],e=0;e<t.length;e++)n.push(t.charCodeAt(e)&255);return n},bytesToString:function(t){for(var n=[],e=0;e<t.length;e++)n.push(String.fromCharCode(t[e]));return n.join("")}}},ee=G;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var ot=function(t){return t!=null&&(le(t)||st(t)||!!t._isBuffer)};function le(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function st(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&le(t.slice(0,0))}(function(){var t=rt,n=ee.utf8,e=ot,c=ee.bin,d=function(l,m){l.constructor==String?m&&m.encoding==="binary"?l=c.stringToBytes(l):l=n.stringToBytes(l):e(l)?l=Array.prototype.slice.call(l,0):!Array.isArray(l)&&l.constructor!==Uint8Array&&(l=l.toString());for(var o=t.bytesToWords(l),f=l.length*8,r=1732584193,i=-271733879,s=-1732584194,a=271733878,u=0;u<o.length;u++)o[u]=(o[u]<<8|o[u]>>>24)&16711935|(o[u]<<24|o[u]>>>8)&4278255360;o[f>>>5]|=128<<f%32,o[(f+64>>>9<<4)+14]=f;for(var v=d._ff,g=d._gg,I=d._hh,k=d._ii,u=0;u<o.length;u+=16){var K=r,L=i,b=s,B=a;r=v(r,i,s,a,o[u+0],7,-680876936),a=v(a,r,i,s,o[u+1],12,-389564586),s=v(s,a,r,i,o[u+2],17,606105819),i=v(i,s,a,r,o[u+3],22,-1044525330),r=v(r,i,s,a,o[u+4],7,-176418897),a=v(a,r,i,s,o[u+5],12,1200080426),s=v(s,a,r,i,o[u+6],17,-1473231341),i=v(i,s,a,r,o[u+7],22,-45705983),r=v(r,i,s,a,o[u+8],7,1770035416),a=v(a,r,i,s,o[u+9],12,-1958414417),s=v(s,a,r,i,o[u+10],17,-42063),i=v(i,s,a,r,o[u+11],22,-1990404162),r=v(r,i,s,a,o[u+12],7,1804603682),a=v(a,r,i,s,o[u+13],12,-40341101),s=v(s,a,r,i,o[u+14],17,-1502002290),i=v(i,s,a,r,o[u+15],22,1236535329),r=g(r,i,s,a,o[u+1],5,-165796510),a=g(a,r,i,s,o[u+6],9,-1069501632),s=g(s,a,r,i,o[u+11],14,643717713),i=g(i,s,a,r,o[u+0],20,-373897302),r=g(r,i,s,a,o[u+5],5,-701558691),a=g(a,r,i,s,o[u+10],9,38016083),s=g(s,a,r,i,o[u+15],14,-660478335),i=g(i,s,a,r,o[u+4],20,-405537848),r=g(r,i,s,a,o[u+9],5,568446438),a=g(a,r,i,s,o[u+14],9,-1019803690),s=g(s,a,r,i,o[u+3],14,-187363961),i=g(i,s,a,r,o[u+8],20,1163531501),r=g(r,i,s,a,o[u+13],5,-1444681467),a=g(a,r,i,s,o[u+2],9,-51403784),s=g(s,a,r,i,o[u+7],14,1735328473),i=g(i,s,a,r,o[u+12],20,-1926607734),r=I(r,i,s,a,o[u+5],4,-378558),a=I(a,r,i,s,o[u+8],11,-2022574463),s=I(s,a,r,i,o[u+11],16,1839030562),i=I(i,s,a,r,o[u+14],23,-35309556),r=I(r,i,s,a,o[u+1],4,-1530992060),a=I(a,r,i,s,o[u+4],11,1272893353),s=I(s,a,r,i,o[u+7],16,-155497632),i=I(i,s,a,r,o[u+10],23,-1094730640),r=I(r,i,s,a,o[u+13],4,681279174),a=I(a,r,i,s,o[u+0],11,-358537222),s=I(s,a,r,i,o[u+3],16,-722521979),i=I(i,s,a,r,o[u+6],23,76029189),r=I(r,i,s,a,o[u+9],4,-640364487),a=I(a,r,i,s,o[u+12],11,-421815835),s=I(s,a,r,i,o[u+15],16,530742520),i=I(i,s,a,r,o[u+2],23,-995338651),r=k(r,i,s,a,o[u+0],6,-198630844),a=k(a,r,i,s,o[u+7],10,1126891415),s=k(s,a,r,i,o[u+14],15,-1416354905),i=k(i,s,a,r,o[u+5],21,-57434055),r=k(r,i,s,a,o[u+12],6,1700485571),a=k(a,r,i,s,o[u+3],10,-1894986606),s=k(s,a,r,i,o[u+10],15,-1051523),i=k(i,s,a,r,o[u+1],21,-2054922799),r=k(r,i,s,a,o[u+8],6,1873313359),a=k(a,r,i,s,o[u+15],10,-30611744),s=k(s,a,r,i,o[u+6],15,-1560198380),i=k(i,s,a,r,o[u+13],21,1309151649),r=k(r,i,s,a,o[u+4],6,-145523070),a=k(a,r,i,s,o[u+11],10,-1120210379),s=k(s,a,r,i,o[u+2],15,718787259),i=k(i,s,a,r,o[u+9],21,-343485551),r=r+K>>>0,i=i+L>>>0,s=s+b>>>0,a=a+B>>>0}return t.endian([r,i,s,a])};d._ff=function(l,m,o,f,r,i,s){var a=l+(m&o|~m&f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},d._gg=function(l,m,o,f,r,i,s){var a=l+(m&f|o&~f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},d._hh=function(l,m,o,f,r,i,s){var a=l+(m^o^f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},d._ii=function(l,m,o,f,r,i,s){var a=l+(o^(m|~f))+(r>>>0)+s;return(a<<i|a>>>32-i)+m},d._blocksize=16,d._digestsize=16,se.exports=function(l,m){if(l==null)throw new Error("Illegal argument "+l);var o=t.wordsToBytes(d(l,m));return m&&m.asBytes?o:m&&m.asString?c.bytesToString(o):t.bytesToHex(o)}})();var at=se.exports;const te=it(at),lt=ye("auth",()=>{const t=z(!1),n=z(""),e=z("none"),c=q({}),d=()=>t.value,l=()=>n.value,m=()=>e.value,o=()=>ge(c);return{isLogin:t,userName:n,userPermission:e,userInfo:c,getIsLogin:d,getUserName:l,getUserPermission:m,getUserInfo:o,setIsLogin:u=>t.value=!!u,setUserName:u=>n.value=u,setUserPermission:u=>e.value=u,setUserInfo:(u,v)=>c[u]=v,coverUserInfo:u=>{Object.keys(o()).forEach(v=>delete c[v]),Object.keys(u).forEach(v=>c[v]=u[v])}}}),T=t=>(xe("data-v-45d3e08f"),t=t(),Ce(),t),dt=T(()=>p("span",null,"未登录",-1)),ut=T(()=>p("div",null,[p("h2",null,"认证界面")],-1)),ct={key:0,AuthCardDialogAuthed:""},mt={style:{width:"100%"}},ft=T(()=>p("td",null,"用户名",-1)),pt=T(()=>p("td",null,"权限级别",-1)),ht={colspan:"2"},vt=T(()=>p("br",null,null,-1)),bt=T(()=>p("br",null,null,-1)),yt={key:1,AuthCardDialogUnauthed:""},gt=T(()=>p("label",null,"账户名",-1)),It=T(()=>p("label",null,"密码",-1)),kt=T(()=>p("label",null,"管理员秘钥",-1)),Lt=T(()=>p("br",null,null,-1)),_t={__name:"AuthShow",setup(t){const n=R(()=>W(()=>import("./IconUser-jgTM9VbO.js"),__vite__mapDeps([0,1,2]))),e=R(()=>W(()=>import("./index-DqRxSBt9.js"),__vite__mapDeps([3,1,2]))),c=R(()=>W(()=>import("./index-BYsJsfdP.js"),__vite__mapDeps([4,1,2,5,6]))),d=lt(),l=z(!1),m=z(""),o=z(!1),f=z(""),r=z(""),i=ke(),s=()=>m.value.length==0||r.value.length==0,a=()=>te(te(r.value+"DAOLUOLTS").toString()),u=()=>{l.value=!0,o.value=!1,m.value="",r.value="",f.value=""},v=Le(()=>(console.log(Object.keys(d.getUserInfo())),Object.keys(d.getUserInfo()))),g=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});if(!o.value)return o.value=!0;D("/auth/regist",{method:"post",data:{userName:m.value,userPassword:a(),adminKey:f.value}}).then(L=>{const b=L.data;d.setUserName(b.userName),d.setUserPermission(b.userPermission),d.coverUserInfo(b.userInfo),d.setIsLogin(!0)}).catch(L=>{i.add({severity:"error",summary:"错误",detail:L,life:3e3})})},I=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});D("/auth/login",{method:"post",data:{userName:m.value,userPassword:a()}}).then(L=>{const b=L.data;d.setUserName(b.userName),d.setUserPermission(b.userPermission),d.coverUserInfo(b.userInfo),d.setIsLogin(!0)}).catch(L=>{i.add({severity:"error",summary:"错误",detail:L,life:3e3})})},k=()=>{if(!d.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});D("/auth/logout",{method:"post"}).then(L=>{L.data,d.setIsLogin(!1),d.setUserName(""),d.setUserPermission("none"),d.coverUserInfo({}),i.add({severity:"success",summary:"成功",detail:"完成登出，现在是未登录状态。",life:3e3}),location.reload()}).catch(L=>{i.add({severity:"error",summary:"错误",detail:L,life:3e3})})},K=()=>{if(!d.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});D("/auth/checkLogin",{method:"post"}).then(L=>{const b=L.data;d.setUserName(b.userName),d.setUserPermission(b.userPermission),d.coverUserInfo(b.userInfo),d.setIsLogin(!0)}).catch(L=>{i.add({severity:"error",summary:"错误",detail:L,life:3e3})})};return(L,b)=>{const B=oe,E=_e,N=Oe;return h(),y(U,null,[p("div",{AuthCardContainer:"",onClick:u},[O(S(n)),dt]),O(S(c),{visible:l.value,"onUpdate:visible":b[3]||(b[3]=w=>l.value=w),modal:"",header:"认证界面",style:{maxWidth:"50vw",minWidth:"350px"}},{header:C(()=>[ut]),default:C(()=>[S(d).isLogin?(h(),y("div",ct,[p("div",null,[p("table",mt,[p("tbody",null,[p("tr",null,[ft,p("td",null,P(S(d).getUserName()),1)]),p("tr",null,[pt,p("td",null,P(S(d).getUserPermission()),1)]),p("tr",null,[p("td",ht,[O(B,{style:{width:"100%"}})])]),(h(!0),y(U,null,Z(v.value,w=>(h(),y("tr",null,[p("td",null,P(w),1),p("td",null,P(S(d).getUserInfo()[w]),1)]))),256))])]),vt,bt]),p("div",null,[O(E,{size:"small",onClick:K},{default:C(()=>[M("刷新")]),_:1}),O(B,{layout:"vertical"}),O(E,{size:"small",onClick:k},{default:C(()=>[M("登出")]),_:1})])])):(h(),y("div",yt,[p("div",null,[O(S(e),null,{default:C(()=>[O(N,{size:"small",modelValue:m.value,"onUpdate:modelValue":b[0]||(b[0]=w=>m.value=w),placeholder:"必填"},null,8,["modelValue"]),gt]),_:1}),O(S(e),null,{default:C(()=>[O(N,{size:"small",type:"password",modelValue:r.value,"onUpdate:modelValue":b[1]||(b[1]=w=>r.value=w),placeholder:"必填"},null,8,["modelValue"]),It]),_:1}),o.value?(h(),F(S(e),{key:0},{default:C(()=>[O(N,{size:"small",modelValue:f.value,"onUpdate:modelValue":b[2]||(b[2]=w=>f.value=w),placeholder:"选填"},null,8,["modelValue"]),kt]),_:1})):A("",!0)]),Lt,p("div",null,[O(E,{size:"small",onClick:g,severity:"secondary"},{default:C(()=>[M("注册")]),_:1}),O(B,{layout:"vertical"}),O(E,{size:"small",onClick:I},{default:C(()=>[M("登录")]),_:1})])]))]),_:1},8,["visible"])],64)}}},Ot=Ie(_t,[["__scopeId","data-v-45d3e08f"]]),xt={AsideBarMenuStart:""},Ct={AsideBarMenuStartAuth:""},wt={AsideBarMenuItem:""},Tt={__name:"AsideBar",setup(t){const n=we(),e=q([]),c=q([{label:"主面板",command:()=>n.push("/")},{label:"文档",items:[{label:"文档-1",command:()=>alert("文档1"),data:"Asdasd"},{label:"文档-2"},{label:"文档-3"}]},{label:"关于",command:()=>n.push("/About")}]);return Se(()=>{e.unshift({separator:!0});for(let d=0;d<c.length;d++)e.push(c[d],{separator:!0})}),(d,l)=>(h(),F(S(re),{AsideBarMenuMain:"",model:e,style:{}},{start:C(()=>[p("div",xt,[p("span",null,[O(Je,{style:{"font-size":"35px"}}),M("Hysteria2ConfWeb ")])]),p("div",Ct,[O(Ot)])]),item:C(({item:m,props:o})=>[p("div",wt,[p("span",null,P(m.label),1)])]),_:1},8,["model"]))}};export{Tt as default};
