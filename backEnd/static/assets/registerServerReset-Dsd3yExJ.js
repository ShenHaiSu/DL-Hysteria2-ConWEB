import{h as m,G as f,a as h,k as S,b as o,d as n,w as l,f as i,e as y,J as u,K as g,S as I,V as B}from"./index-DA5zFzRK.js";import{u as k}from"./hy2Server-CoeESwmN.js";const _=d=>(I("data-v-2e716896"),d=d(),B(),d),w={registerServerResetBase:""},R=_(()=>o("p",null,"重置服务器已用流量",-1)),C=_(()=>o("p",null,"重置服务器所有累计记录",-1)),D={style:{"justify-content":"center"}},V={__name:"registerServerReset",setup(d){const t=k(),c=f(),p=()=>{const r=t.registeredList[t.editIndex].address;u.post("/hy2ServerInfo/clearServerBandwidth",{target:r}).then(e=>{c.add({severity:"success",summary:"成功",detail:`${r} 服务器的已使用流量已完成归零`,life:1e3}),t.clsoeDialog(!0)}).catch(e=>{var s,a;c.add({severity:"error",summary:"错误",detail:((a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.msg)||"重置失败",life:3e3})})},v=()=>{const r=t.registeredList[t.editIndex].address;u.post("/hy2ServerInfo/clearServer",{target:r}).then(e=>{c.add({severity:"success",summary:"成功",detail:`${r} 服务器的所有累计信息完成归零`,life:1e3}),t.clsoeDialog(!0)}).catch(e=>{var s,a;c.add({severity:"error",summary:"错误",detail:((a=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:a.msg)||"重置失败",life:3e3})})};return(r,e)=>{const s=g;return h(),S("div",w,[o("div",null,[n(s,{onClick:p,size:"small"},{default:l(()=>[i("重置")]),_:1}),R]),o("div",null,[n(s,{onClick:v,size:"small"},{default:l(()=>[i("重置")]),_:1}),C]),o("div",D,[n(s,{onClick:e[0]||(e[0]=a=>y(t).clsoeDialog(!1))},{default:l(()=>[i("取消重置")]),_:1})])])}}},$=m(V,[["__scopeId","data-v-2e716896"]]);export{$ as default};