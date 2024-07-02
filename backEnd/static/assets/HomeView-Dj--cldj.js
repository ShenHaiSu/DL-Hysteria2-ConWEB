const __vite__fileDeps=["assets/cpuAramUsagePanel-D34egxQz.js","assets/index-r2yTKEpb.js","assets/index-DBz_WDjk.css","assets/auth-DOSIIQ5S.js","assets/diskUsagePanel-DdcwlEj5.js","assets/ipAddressPanel-BN4cE0l3.js","assets/ipAddressPanel-DzzL379p.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{C as E,r as f,E as l,h as C,G as w,H as u,o as P,I as S,a as V,k as T,b as x,d as I,e as y,J as H,g,_ as h}from"./index-r2yTKEpb.js";import{u as O}from"./auth-DOSIIQ5S.js";const d=(e,o)=>{i(e),Object.keys(o).forEach(t=>e[t]=o[t])},i=e=>{Object.keys(e).forEach(o=>delete e[o])},b=E("systemInfo",()=>{const e=f({}),o=f({}),t=f({}),a=f({});return{cpuInfo:e,ramInfo:o,diskInfo:t,ipInfo:a,get_cpuInfo:()=>l(e),get_ramInfo:()=>l(o),get_diskInfo:()=>l(t),get_ipInfo:()=>l(a),clearAll:()=>{i(e),i(o),i(t),i(a)},set_cpuInfo:n=>d(e,n),set_ramInfo:n=>d(o,n),set_diskInfo:n=>d(t,n),set_ipInfo:n=>d(a,n)}}),L={HomeMainContainer:""},R={style:{display:"flex","flex-wrap":"wrap"}},j={__name:"HomeView",setup(e){const o=g(()=>h(()=>import("./cpuAramUsagePanel-D34egxQz.js"),__vite__mapDeps([0,1,2,3]))),t=g(()=>h(()=>import("./diskUsagePanel-DdcwlEj5.js"),__vite__mapDeps([4,1,2,3]))),a=g(()=>h(()=>import("./ipAddressPanel-BN4cE0l3.js"),__vite__mapDeps([5,1,2,3,6]))),k=w(),c=b(),p=O(),_=u(null),v=u(null),A=u(null),m=()=>{p.isLogin&&H.get("/systemInfo/allInfo").then(s=>{const r=s.data;c.set_cpuInfo(r.cpuInfo),c.set_ramInfo(r.ramInfo),c.set_diskInfo(r.diskInfo),c.set_ipInfo(r.ipInfo)}).then(()=>{try{_._value.updateInfo()}catch(s){console.error(s)}}).catch(s=>{p.isLogin&&k.add({severity:"error",summary:"错误",detail:s.response.data.msg,life:3e3})})};return setInterval(m,10*1e3),P(()=>{setTimeout(()=>m(),1)}),S(()=>{setTimeout(()=>{try{_.value.chartRefresh()}catch{}},10)}),(s,r)=>(V(),T("div",L,[x("div",null,[I(y(o),{ref_key:"cpuAramComp",ref:_},null,512)]),x("div",R,[I(y(t),{style:{flex:"4","min-width":"600px"},ref_key:"diskComp",ref:v},null,512),I(y(a),{style:{flex:"2","min-width":"250px"},ref_key:"ipAddressComp",ref:A},null,512)])]))}},B=C(j,[["__scopeId","data-v-7c190a71"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{U as H,b as u};