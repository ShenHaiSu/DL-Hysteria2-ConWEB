import{B as h,s as y,o,c as r,m as a,i as s,e as c,a as i,_ as $,N as g,P as l,b as k,g as p,k as u,t as m,z as C}from"./index-D8t-L7d4.js";var B=function(n){var t=n.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},w={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},N=h.extend({name:"card",theme:B,classes:w}),S={name:"BaseCard",extends:y,style:N,provide:function(){return{$pcCard:this,$parentInstance:this}}},b={name:"Card",extends:S,inheritAttrs:!1};function T(e,n,t,d,f,v){return o(),r("div",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),r("div",a({key:0,class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header")],16)):c("",!0),i("div",a({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),r("div",a({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),r("div",a({key:0,class:e.cx("title")},e.ptm("title")),[s(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(o(),r("div",a({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[s(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),i("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"content")],16),e.$slots.footer?(o(),r("div",a({key:1,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):c("",!0)],16)],16)}b.render=T;const z={__name:"TitleCard",setup(e){const n=g(),t=l(()=>n.name),d=l(()=>n.meta.describe);return(f,v)=>(o(),k(C(b),{class:"mainCard"},{title:p(()=>[u(m(t.value),1)]),content:p(()=>[u(m(d.value?d.value:"无页面描述"),1)]),_:1}))}},D=$(z,[["__scopeId","data-v-ae7bc70a"]]);export{D as default};
