const __vite__fileDeps=["assets/index-fuTe51Z2.js","assets/index-zLBKAhNj.js","assets/index-BKgpESBG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{h as B,G as T,H as b,a as _,k as f,b as e,d as a,F as w,A as C,c as U,w as p,f as m,t as d,e as V,g as P,_ as K,J as I,Q as L,K as F,S as M,V as N}from"./index-zLBKAhNj.js";import{u as $}from"./hy2Server-CvyGRMCY.js";const t=h=>(M("data-v-7f2d39f4"),h=h(),N(),h),j={EditMainBase:"",style:{display:"flex"}},G={EditMainTable:""},H=t(()=>e("td",null,"IP",-1)),J=t(()=>e("td",null,"域名",-1)),z=t(()=>e("td",null,"别名",-1)),R=t(()=>e("td",null,"代理端口",-1)),Q={style:{display:"flex","flex-direction":"column",gap:"5px"}},q=t(()=>e("td",null,"api端口",-1)),W=t(()=>e("td",null,"api秘钥",-1)),X=t(()=>e("td",null,"api连通性",-1)),Y=t(()=>e("td",null,"在线上限 设备",-1)),Z=t(()=>e("td",null,"流量上限 GB",-1)),ee={EditMainInfo:""},le=t(()=>e("td",null,"通过认证次数：",-1)),te=t(()=>e("td",null,"首次连接时间：",-1)),ne=t(()=>e("td",null,"最近连接时间：",-1)),oe=t(()=>e("td",null,"错误 - 方法错误：",-1)),ae=t(()=>e("td",null,"错误 - 请求体错误：",-1)),de=t(()=>e("td",null,"错误 - 拒绝认证：",-1)),ue=t(()=>e("td",null,"错误 - 超时错误：",-1)),se=t(()=>e("td",null,"已用流量：",-1)),ie=t(()=>e("td",null,"已用占比：",-1)),re=t(()=>e("td",null,"当前在线设备数：",-1)),ve=t(()=>e("td",null,"在线设备明细：",-1)),ce={ActionDiv:""},_e={__name:"registerServerEdit",setup(h){const y=P(()=>K(()=>import("./index-fuTe51Z2.js"),__vite__mapDeps([0,1,2]))),u=$(),x=T(),l=b({}),r=b("测试"),g=()=>{l.value=JSON.parse(JSON.stringify(u.registeredList[u.editIndex]))},k=()=>{g()},D=()=>{u.editDialogMode="none",u.editIndex=-1,u.editDialogShow=!1},E=s=>{l.value.port[s].length==0&&l.value.port.splice(s,1)},O=()=>{r.value!=="测试中..."&&(r.value="测试中...",I.post("/hy2ServerInfo/testServer",{target:l.value.address,domain:l.value.domain,port:l.value.infoPort,authkey:l.value.infoAuthKey}).then(s=>{r.value=`成功 ${(s.data.responseTime/1e3).toFixed(2)}s`}).catch(s=>{r.value="失败"}))},A=()=>{I.post("/hy2ServerInfo/editServer",{target:l.value.address,domain:l.value.domain,alias:l.value.alias,port:l.value.port,infoPort:l.value.infoPort,infoAuthKey:l.value.infoAuthKey,maxOnline:l.value.maxOnline,maxBandwidth:l.value.bandwidth.total}).then(s=>{x.add({severity:"success",summary:"提示",detail:"修改成功",life:1e3}),u.editDialogMode="done",u.editIndex=-1,u.editDialogShow=!1,u.freshTarget+=1}).catch(s=>{x.add({severity:"error",summary:"错误",detail:"修改失败",life:3e3})})};return g(),(s,o)=>{const i=L,v=F;return _(),f("div",null,[e("div",j,[e("table",G,[e("tbody",null,[e("tr",null,[H,e("td",null,[a(i,{modelValue:l.value.address,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value.address=n),disabled:"true"},null,8,["modelValue"])])]),e("tr",null,[J,e("td",null,[a(i,{modelValue:l.value.domain,"onUpdate:modelValue":o[1]||(o[1]=n=>l.value.domain=n)},null,8,["modelValue"])])]),e("tr",null,[z,e("td",null,[a(i,{modelValue:l.value.alias,"onUpdate:modelValue":o[2]||(o[2]=n=>l.value.alias=n)},null,8,["modelValue"])])]),e("tr",null,[R,e("td",Q,[(_(!0),f(w,null,C(l.value.port,(n,c)=>(_(),U(i,{modelValue:l.value.port[c],"onUpdate:modelValue":S=>l.value.port[c]=S,onChange:S=>E(c)},null,8,["modelValue","onUpdate:modelValue","onChange"]))),256)),a(v,{onClick:o[3]||(o[3]=n=>l.value.port.push("")),severity:"secondary",outlined:"",size:"small"},{default:p(()=>[m("添加")]),_:1})])]),e("tr",null,[q,e("td",null,[a(i,{modelValue:l.value.infoPort,"onUpdate:modelValue":o[4]||(o[4]=n=>l.value.infoPort=n),type:"number"},null,8,["modelValue"])])]),e("tr",null,[W,e("td",null,[a(i,{modelValue:l.value.infoAuthKey,"onUpdate:modelValue":o[5]||(o[5]=n=>l.value.infoAuthKey=n)},null,8,["modelValue"])])]),e("tr",null,[X,e("td",null,[a(v,{onClick:O,style:{width:"100%"},severity:"secondary",outlined:"",size:"small"},{default:p(()=>[m(d(r.value),1)]),_:1})])]),e("tr",null,[Y,e("td",null,[a(i,{modelValue:l.value.maxOnline,"onUpdate:modelValue":o[6]||(o[6]=n=>l.value.maxOnline=n),type:"number"},null,8,["modelValue"])])]),e("tr",null,[Z,e("td",null,[a(i,{modelValue:l.value.bandwidth.total,"onUpdate:modelValue":o[7]||(o[7]=n=>l.value.bandwidth.total=n)},null,8,["modelValue"])])])])]),a(V(y),{layout:"vertical"}),e("div",ee,[e("table",null,[e("tbody",null,[e("tr",null,[le,e("td",null,d(l.value.authCount),1)]),e("tr",null,[te,e("td",null,d(new Date(l.value.firstConnect).toLocaleString()),1)]),e("tr",null,[ne,e("td",null,d(new Date(l.value.lastConnect).toLocaleString()),1)]),e("tr",null,[oe,e("td",null,d(l.value.error.method),1)]),e("tr",null,[ae,e("td",null,d(l.value.error.body),1)]),e("tr",null,[de,e("td",null,d(l.value.error.reject),1)]),e("tr",null,[ue,e("td",null,d(l.value.error.timeout),1)]),e("tr",null,[se,e("td",null,d(l.value.bandwidth.used)+" GB",1)]),e("tr",null,[ie,e("td",null,d((l.value.bandwidth.used/l.value.bandwidth.total*100).toFixed(2))+"%",1)]),e("tr",null,[re,e("td",null,d(l.value.nowOnline),1)]),e("tr",null,[ve,e("td",null,[(_(!0),f(w,null,C(l.value.onlineList,(n,c)=>(_(),f("p",null,d(c)+" : "+d(n),1))),256))])])])])])]),e("div",ce,[a(v,{onClick:k,severity:"secondary"},{default:p(()=>[m("重置")]),_:1}),a(V(y),{layout:"vertical"}),a(v,{onClick:D,severity:"secondary"},{default:p(()=>[m("取消")]),_:1}),a(V(y),{layout:"vertical"}),a(v,{onClick:A},{default:p(()=>[m("确定")]),_:1})])])}}},he=B(_e,[["__scopeId","data-v-7f2d39f4"]]);export{he as default};