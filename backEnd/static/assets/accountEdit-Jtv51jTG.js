const __vite__fileDeps=["assets/index-B0CuSNis.js","assets/index-D39o__6r.js","assets/index-DBz_WDjk.css","assets/index-CB2wB60k.js","assets/index-ClV_6Aar.js","assets/AccountConf-B-VDcq6c.js","assets/AccountConf-BSe1nQ2k.css","assets/IconSuccess-BjSu6is2.js","assets/IconDefault-lRv-TU3B.js","assets/IconSlash-BVamNSkO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{h as J,G as j,H as b,a as w,k as g,b as a,d as l,w as i,e as u,t as L,f as y,M as Q,F as W,A as q,W as I,g as d,_ as c,J as X,N as Y,K as Z,P as ee,Q as te}from"./index-D39o__6r.js";import le from"./index-HuYbfy90.js";import{u as se}from"./AccountConf-B-VDcq6c.js";import{u as ae}from"./hy2Server-BNuU1OBG.js";import{u as oe}from"./auth-DT08vQmu.js";import{r as ne}from"./tools-DS0odpU0.js";const m=p=>(ee("data-v-265e47f7"),p=p(),te(),p),ie={AccountEditMainBase:""},ue={AccountMainEditDiv:""},re=m(()=>a("label",null,"账户名",-1)),de=m(()=>a("label",null,"权限",-1)),ce=m(()=>a("label",null,"代理连接秘钥",-1)),me=m(()=>a("label",null,"最大在线数",-1)),ve=m(()=>a("label",null,"最大流量 单位:GB",-1)),_e=m(()=>a("br",null,null,-1)),fe={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},pe={PermissionEditDiv:""},he={ServerPermissionEditContainer:""},ye={style:{flex:"1"}},Ie=m(()=>a("div",{class:"space",style:{"min-width":"10px"}},null,-1)),Se={ServerPermissionContentDiv:"",style:{flex:"1"}},Ve={style:{display:"flex","justify-content":"center","margin-top":"20px"}},be={__name:"accountEdit",props:["targetIndex"],setup(p){const v=d(()=>c(()=>import("./index-B0CuSNis.js"),__vite__mapDeps([0,1,2]))),D=d(()=>c(()=>import("./index-CB2wB60k.js"),__vite__mapDeps([3,1,2]))),z=d(()=>c(()=>import("./index-ClV_6Aar.js"),__vite__mapDeps([4,1,2]))),N=d(()=>c(()=>import("./AccountConf-B-VDcq6c.js").then(t=>t.I),__vite__mapDeps([5,1,2,6]))),O=d(()=>c(()=>import("./IconSuccess-BjSu6is2.js"),__vite__mapDeps([7,1,2]))),T=d(()=>c(()=>import("./IconDefault-lRv-TU3B.js"),__vite__mapDeps([8,1,2]))),B=d(()=>c(()=>import("./IconSlash-BVamNSkO.js"),__vite__mapDeps([9,1,2]))),x=j(),C=p,_=se(),U=ae(),E=oe(),s=b({}),f=b([]),h=b("");s.value=JSON.parse(JSON.stringify(_.accountList.value[C.targetIndex])),f.value=U.registeredList.map(t=>s.value.userInfo.accessServer.some(e=>e==t.alias)?{...t,permission:1,show:!0}:s.value.userInfo.blockServer.some(e=>e==t.alias)?{...t,permission:-1,show:!0}:{...t,permission:0,show:!0}),h.value="";const K=t=>t?(t/125e3).toFixed(2):0,F=t=>t?Number((t.used/t.total*100).toFixed(1)):100,M=()=>s.value.userInfo.bandwidth.used=0,G=()=>s.value.userInfo.hy2Key=ne(30),k=()=>{for(let t=0;t<f.value.length;t++){const e=f.value[t];e.show=!1,(e.alias.includes(h.value)||h.value.includes(e.alias))&&(e.show=!0)}},R=t=>t.show?"serverLineShow":"serverLineHide",S=(t,e)=>{let n="defaultClass";return t=="access"&&e.permission==1?n+=" target access":t=="default"&&e.permission==0?n+=" target default":t=="block"&&e.permission==-1&&(n+=" target block"),n},V=(t,e)=>e.permission=t,$=()=>_.editorShow=!1,H=()=>{const t={target:s.value.userName,hy2Key:s.value.userInfo.hy2Key,txSpeed:parseInt(s.value.userInfo.txSpeed),maxOnline:parseInt(s.value.userInfo.maxOnline),maxBandwidth:parseFloat(s.value.userInfo.bandwidth.total),usedBandwidth:s.value.userInfo.bandwidth.used,accessServer:f.value.filter(e=>e.permission==1).map(e=>e.alias),blockServer:f.value.filter(e=>e.permission==-1).map(e=>e.alias)};X.post("/auth/edit",t).then(e=>{if(e.data.error)throw new Error("服务器拒绝");_.accountList.value[C.targetIndex]=e.data.targetAccount,x.add({severity:"success",summary:"完成",detail:e.data.msg,life:3e3}),_.editorShow=!1,_.targetIndex=-1,_.editorMode="done";const n=e.data.targetAccount;E.userName==n.userName&&E.coverUserInfo(n.userInfo)}).catch(e=>{var n,r;x.add({severity:"error",summary:"失败",detail:"服务器拒绝"+((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.msg),life:5e3})})};return(t,e)=>{const n=Y,r=Z,P=le;return w(),g("div",null,[a("div",ie,[a("div",ue,[a("div",null,[l(u(v),null,{default:i(()=>[re,l(n,{size:"small",placeholder:"账户名",modelValue:s.value.userName,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value.userName=o),disabled:""},null,8,["modelValue"])]),_:1})]),a("div",null,[l(u(v),null,{default:i(()=>[de,l(n,{size:"small",placeholder:"权限",modelValue:s.value.userPermission,"onUpdate:modelValue":e[1]||(e[1]=o=>s.value.userPermission=o),disabled:""},null,8,["modelValue"])]),_:1})]),a("div",null,[l(u(v),null,{default:i(()=>[ce,l(n,{size:"small",placeholder:"代理连接秘钥",modelValue:s.value.userInfo.hy2Key,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.userInfo.hy2Key=o),disabled:""},null,8,["modelValue"])]),_:1})]),a("div",null,[l(u(v),null,{default:i(()=>[a("label",null,"最大速率 ≈"+L(K(s.value.userInfo.txSpeed))+"Mb/s",1),l(n,{size:"small",type:"number",placeholder:"最大速率",modelValue:s.value.userInfo.txSpeed,"onUpdate:modelValue":e[3]||(e[3]=o=>s.value.userInfo.txSpeed=o)},null,8,["modelValue"])]),_:1})]),a("div",null,[l(u(v),null,{default:i(()=>[me,l(n,{size:"small",type:"number",placeholder:"最大在线数",modelValue:s.value.userInfo.maxOnline,"onUpdate:modelValue":e[4]||(e[4]=o=>s.value.userInfo.maxOnline=o)},null,8,["modelValue"])]),_:1})]),a("div",null,[l(u(v),null,{default:i(()=>[ve,l(n,{size:"small",type:"number",placeholder:"最大流量 单位:GB",modelValue:s.value.userInfo.bandwidth.total,"onUpdate:modelValue":e[5]||(e[5]=o=>s.value.userInfo.bandwidth.total=o)},null,8,["modelValue"])]),_:1}),_e,l(u(z),{value:F(s.value.userInfo.bandwidth)},null,8,["value"])]),a("div",fe,[l(r,{onClick:M,size:"small",severity:"secondary"},{default:i(()=>[y("清空已用量")]),_:1}),l(r,{onClick:G,size:"small",severity:"secondary"},{default:i(()=>[y("重置代理连接密码")]),_:1})])]),a("div",pe,[a("div",null,[l(P,{style:{"font-size":"80%"}},{default:i(()=>[l(n,{modelValue:h.value,"onUpdate:modelValue":e[6]||(e[6]=o=>h.value=o),onKeydown:Q(k,["enter"])},null,8,["modelValue"]),l(r,{onClick:k},{default:i(()=>[l(u(N),{style:{"font-size":"350%"}})]),_:1})]),_:1})]),a("div",he,[(w(!0),g(W,null,q(f.value,o=>(w(),g("div",{ServerPermissionEdit:"",class:I(R(o))},[a("div",ye,[a("span",null,L(o.alias),1)]),Ie,a("div",Se,[l(P,{style:{height:"100%",width:"100%"}},{default:i(()=>[l(r,{size:"small",onClick:A=>V(1,o),class:I(S("access",o)),severity:"secondary"},{default:i(()=>[l(u(O))]),_:2},1032,["onClick","class"]),l(r,{size:"small",onClick:A=>V(0,o),class:I(S("default",o)),severity:"secondary"},{default:i(()=>[l(u(T))]),_:2},1032,["onClick","class"]),l(r,{size:"small",onClick:A=>V(-1,o),class:I(S("block",o)),severity:"secondary"},{default:i(()=>[l(u(B))]),_:2},1032,["onClick","class"])]),_:2},1024)])],2))),256))])])]),a("div",Ve,[l(r,{onClick:$,severity:"secondary"},{default:i(()=>[y("取消")]),_:1}),l(u(D),{layout:"vertical"}),l(r,{onClick:H,severity:"success"},{default:i(()=>[y("确定")]),_:1})])])}}},Pe=J(be,[["__scopeId","data-v-265e47f7"]]);export{Pe as default};
