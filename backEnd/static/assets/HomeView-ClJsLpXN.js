const __vite__fileDeps=["assets/cpuAramUsagePanel-BsHfeVcH.js","assets/index-BFuLBRmA.js","assets/index-DBz_WDjk.css","assets/auth-D-YpYqFm.js","assets/diskUsagePanel-CKmXQ0Wy.js","assets/ipAddressPanel-gtPQRcli.js","assets/ipAddressPanel-DzzL379p.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{C as E,r as l,E as d,h as C,G as P,H as u,o as w,I as S,a as V,k as T,b as x,d as I,e as y,J as b,g,_ as h}from"./index-BFuLBRmA.js";import{u as H}from"./auth-D-YpYqFm.js";const p=(e,o)=>{i(e),Object.keys(o).forEach(t=>e[t]=o[t])},i=e=>{Object.keys(e).forEach(o=>delete e[o])},O=E("systemInfo",()=>{const e=l({}),o=l({}),t=l({}),r=l({});return{cpuInfo:e,ramInfo:o,diskInfo:t,ipInfo:r,get_cpuInfo:()=>d(e),get_ramInfo:()=>d(o),get_diskInfo:()=>d(t),get_ipInfo:()=>d(r),clearAll:()=>{i(e),i(o),i(t),i(r)},set_cpuInfo:n=>p(e,n),set_ramInfo:n=>p(o,n),set_diskInfo:n=>p(t,n),set_ipInfo:n=>p(r,n)}}),L={HomeMainContainer:""},R={style:{display:"flex","flex-wrap":"wrap"}},j={__name:"HomeView",setup(e){const o=g(()=>h(()=>import("./cpuAramUsagePanel-BsHfeVcH.js"),__vite__mapDeps([0,1,2,3]))),t=g(()=>h(()=>import("./diskUsagePanel-CKmXQ0Wy.js"),__vite__mapDeps([4,1,2,3]))),r=g(()=>h(()=>import("./ipAddressPanel-gtPQRcli.js"),__vite__mapDeps([5,1,2,3,6]))),k=P(),c=O(),f=H(),_=u(null),v=u(null),A=u(null),m=()=>{f.isLogin&&f.userPermission=="admin"&&b.get("/systemInfo/allInfo").then(s=>{const a=s.data;c.set_cpuInfo(a.cpuInfo),c.set_ramInfo(a.ramInfo),c.set_diskInfo(a.diskInfo),c.set_ipInfo(a.ipInfo)}).then(()=>{try{_._value.updateInfo()}catch(s){console.error(s)}}).catch(s=>{f.isLogin&&k.add({severity:"error",summary:"错误",detail:s.response.data.msg,life:3e3})})};return setInterval(m,10*1e3),w(()=>{setTimeout(()=>m(),1)}),S(()=>{setTimeout(()=>{try{_.value.chartRefresh()}catch{}},10)}),(s,a)=>(V(),T("div",L,[x("div",null,[I(y(o),{ref_key:"cpuAramComp",ref:_},null,512)]),x("div",R,[I(y(t),{style:{flex:"4","min-width":"600px"},ref_key:"diskComp",ref:v},null,512),I(y(r),{style:{flex:"2","min-width":"250px"},ref_key:"ipAddressComp",ref:A},null,512)])]))}},B=C(j,[["__scopeId","data-v-407ef4bf"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{U as H,O as u};