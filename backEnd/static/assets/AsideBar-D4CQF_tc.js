const __vite__fileDeps=["assets/IconUser-B5RiVCJ_.js","assets/index-Cvyu51lq.js","assets/index-DBoWeEB5.css","assets/index-DFGN04pP.js","assets/index-DbSrAyX8.js","assets/index-CDZ92WQj.js","assets/index-DGgsbvgm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as ce,B as ie,U as X,Z as R,D as x,C as me,s as Q,O as fe,m as _,R as pe,r as he,o as h,c as g,a as p,w as ve,b as F,n as ye,d as Y,e as A,t as U,f as $,g as w,h as O,T as be,i as K,F as z,j as q,k as M,l as ge,q as Ie,u as P,v as j,x as ke,_ as Le,y as _e,z as Oe,A as re,E,G as C,H as W,I as Z,J as xe,K as we,L as Ce,M as Se,N as Ae}from"./index-Cvyu51lq.js";import{s as Te}from"./index-DGgsbvgm.js";var Ue=ce(),Pe=function(n){var e=n.dt;return`
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
`)},ze={root:function(n){var e=n.props;return["p-menu p-component",{"p-menu-overlay":e.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(n){var e=n.instance;return["p-menu-item",{"p-focus":e.id===e.focusedOptionId,"p-disabled":e.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},Fe=ie.extend({name:"menu",theme:Pe,classes:ze}),Me={name:"BaseMenu",extends:Q,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Fe,provide:function(){return{$pcMenu:this,$parentInstance:this}}},oe={name:"Menuitem",hostName:"Menu",extends:Q,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(n,e){return n&&n.item?fe.getItemValue(n.item[e]):void 0},getPTOptions:function(n){return this.ptm(n,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(n){var e=this.getItemProp(this.item,"command");e&&e({originalEvent:n,item:this.item.item}),this.$emit("item-click",{originalEvent:n,item:this.item,id:this.id})},onItemMouseMove:function(n){this.$emit("item-mousemove",{originalEvent:n,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(n){return{action:_({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:_({class:[this.cx("itemIcon"),n.icon]},this.getPTOptions("itemIcon")),label:_({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:pe}},Ee=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Be=["href","target"];function De(t,n,e,c,l,d){var m=he("ripple");return d.visible()?(h(),g("li",_({key:0,id:e.id,class:[t.cx("item"),e.item.class],role:"menuitem",style:e.item.style,"aria-label":d.label(),"aria-disabled":d.disabled()},d.getPTOptions("item"),{"data-p-focused":d.isItemFocused(),"data-p-disabled":d.disabled()||!1}),[p("div",_({class:t.cx("itemContent"),onClick:n[0]||(n[0]=function(o){return d.onItemClick(o)}),onMousemove:n[1]||(n[1]=function(o){return d.onItemMouseMove(o)})},d.getPTOptions("itemContent")),[e.templates.item?e.templates.item?(h(),F(Y(e.templates.item),{key:1,item:e.item,label:d.label(),props:d.getMenuItemProps(e.item)},null,8,["item","label","props"])):A("",!0):ve((h(),g("a",_({key:0,href:e.item.url,class:t.cx("itemLink"),target:e.item.target,tabindex:"-1","aria-hidden":"true"},d.getPTOptions("itemLink")),[e.templates.itemicon?(h(),F(Y(e.templates.itemicon),{key:0,item:e.item,class:ye(t.cx("itemIcon"))},null,8,["item","class"])):e.item.icon?(h(),g("span",_({key:1,class:[t.cx("itemIcon"),e.item.icon]},d.getPTOptions("itemIcon")),null,16)):A("",!0),p("span",_({class:t.cx("itemLabel")},d.getPTOptions("itemLabel")),U(d.label()),17)],16,Be)),[[m]])],16)],16,Ee)):A("",!0)}oe.render=De;function ee(t){return He(t)||Ne(t)||Ve(t)||Ke()}function Ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ve(t,n){if(t){if(typeof t=="string")return G(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?G(t,n):void 0}}function Ne(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function He(t){if(Array.isArray(t))return G(t)}function G(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,c=Array(n);e<n;e++)c[e]=t[e];return c}var se={name:"Menu",extends:Me,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(n){this.id=n||X()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||X(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&R.clear(this.container),this.container=null},methods:{itemClick:function(n){var e=n.item;this.disabled(e)||(e.command&&e.command(n),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==n.id&&(this.focusedOptionIndex=n.id))},itemMouseMove:function(n){this.focused&&(this.focusedOptionIndex=n.id)},onListFocus:function(n){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",n)},onListBlur:function(n){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",n)},onListKeyDown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Space":this.onSpaceKey(n);break;case"Escape":this.popup&&(x.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(n){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()},onArrowUpKey:function(n){if(n.altKey&&this.popup)x.focus(this.target),this.hide(),n.preventDefault();else{var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e),n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(0),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),n.preventDefault()},onEnterKey:function(n){var e=x.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),c=e&&x.findSingle(e,'a[data-pc-section="itemlink"]');this.popup&&x.focus(this.target),c?c.click():e&&e.click(),n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},findNextOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=ee(e).findIndex(function(l){return l.id===n});return c>-1?c+1:0},findPrevOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=ee(e).findIndex(function(l){return l.id===n});return c>-1?c-1:0},changeFocusedOptionIndex:function(n){var e=x.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),c=n>=e.length?e.length-1:n<0?0:n;c>-1&&(this.focusedOptionIndex=e[c].getAttribute("id"))},toggle:function(n){this.overlayVisible?this.hide():this.show(n)},show:function(n){this.overlayVisible=!0,this.target=n.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(n){x.addStyles(n,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&R.set("menu",n,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&x.focus(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(n){this.autoZIndex&&R.clear(n)},alignOverlay:function(){x.absolutePosition(this.container,this.target);var n=x.getOuterWidth(this.target);n>x.getOuterWidth(this.container)&&(this.container.style.minWidth=x.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(e){var c=n.container&&!n.container.contains(e.target),l=!(n.target&&(n.target===e.target||n.target.contains(e.target)));n.overlayVisible&&c&&l?n.hide():!n.popup&&c&&l&&(n.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new me(this.target,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!x.isTouchDevice()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(n){return typeof n.visible=="function"?n.visible():n.visible!==!1},disabled:function(n){return typeof n.disabled=="function"?n.disabled():n.disabled},label:function(n){return typeof n.label=="function"?n.label():n.label},onOverlayClick:function(n){Ue.emit("overlay-click",{originalEvent:n,target:this.target})},containerRef:function(n){this.container=n},listRef:function(n){this.list=n}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:oe,Portal:Te}},Re=["id"],We=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Ze=["id"];function qe(t,n,e,c,l,d){var m=$("PVMenuitem"),o=$("Portal");return h(),F(o,{appendTo:t.appendTo,disabled:!t.popup},{default:w(function(){return[O(be,_({name:"p-connected-overlay",onEnter:d.onEnter,onLeave:d.onLeave,onAfterLeave:d.onAfterLeave},t.ptm("transition")),{default:w(function(){return[!t.popup||l.overlayVisible?(h(),g("div",_({key:0,ref:d.containerRef,id:l.id,class:t.cx("root"),onClick:n[3]||(n[3]=function(){return d.onOverlayClick&&d.onOverlayClick.apply(d,arguments)})},t.ptmi("root")),[t.$slots.start?(h(),g("div",_({key:0,class:t.cx("start")},t.ptm("start")),[K(t.$slots,"start")],16)):A("",!0),p("ul",_({ref:d.listRef,id:l.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":l.focused?d.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:n[0]||(n[0]=function(){return d.onListFocus&&d.onListFocus.apply(d,arguments)}),onBlur:n[1]||(n[1]=function(){return d.onListBlur&&d.onListBlur.apply(d,arguments)}),onKeydown:n[2]||(n[2]=function(){return d.onListKeyDown&&d.onListKeyDown.apply(d,arguments)})},t.ptm("list")),[(h(!0),g(z,null,q(t.model,function(f,r){return h(),g(z,{key:d.label(f)+r.toString()},[f.items&&d.visible(f)&&!f.separator?(h(),g(z,{key:0},[f.items?(h(),g("li",_({key:0,id:l.id+"_"+r,class:[t.cx("submenuLabel"),f.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[K(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:f},function(){return[M(U(d.label(f)),1)]})],16,Ze)):A("",!0),(h(!0),g(z,null,q(f.items,function(i,s){return h(),g(z,{key:i.label+r+"_"+s},[d.visible(i)&&!i.separator?(h(),F(m,{key:0,id:l.id+"_"+r+"_"+s,item:i,templates:t.$slots,focusedOptionId:d.focusedOptionId,unstyled:t.unstyled,onItemClick:d.itemClick,onItemMousemove:d.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):d.visible(i)&&i.separator?(h(),g("li",_({key:"separator"+r+s,class:[t.cx("separator"),f.class],style:i.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):A("",!0)],64)}),128))],64)):d.visible(f)&&f.separator?(h(),g("li",_({key:"separator"+r.toString(),class:[t.cx("separator"),f.class],style:f.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(h(),F(m,{key:d.label(f)+r.toString(),id:l.id+"_"+r,item:f,index:r,templates:t.$slots,focusedOptionId:d.focusedOptionId,unstyled:t.unstyled,onItemClick:d.itemClick,onItemMousemove:d.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,We),t.$slots.end?(h(),g("div",_({key:1,class:t.cx("end")},t.ptm("end")),[K(t.$slots,"end")],16)):A("",!0)],16,Re)):A("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}se.render=qe;const je={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ge=p("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"},null,-1),Je=[Ge],Qe=ge({__name:"IconWeb",setup(t){return(n,e)=>(h(),g("svg",je,Je))}});var Xe=function(n){var e=n.dt;return`
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
`)},Ye={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},$e={root:function(n){var e=n.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},et=ie.extend({name:"divider",theme:Xe,classes:$e,inlineStyles:Ye}),tt={name:"BaseDivider",extends:Q,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:et,provide:function(){return{$pcDivider:this,$parentInstance:this}}},ae={name:"Divider",extends:tt,inheritAttrs:!1},nt=["aria-orientation"];function it(t,n,e,c,l,d){return h(),g("div",_({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(h(),g("div",_({key:0,class:t.cx("content")},t.ptm("content")),[K(t.$slots,"default")],16)):A("",!0)],16,nt)}ae.render=it;function rt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var le={exports:{}},de={exports:{}};(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,c){return e<<c|e>>>32-c},rotr:function(e,c){return e<<32-c|e>>>c},endian:function(e){if(e.constructor==Number)return n.rotl(e,8)&16711935|n.rotl(e,24)&4278255360;for(var c=0;c<e.length;c++)e[c]=n.endian(e[c]);return e},randomBytes:function(e){for(var c=[];e>0;e--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(e){for(var c=[],l=0,d=0;l<e.length;l++,d+=8)c[d>>>5]|=e[l]<<24-d%32;return c},wordsToBytes:function(e){for(var c=[],l=0;l<e.length*32;l+=8)c.push(e[l>>>5]>>>24-l%32&255);return c},bytesToHex:function(e){for(var c=[],l=0;l<e.length;l++)c.push((e[l]>>>4).toString(16)),c.push((e[l]&15).toString(16));return c.join("")},hexToBytes:function(e){for(var c=[],l=0;l<e.length;l+=2)c.push(parseInt(e.substr(l,2),16));return c},bytesToBase64:function(e){for(var c=[],l=0;l<e.length;l+=3)for(var d=e[l]<<16|e[l+1]<<8|e[l+2],m=0;m<4;m++)l*8+m*6<=e.length*8?c.push(t.charAt(d>>>6*(3-m)&63)):c.push("=");return c.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],l=0,d=0;l<e.length;d=++l%4)d!=0&&c.push((t.indexOf(e.charAt(l-1))&Math.pow(2,-2*d+8)-1)<<d*2|t.indexOf(e.charAt(l))>>>6-d*2);return c}};de.exports=n})();var ot=de.exports,J={utf8:{stringToBytes:function(t){return J.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(J.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var n=[],e=0;e<t.length;e++)n.push(t.charCodeAt(e)&255);return n},bytesToString:function(t){for(var n=[],e=0;e<t.length;e++)n.push(String.fromCharCode(t[e]));return n.join("")}}},te=J;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var st=function(t){return t!=null&&(ue(t)||at(t)||!!t._isBuffer)};function ue(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function at(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&ue(t.slice(0,0))}(function(){var t=ot,n=te.utf8,e=st,c=te.bin,l=function(d,m){d.constructor==String?m&&m.encoding==="binary"?d=c.stringToBytes(d):d=n.stringToBytes(d):e(d)?d=Array.prototype.slice.call(d,0):!Array.isArray(d)&&d.constructor!==Uint8Array&&(d=d.toString());for(var o=t.bytesToWords(d),f=d.length*8,r=1732584193,i=-271733879,s=-1732584194,a=271733878,u=0;u<o.length;u++)o[u]=(o[u]<<8|o[u]>>>24)&16711935|(o[u]<<24|o[u]>>>8)&4278255360;o[f>>>5]|=128<<f%32,o[(f+64>>>9<<4)+14]=f;for(var y=l._ff,k=l._gg,I=l._hh,L=l._ii,u=0;u<o.length;u+=16){var V=r,B=i,b=s,v=a;r=y(r,i,s,a,o[u+0],7,-680876936),a=y(a,r,i,s,o[u+1],12,-389564586),s=y(s,a,r,i,o[u+2],17,606105819),i=y(i,s,a,r,o[u+3],22,-1044525330),r=y(r,i,s,a,o[u+4],7,-176418897),a=y(a,r,i,s,o[u+5],12,1200080426),s=y(s,a,r,i,o[u+6],17,-1473231341),i=y(i,s,a,r,o[u+7],22,-45705983),r=y(r,i,s,a,o[u+8],7,1770035416),a=y(a,r,i,s,o[u+9],12,-1958414417),s=y(s,a,r,i,o[u+10],17,-42063),i=y(i,s,a,r,o[u+11],22,-1990404162),r=y(r,i,s,a,o[u+12],7,1804603682),a=y(a,r,i,s,o[u+13],12,-40341101),s=y(s,a,r,i,o[u+14],17,-1502002290),i=y(i,s,a,r,o[u+15],22,1236535329),r=k(r,i,s,a,o[u+1],5,-165796510),a=k(a,r,i,s,o[u+6],9,-1069501632),s=k(s,a,r,i,o[u+11],14,643717713),i=k(i,s,a,r,o[u+0],20,-373897302),r=k(r,i,s,a,o[u+5],5,-701558691),a=k(a,r,i,s,o[u+10],9,38016083),s=k(s,a,r,i,o[u+15],14,-660478335),i=k(i,s,a,r,o[u+4],20,-405537848),r=k(r,i,s,a,o[u+9],5,568446438),a=k(a,r,i,s,o[u+14],9,-1019803690),s=k(s,a,r,i,o[u+3],14,-187363961),i=k(i,s,a,r,o[u+8],20,1163531501),r=k(r,i,s,a,o[u+13],5,-1444681467),a=k(a,r,i,s,o[u+2],9,-51403784),s=k(s,a,r,i,o[u+7],14,1735328473),i=k(i,s,a,r,o[u+12],20,-1926607734),r=I(r,i,s,a,o[u+5],4,-378558),a=I(a,r,i,s,o[u+8],11,-2022574463),s=I(s,a,r,i,o[u+11],16,1839030562),i=I(i,s,a,r,o[u+14],23,-35309556),r=I(r,i,s,a,o[u+1],4,-1530992060),a=I(a,r,i,s,o[u+4],11,1272893353),s=I(s,a,r,i,o[u+7],16,-155497632),i=I(i,s,a,r,o[u+10],23,-1094730640),r=I(r,i,s,a,o[u+13],4,681279174),a=I(a,r,i,s,o[u+0],11,-358537222),s=I(s,a,r,i,o[u+3],16,-722521979),i=I(i,s,a,r,o[u+6],23,76029189),r=I(r,i,s,a,o[u+9],4,-640364487),a=I(a,r,i,s,o[u+12],11,-421815835),s=I(s,a,r,i,o[u+15],16,530742520),i=I(i,s,a,r,o[u+2],23,-995338651),r=L(r,i,s,a,o[u+0],6,-198630844),a=L(a,r,i,s,o[u+7],10,1126891415),s=L(s,a,r,i,o[u+14],15,-1416354905),i=L(i,s,a,r,o[u+5],21,-57434055),r=L(r,i,s,a,o[u+12],6,1700485571),a=L(a,r,i,s,o[u+3],10,-1894986606),s=L(s,a,r,i,o[u+10],15,-1051523),i=L(i,s,a,r,o[u+1],21,-2054922799),r=L(r,i,s,a,o[u+8],6,1873313359),a=L(a,r,i,s,o[u+15],10,-30611744),s=L(s,a,r,i,o[u+6],15,-1560198380),i=L(i,s,a,r,o[u+13],21,1309151649),r=L(r,i,s,a,o[u+4],6,-145523070),a=L(a,r,i,s,o[u+11],10,-1120210379),s=L(s,a,r,i,o[u+2],15,718787259),i=L(i,s,a,r,o[u+9],21,-343485551),r=r+V>>>0,i=i+B>>>0,s=s+b>>>0,a=a+v>>>0}return t.endian([r,i,s,a])};l._ff=function(d,m,o,f,r,i,s){var a=d+(m&o|~m&f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},l._gg=function(d,m,o,f,r,i,s){var a=d+(m&f|o&~f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},l._hh=function(d,m,o,f,r,i,s){var a=d+(m^o^f)+(r>>>0)+s;return(a<<i|a>>>32-i)+m},l._ii=function(d,m,o,f,r,i,s){var a=d+(o^(m|~f))+(r>>>0)+s;return(a<<i|a>>>32-i)+m},l._blocksize=16,l._digestsize=16,le.exports=function(d,m){if(d==null)throw new Error("Illegal argument "+d);var o=t.wordsToBytes(l(d,m));return m&&m.asBytes?o:m&&m.asString?c.bytesToString(o):t.bytesToHex(o)}})();var lt=le.exports;const ne=rt(lt),dt=Ie("auth",()=>{const t=P(!1),n=P(""),e=P("none"),c=j({}),l=()=>t.value,d=()=>n.value,m=()=>e.value,o=()=>ke(c);return{isLogin:t,userName:n,userPermission:e,userInfo:c,getIsLogin:l,getUserName:d,getUserPermission:m,getUserInfo:o,setIsLogin:u=>t.value=!!u,setUserName:u=>n.value=u,setUserPermission:u=>e.value=u,setUserInfo:(u,y)=>c[u]=y,coverUserInfo:u=>{Object.keys(o()).forEach(y=>delete c[y]),Object.keys(u).forEach(y=>c[y]=u[y])}}}),T=t=>(Ce("data-v-3dec478f"),t=t(),Se(),t),ut=T(()=>p("div",null,[p("h2",null,"认证界面")],-1)),ct={key:0,AuthCardDialogAuthed:""},mt={style:{width:"100%"}},ft=T(()=>p("td",null,"用户名",-1)),pt=T(()=>p("td",null,"权限级别",-1)),ht={colspan:"2"},vt=T(()=>p("br",null,null,-1)),yt=T(()=>p("br",null,null,-1)),bt={key:1,AuthCardDialogUnauthed:""},gt=T(()=>p("label",null,"账户名",-1)),It=T(()=>p("label",null,"密码",-1)),kt=T(()=>p("label",null,"管理员秘钥",-1)),Lt=T(()=>p("br",null,null,-1)),_t={__name:"AuthShow",setup(t){const n=W(()=>Z(()=>import("./IconUser-B5RiVCJ_.js"),__vite__mapDeps([0,1,2]))),e=W(()=>Z(()=>import("./index-DFGN04pP.js"),__vite__mapDeps([3,1,2]))),c=W(()=>Z(()=>import("./index-DbSrAyX8.js"),__vite__mapDeps([4,1,2,5,6]))),l=dt(),d=P(!1),m=P(""),o=P(!1),f=P(""),r=P(""),i=_e(),s=()=>m.value.length==0||r.value.length==0,a=()=>ne(ne(r.value+"DAOLUOLTS").toString()),u=()=>{d.value=!0,o.value=!1,m.value="",r.value="",f.value=""},y=Oe(()=>(console.log(Object.keys(l.getUserInfo())),Object.keys(l.getUserInfo())));re(()=>{E("/auth/checkLogin",{method:"post"}).then(b=>{const v=b.data;l.setUserName(v.userName),l.setUserPermission(v.userPermission),l.coverUserInfo(v.userInfo),l.setIsLogin(!0),i.add({severity:"success",summary:"身份验证",detail:"已通过身份验证，欢迎回来："+v.userName,life:3e3})}).catch(()=>{i.add({severity:"error",summary:"当前未登录",detail:"请先登录",life:3e3})})});const k=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});if(!o.value)return o.value=!0;E("/auth/regist",{method:"post",data:{userName:m.value,userPassword:a(),adminKey:f.value}}).then(b=>{const v=b.data;l.setUserName(v.userName),l.setUserPermission(v.userPermission),l.coverUserInfo(v.userInfo),l.setIsLogin(!0)}).catch(b=>{i.add({severity:"error",summary:"错误",detail:b.response.data.msg,life:3e3})})},I=()=>{if(s())return i.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});E("/auth/login",{method:"post",data:{userName:m.value,userPassword:a()}}).then(b=>{const v=b.data;l.setUserName(v.userName),l.setUserPermission(v.userPermission),l.coverUserInfo(v.userInfo),l.setIsLogin(!0),i.add({severity:"success",summary:"成功",detail:v.msg,life:3e3}),d.value=!1}).catch(b=>{i.add({severity:"error",summary:"错误",detail:b.response.data.msg,life:3e3})})},L=()=>{if(!l.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});E("/auth/logout",{method:"post"}).then(b=>{b.data,l.setIsLogin(!1),l.setUserName(""),l.setUserPermission("none"),l.coverUserInfo({}),i.add({severity:"success",summary:"成功",detail:"完成登出，现在是未登录状态。",life:3e3}),location.reload()}).catch(b=>{i.add({severity:"error",summary:"错误",detail:b.response.data.msg,life:3e3})})},V=()=>{if(!l.getIsLogin())return i.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});E("/auth/checkLogin",{method:"post"}).then(b=>{const v=b.data;l.setUserName(v.userName),l.setUserPermission(v.userPermission),l.coverUserInfo(v.userInfo),l.setIsLogin(!0),i.add({severity:"success",summary:"成功",detail:"已收到服务器下发的新Session",life:3e3})}).catch(b=>{i.add({severity:"error",summary:"错误",detail:b.response.data.msg,life:3e3})})},B=b=>{if(b.key=="Enter")return I()};return(b,v)=>{const N=ae,D=xe,H=we;return h(),g(z,null,[p("div",{AuthCardContainer:"",onClick:u},[O(C(n)),p("span",null,U(C(l).getIsLogin()?C(l).getUserName():"未登录"),1)]),O(C(c),{visible:d.value,"onUpdate:visible":v[3]||(v[3]=S=>d.value=S),modal:"",header:"认证界面",style:{maxWidth:"50vw",minWidth:"350px"}},{header:w(()=>[ut]),default:w(()=>[C(l).isLogin?(h(),g("div",ct,[p("div",null,[p("table",mt,[p("tbody",null,[p("tr",null,[ft,p("td",null,U(C(l).getUserName()),1)]),p("tr",null,[pt,p("td",null,U(C(l).getUserPermission()),1)]),p("tr",null,[p("td",ht,[O(N,{style:{width:"100%"}})])]),(h(!0),g(z,null,q(y.value,S=>(h(),g("tr",null,[p("td",null,U(S),1),p("td",null,U(C(l).getUserInfo()[S]),1)]))),256))])]),vt,yt]),p("div",null,[O(D,{size:"small",onClick:V},{default:w(()=>[M("刷新")]),_:1}),O(N,{layout:"vertical"}),O(D,{size:"small",onClick:L},{default:w(()=>[M("登出")]),_:1})])])):(h(),g("div",bt,[p("div",null,[O(C(e),null,{default:w(()=>[O(H,{size:"small",onKeydown:B,modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=S=>m.value=S),placeholder:"必填"},null,8,["modelValue"]),gt]),_:1}),O(C(e),null,{default:w(()=>[O(H,{size:"small",type:"password",onKeydown:B,modelValue:r.value,"onUpdate:modelValue":v[1]||(v[1]=S=>r.value=S),placeholder:"必填"},null,8,["modelValue"]),It]),_:1}),o.value?(h(),F(C(e),{key:0},{default:w(()=>[O(H,{size:"small",modelValue:f.value,"onUpdate:modelValue":v[2]||(v[2]=S=>f.value=S),placeholder:"选填"},null,8,["modelValue"]),kt]),_:1})):A("",!0)]),Lt,p("div",null,[O(D,{size:"small",onClick:k,severity:"secondary"},{default:w(()=>[M("注册")]),_:1}),O(N,{layout:"vertical"}),O(D,{size:"small",onClick:I},{default:w(()=>[M("登录")]),_:1})])]))]),_:1},8,["visible"])],64)}}},Ot=Le(_t,[["__scopeId","data-v-3dec478f"]]),xt={AsideBarMenuStart:""},wt={AsideBarMenuStartAuth:""},Ct={AsideBarMenuItem:""},Tt={__name:"AsideBar",setup(t){const n=Ae(),e=j([]),c=j([{label:"主面板",command:()=>n.push("/")},{label:"文档",items:[{label:"文档-1",command:()=>alert("文档1"),data:"Asdasd"},{label:"文档-2"},{label:"文档-3"}]},{label:"关于",command:()=>n.push("/About")}]);return re(()=>{e.unshift({separator:!0});for(let l=0;l<c.length;l++)e.push(c[l],{separator:!0})}),(l,d)=>(h(),F(C(se),{AsideBarMenuMain:"",model:e,style:{}},{start:w(()=>[p("div",xt,[p("span",null,[O(Qe,{style:{"font-size":"35px"}}),M("Hysteria2ConfWeb ")])]),p("div",wt,[O(Ot)])]),item:w(({item:m,props:o})=>[p("div",Ct,[p("span",null,U(m.label),1)])]),_:1},8,["model"]))}};export{Tt as default};
