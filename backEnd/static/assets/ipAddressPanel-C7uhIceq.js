const __vite__fileDeps=["assets/index-CtlWRd59.js","assets/index-CLcwi-Aw.js","assets/index-DBz_WDjk.css","assets/index-DifknY7C.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{h as y,G as f,a as s,k as a,b as e,F as r,A as I,e as o,d,t as x,M as g,N as h,g as c,_ as l}from"./index-CLcwi-Aw.js";import{u as P}from"./HomeView-BkwPcol4.js";import"./auth-kXtLELIU.js";const S=t=>(g("data-v-8db139a8"),t=t(),h(),t),A={style:{padding:"0 30px"}},T=S(()=>e("div",{style:{"text-align":"center"}},[e("h2",null,"IP地址")],-1)),k={style:{"font-size":"16px"}},E={style:{display:"flex"}},b={__name:"ipAddressPanel",setup(t){const _=c(()=>l(()=>import("./index-CtlWRd59.js"),__vite__mapDeps([0,1,2]))),p=c(()=>l(()=>import("./index-DifknY7C.js"),__vite__mapDeps([3,1,2]))),u=P(),m=f(),v=n=>{navigator.clipboard.writeText(n.target.innerText),m.add({severity:"success",summary:"成功",detail:"已复制",life:1e3})};return(n,D)=>(s(),a("div",A,[T,e("div",k,[(s(!0),a(r,null,I(o(u).ipInfo,i=>(s(),a(r,null,[e("div",E,[d(o(p),{severity:"secondary",value:i.match(":")?"IPv6":"IPv4"},null,8,["value"]),e("div",{class:"ipSpan",style:{"margin-left":"10px"},onClick:v},x(i),1)]),d(o(_),{style:{margin:"5px 0"}})],64))),256))])]))}},L=y(b,[["__scopeId","data-v-8db139a8"]]);export{L as default};
