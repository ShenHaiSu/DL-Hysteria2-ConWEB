const __vite__fileDeps=["assets/IconUser-DiDWWceV.js","assets/index-CERascCJ.js","assets/index-7WczYgYX.css","assets/index-BfltZlr1.js","assets/index-DOdbGdfZ.js","assets/index-zWbAwS9T.js","assets/index-CdrSEqyl.js","assets/index-C77_H8se.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{B as Q,l as X,a as b,k as B,m as R,K as Y,x as G,C as ee,H as w,r as te,E as ne,h as re,G as oe,j as ie,o as se,I as T,b as v,d as U,e as x,t as N,w as F,F as M,A as ae,f as z,c as le,g as A,_ as C,J as de,L as ue,M as ce,N as fe}from"./index-CERascCJ.js";var ve=function(p){var r=p.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(r("divider.horizontal.margin"),`;
    padding: `).concat(r("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-top: 1px solid `).concat(r("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(r("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(r("divider.vertical.margin"),`;
    padding: `).concat(r("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
    border-left: 1px solid `).concat(r("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(r("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(r("divider.content.background"),`;
    color: `).concat(r("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-left-style: dotted;
}
`)},pe={root:function(p){var r=p.props;return{justifyContent:r.layout==="horizontal"?r.align==="center"||r.align===null?"center":r.align==="left"?"flex-start":r.align==="right"?"flex-end":null:null,alignItems:r.layout==="vertical"?r.align==="center"||r.align===null?"center":r.align==="top"?"flex-start":r.align==="bottom"?"flex-end":null:null}}},he={root:function(p){var r=p.props;return["p-divider p-component","p-divider-"+r.layout,"p-divider-"+r.type,{"p-divider-left":r.layout==="horizontal"&&(!r.align||r.align==="left")},{"p-divider-center":r.layout==="horizontal"&&r.align==="center"},{"p-divider-right":r.layout==="horizontal"&&r.align==="right"},{"p-divider-top":r.layout==="vertical"&&r.align==="top"},{"p-divider-center":r.layout==="vertical"&&(!r.align||r.align==="center")},{"p-divider-bottom":r.layout==="vertical"&&r.align==="bottom"}]},content:"p-divider-content"},me=Q.extend({name:"divider",theme:ve,classes:he,inlineStyles:pe}),ge={name:"BaseDivider",extends:X,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:me,provide:function(){return{$pcDivider:this,$parentInstance:this}}},j={name:"Divider",extends:ge,inheritAttrs:!1},ye=["aria-orientation"];function _e(l,p,r,u,d,a){return b(),B("div",R({class:l.cx("root"),style:l.sx("root"),role:"separator","aria-orientation":l.layout},l.ptmi("root")),[l.$slots.default?(b(),B("div",R({key:0,class:l.cx("content")},l.ptm("content")),[Y(l.$slots,"default")],16)):G("",!0)],16,ye)}j.render=_e;function Ie(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var J={exports:{}},Z={exports:{}};(function(){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p={rotl:function(r,u){return r<<u|r>>>32-u},rotr:function(r,u){return r<<32-u|r>>>u},endian:function(r){if(r.constructor==Number)return p.rotl(r,8)&16711935|p.rotl(r,24)&4278255360;for(var u=0;u<r.length;u++)r[u]=p.endian(r[u]);return r},randomBytes:function(r){for(var u=[];r>0;r--)u.push(Math.floor(Math.random()*256));return u},bytesToWords:function(r){for(var u=[],d=0,a=0;d<r.length;d++,a+=8)u[a>>>5]|=r[d]<<24-a%32;return u},wordsToBytes:function(r){for(var u=[],d=0;d<r.length*32;d+=8)u.push(r[d>>>5]>>>24-d%32&255);return u},bytesToHex:function(r){for(var u=[],d=0;d<r.length;d++)u.push((r[d]>>>4).toString(16)),u.push((r[d]&15).toString(16));return u.join("")},hexToBytes:function(r){for(var u=[],d=0;d<r.length;d+=2)u.push(parseInt(r.substr(d,2),16));return u},bytesToBase64:function(r){for(var u=[],d=0;d<r.length;d+=3)for(var a=r[d]<<16|r[d+1]<<8|r[d+2],c=0;c<4;c++)d*8+c*6<=r.length*8?u.push(l.charAt(a>>>6*(3-c)&63)):u.push("=");return u.join("")},base64ToBytes:function(r){r=r.replace(/[^A-Z0-9+\/]/ig,"");for(var u=[],d=0,a=0;d<r.length;a=++d%4)a!=0&&u.push((l.indexOf(r.charAt(d-1))&Math.pow(2,-2*a+8)-1)<<a*2|l.indexOf(r.charAt(d))>>>6-a*2);return u}};Z.exports=p})();var Ue=Z.exports,K={utf8:{stringToBytes:function(l){return K.bin.stringToBytes(unescape(encodeURIComponent(l)))},bytesToString:function(l){return decodeURIComponent(escape(K.bin.bytesToString(l)))}},bin:{stringToBytes:function(l){for(var p=[],r=0;r<l.length;r++)p.push(l.charCodeAt(r)&255);return p},bytesToString:function(l){for(var p=[],r=0;r<l.length;r++)p.push(String.fromCharCode(l[r]));return p.join("")}}},H=K;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var xe=function(l){return l!=null&&(q(l)||Se(l)||!!l._isBuffer)};function q(l){return!!l.constructor&&typeof l.constructor.isBuffer=="function"&&l.constructor.isBuffer(l)}function Se(l){return typeof l.readFloatLE=="function"&&typeof l.slice=="function"&&q(l.slice(0,0))}(function(){var l=Ue,p=H.utf8,r=xe,u=H.bin,d=function(a,c){a.constructor==String?c&&c.encoding==="binary"?a=u.stringToBytes(a):a=p.stringToBytes(a):r(a)?a=Array.prototype.slice.call(a,0):!Array.isArray(a)&&a.constructor!==Uint8Array&&(a=a.toString());for(var i=l.bytesToWords(a),g=a.length*8,o=1732584193,t=-271733879,e=-1732584194,n=271733878,s=0;s<i.length;s++)i[s]=(i[s]<<8|i[s]>>>24)&16711935|(i[s]<<24|i[s]>>>8)&4278255360;i[g>>>5]|=128<<g%32,i[(g+64>>>9<<4)+14]=g;for(var h=d._ff,_=d._gg,I=d._hh,y=d._ii,s=0;s<i.length;s+=16){var E=o,V=t,P=e,D=n;o=h(o,t,e,n,i[s+0],7,-680876936),n=h(n,o,t,e,i[s+1],12,-389564586),e=h(e,n,o,t,i[s+2],17,606105819),t=h(t,e,n,o,i[s+3],22,-1044525330),o=h(o,t,e,n,i[s+4],7,-176418897),n=h(n,o,t,e,i[s+5],12,1200080426),e=h(e,n,o,t,i[s+6],17,-1473231341),t=h(t,e,n,o,i[s+7],22,-45705983),o=h(o,t,e,n,i[s+8],7,1770035416),n=h(n,o,t,e,i[s+9],12,-1958414417),e=h(e,n,o,t,i[s+10],17,-42063),t=h(t,e,n,o,i[s+11],22,-1990404162),o=h(o,t,e,n,i[s+12],7,1804603682),n=h(n,o,t,e,i[s+13],12,-40341101),e=h(e,n,o,t,i[s+14],17,-1502002290),t=h(t,e,n,o,i[s+15],22,1236535329),o=_(o,t,e,n,i[s+1],5,-165796510),n=_(n,o,t,e,i[s+6],9,-1069501632),e=_(e,n,o,t,i[s+11],14,643717713),t=_(t,e,n,o,i[s+0],20,-373897302),o=_(o,t,e,n,i[s+5],5,-701558691),n=_(n,o,t,e,i[s+10],9,38016083),e=_(e,n,o,t,i[s+15],14,-660478335),t=_(t,e,n,o,i[s+4],20,-405537848),o=_(o,t,e,n,i[s+9],5,568446438),n=_(n,o,t,e,i[s+14],9,-1019803690),e=_(e,n,o,t,i[s+3],14,-187363961),t=_(t,e,n,o,i[s+8],20,1163531501),o=_(o,t,e,n,i[s+13],5,-1444681467),n=_(n,o,t,e,i[s+2],9,-51403784),e=_(e,n,o,t,i[s+7],14,1735328473),t=_(t,e,n,o,i[s+12],20,-1926607734),o=I(o,t,e,n,i[s+5],4,-378558),n=I(n,o,t,e,i[s+8],11,-2022574463),e=I(e,n,o,t,i[s+11],16,1839030562),t=I(t,e,n,o,i[s+14],23,-35309556),o=I(o,t,e,n,i[s+1],4,-1530992060),n=I(n,o,t,e,i[s+4],11,1272893353),e=I(e,n,o,t,i[s+7],16,-155497632),t=I(t,e,n,o,i[s+10],23,-1094730640),o=I(o,t,e,n,i[s+13],4,681279174),n=I(n,o,t,e,i[s+0],11,-358537222),e=I(e,n,o,t,i[s+3],16,-722521979),t=I(t,e,n,o,i[s+6],23,76029189),o=I(o,t,e,n,i[s+9],4,-640364487),n=I(n,o,t,e,i[s+12],11,-421815835),e=I(e,n,o,t,i[s+15],16,530742520),t=I(t,e,n,o,i[s+2],23,-995338651),o=y(o,t,e,n,i[s+0],6,-198630844),n=y(n,o,t,e,i[s+7],10,1126891415),e=y(e,n,o,t,i[s+14],15,-1416354905),t=y(t,e,n,o,i[s+5],21,-57434055),o=y(o,t,e,n,i[s+12],6,1700485571),n=y(n,o,t,e,i[s+3],10,-1894986606),e=y(e,n,o,t,i[s+10],15,-1051523),t=y(t,e,n,o,i[s+1],21,-2054922799),o=y(o,t,e,n,i[s+8],6,1873313359),n=y(n,o,t,e,i[s+15],10,-30611744),e=y(e,n,o,t,i[s+6],15,-1560198380),t=y(t,e,n,o,i[s+13],21,1309151649),o=y(o,t,e,n,i[s+4],6,-145523070),n=y(n,o,t,e,i[s+11],10,-1120210379),e=y(e,n,o,t,i[s+2],15,718787259),t=y(t,e,n,o,i[s+9],21,-343485551),o=o+E>>>0,t=t+V>>>0,e=e+P>>>0,n=n+D>>>0}return l.endian([o,t,e,n])};d._ff=function(a,c,i,g,o,t,e){var n=a+(c&i|~c&g)+(o>>>0)+e;return(n<<t|n>>>32-t)+c},d._gg=function(a,c,i,g,o,t,e){var n=a+(c&g|i&~g)+(o>>>0)+e;return(n<<t|n>>>32-t)+c},d._hh=function(a,c,i,g,o,t,e){var n=a+(c^i^g)+(o>>>0)+e;return(n<<t|n>>>32-t)+c},d._ii=function(a,c,i,g,o,t,e){var n=a+(i^(c|~g))+(o>>>0)+e;return(n<<t|n>>>32-t)+c},d._blocksize=16,d._digestsize=16,J.exports=function(a,c){if(a==null)throw new Error("Illegal argument "+a);var i=l.wordsToBytes(d(a,c));return c&&c.asBytes?i:c&&c.asString?u.bytesToString(i):l.bytesToHex(i)}})();var Fe=J.exports;const W=Ie(Fe),ke=ee("auth",()=>{const l=w(!1),p=w(""),r=w("none"),u=te({}),d=()=>l.value,a=()=>p.value,c=()=>r.value,i=()=>ne(u);return{isLogin:l,userName:p,userPermission:r,userInfo:u,getIsLogin:d,getUserName:a,getUserPermission:c,getUserInfo:i,setIsLogin:s=>l.value=!!s,setUserName:s=>p.value=s,setUserPermission:s=>r.value=s,setUserInfo:(s,h)=>u[s]=h,coverUserInfo:s=>{Object.keys(i()).forEach(h=>delete u[h]),Object.keys(s).forEach(h=>u[h]=s[h])}}}),k=l=>(ce("data-v-35ffed4c"),l=l(),fe(),l),be=k(()=>v("div",null,[v("h2",null,"认证界面")],-1)),we={key:0,AuthCardDialogAuthed:""},Be={style:{width:"100%"}},Te=k(()=>v("td",null,"用户名",-1)),Pe=k(()=>v("td",null,"权限级别",-1)),Le={colspan:"2"},Ne=k(()=>v("br",null,null,-1)),ze=k(()=>v("br",null,null,-1)),Ae={key:1,AuthCardDialogUnauthed:""},Ce=k(()=>v("label",null,"账户名",-1)),Ee=k(()=>v("label",null,"密码",-1)),Ve=k(()=>v("label",null,"管理员秘钥",-1)),De=k(()=>v("br",null,null,-1)),Oe={__name:"AuthShow",setup(l){const p=A(()=>C(()=>import("./IconUser-DiDWWceV.js"),__vite__mapDeps([0,1,2]))),r=A(()=>C(()=>import("./index-BfltZlr1.js"),__vite__mapDeps([3,1,2]))),u=A(()=>C(()=>import("./index-DOdbGdfZ.js"),__vite__mapDeps([4,1,2,5,6]))),d=A(()=>C(()=>import("./index-C77_H8se.js"),__vite__mapDeps([7,1,2]))),a=ke(),c=w(!1),i=w(""),g=w(!1),o=w(""),t=w(""),e=oe(),n=()=>i.value.length==0||t.value.length==0,s=()=>W(W(t.value+"DAOLUOLTS").toString()),h=()=>{c.value=!0,g.value=!1,i.value="",t.value="",o.value=""},_=ie(()=>(console.log(Object.keys(a.getUserInfo())),Object.keys(a.getUserInfo())));se(()=>{T("/auth/checkLogin",{method:"post"}).then(m=>{const f=m.data;a.setUserName(f.userName),a.setUserPermission(f.userPermission),a.coverUserInfo(f.userInfo),a.setIsLogin(!0),e.add({severity:"success",summary:"身份验证",detail:"已通过身份验证，欢迎回来："+f.userName,life:3e3})}).catch(()=>{e.add({severity:"error",summary:"当前未登录",detail:"请先登录",life:3e3})})});const I=()=>{if(n())return e.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});if(!g.value)return g.value=!0;T("/auth/regist",{method:"post",data:{userName:i.value,userPassword:s(),adminKey:o.value}}).then(m=>{const f=m.data;a.setUserName(f.userName),a.setUserPermission(f.userPermission),a.coverUserInfo(f.userInfo),a.setIsLogin(!0)}).catch(m=>{e.add({severity:"error",summary:"错误",detail:m.response.data.msg,life:3e3})})},y=()=>{if(n())return e.add({severity:"error",summary:"错误",detail:"账号或密码不能为空",life:3e3});T("/auth/login",{method:"post",data:{userName:i.value,userPassword:s()}}).then(m=>{const f=m.data;a.setUserName(f.userName),a.setUserPermission(f.userPermission),a.coverUserInfo(f.userInfo),a.setIsLogin(!0),e.add({severity:"success",summary:"成功",detail:f.msg,life:3e3}),c.value=!1}).catch(m=>{e.add({severity:"error",summary:"错误",detail:m.response.data.msg,life:3e3})})},E=()=>{if(!a.getIsLogin())return e.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});T("/auth/logout",{method:"post"}).then(m=>{m.data,a.setIsLogin(!1),a.setUserName(""),a.setUserPermission("none"),a.coverUserInfo({}),e.add({severity:"success",summary:"成功",detail:"完成登出，现在是未登录状态。",life:3e3}),location.reload()}).catch(m=>{e.add({severity:"error",summary:"错误",detail:m.response.data.msg,life:3e3})})},V=()=>{if(!a.getIsLogin())return e.add({severity:"error",summary:"错误",detail:"当前已经是未登录状态，请刷新页面尝试修正显示。",life:3e3});T("/auth/checkLogin",{method:"post"}).then(m=>{const f=m.data;a.setUserName(f.userName),a.setUserPermission(f.userPermission),a.coverUserInfo(f.userInfo),a.setIsLogin(!0),e.add({severity:"success",summary:"成功",detail:"已收到服务器下发的新Session",life:3e3})}).catch(m=>{e.add({severity:"error",summary:"错误",detail:m.response.data.msg,life:3e3})})},P=m=>{if(m.key=="Enter")return y()},D=()=>{switch(a.getUserPermission()){case"none":return"";case"user":return"success";case"admin":return"danger"}};return(m,f)=>{const O=j,L=de,$=ue;return b(),B(M,null,[v("div",{AuthCardContainer:"",onClick:h},[U(x(p)),v("span",null,N(x(a).getIsLogin()?x(a).getUserName():"未登录"),1)]),U(x(u),{visible:c.value,"onUpdate:visible":f[3]||(f[3]=S=>c.value=S),modal:"",header:"认证界面",style:{maxWidth:"50vw",minWidth:"350px"}},{header:F(()=>[be]),default:F(()=>[x(a).isLogin?(b(),B("div",we,[v("div",null,[v("table",Be,[v("tbody",null,[v("tr",null,[Te,v("td",null,N(x(a).getUserName()),1)]),v("tr",null,[Pe,v("td",null,[U(x(d),{value:x(a).getUserPermission(),severity:D(),rounded:""},null,8,["value","severity"])])]),v("tr",null,[v("td",Le,[U(O,{style:{width:"100%"}})])]),(b(!0),B(M,null,ae(_.value,S=>(b(),B("tr",null,[v("td",null,N(S),1),v("td",null,N(x(a).getUserInfo()[S]),1)]))),256))])]),Ne,ze]),v("div",null,[U(L,{size:"small",onClick:V},{default:F(()=>[z("刷新")]),_:1}),U(O,{layout:"vertical"}),U(L,{size:"small",onClick:E},{default:F(()=>[z("登出")]),_:1})])])):(b(),B("div",Ae,[v("div",null,[U(x(r),null,{default:F(()=>[U($,{size:"small",onKeydown:P,modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=S=>i.value=S),placeholder:"必填"},null,8,["modelValue"]),Ce]),_:1}),U(x(r),null,{default:F(()=>[U($,{size:"small",type:"password",onKeydown:P,modelValue:t.value,"onUpdate:modelValue":f[1]||(f[1]=S=>t.value=S),placeholder:"必填"},null,8,["modelValue"]),Ee]),_:1}),g.value?(b(),le(x(r),{key:0},{default:F(()=>[U($,{size:"small",modelValue:o.value,"onUpdate:modelValue":f[2]||(f[2]=S=>o.value=S),placeholder:"选填"},null,8,["modelValue"]),Ve]),_:1})):G("",!0)]),De,v("div",null,[U(L,{size:"small",onClick:I,severity:"secondary"},{default:F(()=>[z("注册")]),_:1}),U(O,{layout:"vertical"}),U(L,{size:"small",onClick:y},{default:F(()=>[z("登录")]),_:1})])]))]),_:1},8,["visible"])],64)}}},Ke=re(Oe,[["__scopeId","data-v-35ffed4c"]]);export{Ke as default};
