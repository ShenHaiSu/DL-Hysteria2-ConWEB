const __vite__fileDeps=["assets/index-BZtjAmtC.js","assets/index-DA5zFzRK.js","assets/index-DBz_WDjk.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{h as B,n as C,a as v,k as _,b as e,t as n,v as h,d as o,w as s,f as i,e as I,g as $,_ as k,K as D,S as P,V as T}from"./index-DA5zFzRK.js";import{u as j}from"./hy2Server-CoeESwmN.js";const r=l=>(P("data-v-ffe19189"),l=l(),T(),l),E=["server-index"],N=r(()=>e("div",null,[e("h2",null,"别名")],-1)),O=r(()=>e("span",null,null,-1)),V=r(()=>e("br",null,null,-1)),z=r(()=>e("div",null,[e("h2",null,"域名与地址")],-1)),A=r(()=>e("br",null,null,-1)),H=r(()=>e("div",null,[e("h2",null,"在线")],-1)),L=r(()=>e("span",null,null,-1)),R=r(()=>e("br",null,null,-1)),G=r(()=>e("div",null,[e("h2",null,"成功认证次数")],-1)),F=r(()=>e("span",null,null,-1)),K=r(()=>e("br",null,null,-1)),M=r(()=>e("div",null,[e("h2",{style:{color:"red"}},"错误次数")],-1)),q=r(()=>e("span",null,null,-1)),J=r(()=>e("br",null,null,-1)),Q=r(()=>e("div",null,[e("h2",null,"操作")],-1)),U={style:{display:"flex",gap:"5px","justify-content":"center"}},W={style:{"min-width":"100%"}},X=r(()=>e("div",null,[e("h2",null,"流量用量")],-1)),Y={style:{display:"flex",gap:"10px"}},Z={__name:"registerServer",props:["targetIndex","targetServer"],setup(l){const g=$(()=>k(()=>import("./index-BZtjAmtC.js"),__vite__mapDeps([0,1,2]))),a=j(),t=l,p=()=>`${t.targetServer.bandwidth.used} GB / ${t.targetServer.bandwidth.total} GB`,S=()=>Number((t.targetServer.bandwidth.used*100/t.targetServer.bandwidth.total).toFixed(2)),m=()=>t.targetServer.error.method+t.targetServer.error.body+t.targetServer.error.reject+t.targetServer.error.timeout,f=()=>Object.keys(t.targetServer.onlineList).map(d=>`${d}: ${t.targetServer.onlineList[d]}`).join(`
`),x=()=>`方法错误：${t.targetServer.error.method}
请求体错误：${t.targetServer.error.body}
拒绝认证：${t.targetServer.error.reject}
超时错误：${t.targetServer.error.timeout}
`,b=()=>{},y=()=>{a.editDialogMode="resgiter-reset",a.editIndex=t.targetIndex,a.editDialogShow=!0},w=()=>{};return(d,ee)=>{const u=D,c=C("tooltip");return v(),_("div",{SingleRegisteredServerCard:"","server-index":t.targetIndex},[e("div",null,[N,e("div",null,[O,V,e("span",null,n(t.targetServer.alias),1)])]),e("div",null,[z,e("div",null,[e("span",null,n(t.targetServer.domain),1),A,e("span",null,n(t.targetServer.address),1)])]),e("div",null,[H,h((v(),_("div",null,[L,R,e("span",null,n(t.targetServer.nowOnline)+" / "+n(t.targetServer.maxOnline),1)])),[[c,{value:f(),autoHide:!1},void 0,{bottom:!0}]])]),e("div",null,[G,e("div",null,[F,K,e("span",null,n(t.targetServer.authCount),1)])]),e("div",null,[M,h((v(),_("div",null,[q,J,e("span",null,n(m()),1)])),[[c,{value:x(),autoHide:!1},void 0,{bottom:!0}]])]),e("div",null,[Q,e("div",U,[o(u,{onClick:b,size:"small"},{default:s(()=>[i("编辑")]),_:1}),o(u,{onClick:y,size:"small"},{default:s(()=>[i("重置")]),_:1}),o(u,{onClick:w,size:"small"},{default:s(()=>[i("取消认证")]),_:1})])]),e("div",W,[X,e("div",Y,[o(I(g),{style:{"min-width":"100%"},value:S()},{default:s(()=>[i(n(p()),1)]),_:1},8,["value"])])])],8,E)}}},ne=B(Z,[["__scopeId","data-v-ffe19189"]]);export{ne as default};