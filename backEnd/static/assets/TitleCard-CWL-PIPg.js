import{B as v,s as y,o,d as r,m as a,r as s,a as c,e as i,_ as $,X as g,A as l,c as k,h as p,l as u,t as m,L as C}from"./index-5TWhrJ-d.js";var B=function(n){var t=n.dt;return`
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
`)},w={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},S=v.extend({name:"card",theme:B,classes:w}),T={name:"BaseCard",extends:y,style:S,provide:function(){return{$pcCard:this,$parentInstance:this}}},f={name:"Card",extends:T,inheritAttrs:!1};function N(e,n,t,d,b,h){return o(),r("div",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),r("div",a({key:0,class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header")],16)):c("",!0),i("div",a({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),r("div",a({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),r("div",a({key:0,class:e.cx("title")},e.ptm("title")),[s(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(o(),r("div",a({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[s(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),i("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"content")],16),e.$slots.footer?(o(),r("div",a({key:1,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):c("",!0)],16)],16)}f.render=N;const V={__name:"TitleCard",setup(e){const n=g(),t=l(()=>n.name),d=l(()=>n.meta.describe);return(b,h)=>(o(),k(C(f),{class:"mainCard"},{title:p(()=>[u(m(t.value),1)]),content:p(()=>[u(m(d.value?d.value:"无页面描述"),1)]),_:1}))}},A=$(V,[["__scopeId","data-v-ae7bc70a"]]);export{A as default};
