import{B as K,U as O,Z as g,D as a,X as T,l as A,O as D,m as l,R as z,n as F,a as o,k as d,b as k,v as V,c as b,N as H,p as x,x as m,t as E,y as C,w,d as R,Y as B,$ as I,F as h,A as M,f as N}from"./index-DQ9WfSge.js";import{O as U}from"./index-Z713uL14.js";import{s as Z}from"./index-CiqOnIoy.js";var W=function(e){var n=e.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-top: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},j={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},q=K.extend({name:"menu",theme:W,classes:j}),X={name:"BaseMenu",extends:A,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:q,provide:function(){return{$pcMenu:this,$parentInstance:this}}},P={name:"Menuitem",hostName:"Menu",extends:A,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?D.getItemValue(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:l({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:l({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:z}},Y=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],G=["href","target"];function J(t,e,n,s,u,i){var y=F("ripple");return i.visible()?(o(),d("li",l({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[k("div",l({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(p){return i.onItemClick(p)}),onMousemove:e[1]||(e[1]=function(p){return i.onItemMouseMove(p)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(o(),b(x(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):m("",!0):V((o(),d("a",l({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1","aria-hidden":"true"},i.getPTOptions("itemLink")),[n.templates.itemicon?(o(),b(x(n.templates.itemicon),{key:0,item:n.item,class:H(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(o(),d("span",l({key:1,class:[t.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):m("",!0),k("span",l({class:t.cx("itemLabel")},i.getPTOptions("itemLabel")),E(i.label()),17)],16,G)),[[y]])],16)],16,Y)):m("",!0)}P.render=J;function S(t){return ee(t)||$(t)||_(t)||Q()}function Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,e){if(t){if(typeof t=="string")return L(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}function $(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ee(t){if(Array.isArray(t))return L(t)}function L(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var te={name:"Menu",extends:X,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||O()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||O(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&g.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(a.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)a.focus(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(a.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=a.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&a.findSingle(n,'a[data-pc-section="itemlink"]');this.popup&&a.focus(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=a.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=S(n).findIndex(function(u){return u.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=a.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=S(n).findIndex(function(u){return u.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=a.find(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){a.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&g.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&a.focus(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&g.clear(e)},alignOverlay:function(){a.absolutePosition(this.container,this.target);var e=a.getOuterWidth(this.target);e>a.getOuterWidth(this.container)&&(this.container.style.minWidth=a.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),u=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&u?e.hide():!e.popup&&s&&u&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new T(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!a.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){U.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:P,Portal:Z}},ne=["id"],ie=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],se=["id"];function oe(t,e,n,s,u,i){var y=C("PVMenuitem"),p=C("Portal");return o(),b(p,{appendTo:t.appendTo,disabled:!t.popup},{default:w(function(){return[R(B,l({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:w(function(){return[!t.popup||u.overlayVisible?(o(),d("div",l({key:0,ref:i.containerRef,id:u.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(o(),d("div",l({key:0,class:t.cx("start")},t.ptm("start")),[I(t.$slots,"start")],16)):m("",!0),k("ul",l({ref:i.listRef,id:u.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":u.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(o(!0),d(h,null,M(t.model,function(r,c){return o(),d(h,{key:i.label(r)+c.toString()},[r.items&&i.visible(r)&&!r.separator?(o(),d(h,{key:0},[r.items?(o(),d("li",l({key:0,id:u.id+"_"+c,class:[t.cx("submenuLabel"),r.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[I(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:r},function(){return[N(E(i.label(r)),1)]})],16,se)):m("",!0),(o(!0),d(h,null,M(r.items,function(f,v){return o(),d(h,{key:f.label+c+"_"+v},[i.visible(f)&&!f.separator?(o(),b(y,{key:0,id:u.id+"_"+c+"_"+v,item:f,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(f)&&f.separator?(o(),d("li",l({key:"separator"+c+v,class:[t.cx("separator"),r.class],style:f.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):m("",!0)],64)}),128))],64)):i.visible(r)&&r.separator?(o(),d("li",l({key:"separator"+c.toString(),class:[t.cx("separator"),r.class],style:r.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(o(),b(y,{key:i.label(r)+c.toString(),id:u.id+"_"+c,item:r,index:c,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ie),t.$slots.end?(o(),d("div",l({key:1,class:t.cx("end")},t.ptm("end")),[I(t.$slots,"end")],16)):m("",!0)],16,ne)):m("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}te.render=oe;export{te as default};
