import{C as U,H as a,r as m,E as l}from"./index-BwtyHAuI.js";const P=U("auth",()=>{const t=a(!1),n=a(""),r=a("none"),o=m({}),i=()=>t.value,u=()=>n.value,f=()=>r.value,c=()=>l(o);return{isLogin:t,userName:n,userPermission:r,userInfo:o,getIsLogin:i,getUserName:u,getUserPermission:f,getUserInfo:c,setIsLogin:e=>t.value=!!e,setUserName:e=>n.value=e,setUserPermission:e=>r.value=e,setUserInfo:(e,s)=>o[e]=s,coverUserInfo:e=>{Object.keys(c()).forEach(s=>delete o[s]),Object.keys(e).forEach(s=>o[s]=e[s])}}});export{P as u};