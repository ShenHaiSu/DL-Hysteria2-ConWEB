const __vite__fileDeps=["assets/index-BI_QRe0t.js","assets/index-BFuLBRmA.js","assets/index-DBz_WDjk.css","assets/index-CHO4O-H6.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{H as o,a as b,k as R,b as t,d,e as i,g as _,_ as v}from"./index-BFuLBRmA.js";import{u as U}from"./HomeView-ClJsLpXN.js";import"./auth-D-YpYqFm.js";const V={style:{padding:"0 30px"}},P=t("div",{style:{"text-align":"center"}},[t("h2",null,"CPU & RAM 使用量")],-1),I={style:{display:"flex"}},w={style:{flex:"1","align-items":"center","text-align":"center"}},C=t("span",null,"CPU",-1),D={style:{flex:"1","align-items":"center","text-align":"center"}},E=t("span",null,"RAM",-1),k={style:{flex:"4","align-items":"center","text-align":"center"}},M=t("br",null,null,-1),z={__name:"cpuAramUsagePanel",setup(N,{expose:m}){const c=_(()=>v(()=>import("./index-BI_QRe0t.js"),__vite__mapDeps([0,1,2]))),f=_(()=>v(()=>import("./index-CHO4O-H6.js"),__vite__mapDeps([3,1,2]))),u=U(),n=o(0),r=o(0),y=o(null),g=o({maintainAspectRatio:!1,aspectRatio:.6}),e=o({labels:[],datasets:[{label:"CPU占用",data:[],fill:!1,tension:.3},{label:"RAM占用",data:[],fill:!1,tension:.3}]}),h=()=>{const s=Number((u.cpuInfo.usage*100).toFixed(1)),a=Number((u.ramInfo.usedPercentage*100).toFixed(1));n.value=s,r.value=a,x()},x=()=>{e.value.labels.length==30&&(e.value.labels.shift(),e.value.datasets[0].data=Array.prototype.slice.call(e.value.datasets[0].data,-29),e.value.datasets[1].data=Array.prototype.slice.call(e.value.datasets[1].data,-29));const s=new Date,a=String(s.getHours()).padStart(2,"0"),l=String(s.getMinutes()).padStart(2,"0"),A=String(s.getSeconds()).padStart(2,"0"),S=`${a}:${l}:${A}`;e.value.labels.push(S),e.value.datasets[0].data=Array.prototype.concat(e.value.datasets[0].data,n.value),e.value.datasets[1].data=Array.prototype.concat(e.value.datasets[1].data,r.value),p()},p=()=>{e.value.datasets[0].data=Array.prototype.concat(e.value.datasets[0].data),e.value.datasets[1].data=Array.prototype.concat(e.value.datasets[1].data)};return m({updateInfo:h,chartRefresh:p}),(s,a)=>(b(),R("div",V,[P,t("div",I,[t("div",w,[d(i(c),{size:115,modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),readonly:""},null,8,["modelValue"]),C]),t("div",D,[d(i(c),{size:115,modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),readonly:""},null,8,["modelValue"]),E]),t("div",k,[d(i(f),{ref_key:"chartRef",ref:y,type:"line",data:e.value,options:g.value},null,8,["data","options"])])]),M]))}};export{z as default};