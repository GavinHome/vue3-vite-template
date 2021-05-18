var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,a=(e,a)=>{for(var s in a||(a={}))r.call(a,s)&&o(e,s,a[s]);if(t)for(var s of t(a))n.call(a,s)&&o(e,s,a[s]);return e};import{C as s,R as i,L as c,M as u,_ as l,a as f,d as p,r as d,o as h,c as m,b as R,w as E,e as y,t as g,u as O,f as v,F as w,g as T,h as _,i as b,j as A,K as S,k as U,l as N,m as x,n as j,N as L,p as P,q as C,s as I}from"./vendor.8838f49e.js";var k=p({name:"App",components:{}});let D;k.render=function(e,t,r,n,o,a){const s=d("router-view");return h(),m(s)};const B={},q=function(e,t){if(!t)return e();if(void 0===D){const e=document.createElement("link").relList;D=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in B)return;B[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":D,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};const H={ROUTER_ABOUT:"about",ROUTER_HOME:"home",ROUTER_ERROR:"error",ROUTER_DASHBOARD:"dashboard",ROUTER_LOGIN:"login"};var M=p({name:"Header",setup(){const e=O(),t=R({selectedKeys:[],menus:[{key:H.ROUTER_HOME,title:"Home"},{key:H.ROUTER_ABOUT,title:"About"},{key:"counter",title:"Counter"},{key:"axios",title:"Axios"}],click:async t=>{await e.push({name:t.key})}}),r=e=>{const r=e.replace("/","");t.menus.find((e=>e.key===r))?t.selectedKeys=[r]:t.selectedKeys=[H.ROUTER_HOME]};return E((()=>e.currentRoute.value),(e=>{r(e.path)})),y((()=>{e.isReady().then((()=>{r(e.currentRoute.value.path)}))})),a({},g(t))}});M.render=function(e,t,r,n,o,a){const s=d("a-menu-item"),i=d("a-menu");return h(),m(i,{mode:"horizontal",selectedKeys:e.selectedKeys,onClick:e.click},{default:v((()=>[(h(!0),m(w,null,T(e.menus,(e=>(h(),m(s,{key:e.key},{default:v((()=>[_(b(e.title),1)])),_:2},1024)))),128))])),_:1},8,["selectedKeys","onClick"])};var F=p({name:"Home",components:{Header:M}});const G={class:"content"};F.render=function(e,t,r,n,o,a){const s=d("Header"),i=d("router-view"),c=d("a-layout-content"),u=d("a-layout");return h(),m(u,{style:{height:"100%"}},{default:v((()=>[A(s),A(c,null,{default:v((()=>[A("div",G,[A(i,null,{default:v((({Component:e})=>[(h(),m(S,{include:["Dashboard","Counter","Axios"]},[(h(),m(U(e)))],1024))])),_:1})])])),_:1})])),_:1})};const $={API_LOGIN:"api/v1/user/login",API_REFRESH_TOKEN:"api/v1/user/refresh",API_LOG_INDEX:"qjtp/v1/log/index",API_AXIOS_USER:"/users/GavinHome"},K=[$.API_LOGIN,$.API_AXIOS_USER,$.API_LOG_INDEX],z="NO_LOGIN",V="NO_TOKEN",X=300,J="登录已过期，请重新登录",W="获取数据错误，请稍后重试";var Q={exports:{}},Y=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},Z=Y,ee=Object.prototype.toString;function te(e){return"[object Array]"===ee.call(e)}function re(e){return void 0===e}function ne(e){return null!==e&&"object"==typeof e}function oe(e){if("[object Object]"!==ee.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function ae(e){return"[object Function]"===ee.call(e)}function se(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),te(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ie={isArray:te,isArrayBuffer:function(e){return"[object ArrayBuffer]"===ee.call(e)},isBuffer:function(e){return null!==e&&!re(e)&&null!==e.constructor&&!re(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:ne,isPlainObject:oe,isUndefined:re,isDate:function(e){return"[object Date]"===ee.call(e)},isFile:function(e){return"[object File]"===ee.call(e)},isBlob:function(e){return"[object Blob]"===ee.call(e)},isFunction:ae,isStream:function(e){return ne(e)&&ae(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:se,merge:function e(){var t={};function r(r,n){oe(t[n])&&oe(r)?t[n]=e(t[n],r):oe(r)?t[n]=e({},r):te(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)se(arguments[n],r);return t},extend:function(e,t,r){return se(t,(function(t,n){e[n]=r&&"function"==typeof t?Z(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},ce=ie;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var le=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(ce.isURLSearchParams(t))n=t.toString();else{var o=[];ce.forEach(t,(function(e,t){null!=e&&(ce.isArray(e)?t+="[]":e=[e],ce.forEach(e,(function(e){ce.isDate(e)?e=e.toISOString():ce.isObject(e)&&(e=JSON.stringify(e)),o.push(ue(t)+"="+ue(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},fe=ie;function pe(){this.handlers=[]}pe.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},pe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},pe.prototype.forEach=function(e){fe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var de=pe,he=ie,me=function(e){return!(!e||!e.__CANCEL__)},Re=ie,Ee=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},ye=function(e,t,r,n,o){var a=new Error(e);return Ee(a,t,r,n,o)},ge=ye,Oe=ie,ve=Oe.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),Oe.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),Oe.isString(n)&&s.push("path="+n),Oe.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},we=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Te=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},_e=ie,be=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ae=ie,Se=Ae.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=Ae.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},Ue=ie,Ne=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(ge("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},xe=ve,je=le,Le=function(e,t){return e&&!we(t)?Te(e,t):t},Pe=function(e){var t,r,n,o={};return e?(_e.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=_e.trim(e.substr(0,n)).toLowerCase(),r=_e.trim(e.substr(n+1)),t){if(o[t]&&be.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},Ce=Se,Ie=ye,ke=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;Ue.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var c=Le(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),je(c,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?Pe(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};Ne(t,r,o),a=null}},a.onabort=function(){a&&(r(Ie("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(Ie("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(Ie(t,e,"ECONNABORTED",a)),a=null},Ue.isStandardBrowserEnv()){var u=(e.withCredentials||Ce(c))&&e.xsrfCookieName?xe.read(e.xsrfCookieName):void 0;u&&(o[e.xsrfHeaderName]=u)}if("setRequestHeader"in a&&Ue.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),Ue.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(l){if("json"!==e.responseType)throw l}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},De=ie,Be=function(e,t){Re.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},qe={"Content-Type":"application/x-www-form-urlencoded"};function He(e,t){!De.isUndefined(e)&&De.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Me,Fe={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Me=ke),Me),transformRequest:[function(e,t){return Be(t,"Accept"),Be(t,"Content-Type"),De.isFormData(e)||De.isArrayBuffer(e)||De.isBuffer(e)||De.isStream(e)||De.isFile(e)||De.isBlob(e)?e:De.isArrayBufferView(e)?e.buffer:De.isURLSearchParams(e)?(He(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):De.isObject(e)?(He(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Fe.headers={common:{Accept:"application/json, text/plain, */*"}},De.forEach(["delete","get","head"],(function(e){Fe.headers[e]={}})),De.forEach(["post","put","patch"],(function(e){Fe.headers[e]=De.merge(qe)}));var Ge=Fe,$e=ie,Ke=function(e,t,r){return he.forEach(r,(function(r){e=r(e,t)})),e},ze=me,Ve=Ge;function Xe(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Je=ie,We=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return Je.isPlainObject(e)&&Je.isPlainObject(t)?Je.merge(e,t):Je.isPlainObject(t)?Je.merge({},t):Je.isArray(t)?t.slice():t}function c(n){Je.isUndefined(t[n])?Je.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}Je.forEach(n,(function(e){Je.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),Je.forEach(o,c),Je.forEach(a,(function(n){Je.isUndefined(t[n])?Je.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),Je.forEach(s,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var u=n.concat(o).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return Je.forEach(l,c),r},Qe=ie,Ye=le,Ze=de,et=function(e){return Xe(e),e.headers=e.headers||{},e.data=Ke(e.data,e.headers,e.transformRequest),e.headers=$e.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),$e.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Ve.adapter)(e).then((function(t){return Xe(e),t.data=Ke(t.data,t.headers,e.transformResponse),t}),(function(t){return ze(t)||(Xe(e),t&&t.response&&(t.response.data=Ke(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},tt=We;function rt(e){this.defaults=e,this.interceptors={request:new Ze,response:new Ze}}rt.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=tt(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[et,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},rt.prototype.getUri=function(e){return e=tt(this.defaults,e),Ye(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Qe.forEach(["delete","get","head","options"],(function(e){rt.prototype[e]=function(t,r){return this.request(tt(r||{},{method:e,url:t,data:(r||{}).data}))}})),Qe.forEach(["post","put","patch"],(function(e){rt.prototype[e]=function(t,r,n){return this.request(tt(n||{},{method:e,url:t,data:r}))}}));var nt=rt;function ot(e){this.message=e}ot.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ot.prototype.__CANCEL__=!0;var at=ot,st=at;function it(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new st(e),t(r.reason))}))}it.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},it.source=function(){var e;return{token:new it((function(t){e=t})),cancel:e}};var ct=it,ut=ie,lt=Y,ft=nt,pt=We;function dt(e){var t=new ft(e),r=lt(ft.prototype.request,t);return ut.extend(r,ft.prototype,t),ut.extend(r,t),r}var ht=dt(Ge);ht.Axios=ft,ht.create=function(e){return dt(pt(ht.defaults,e))},ht.Cancel=at,ht.CancelToken=ct,ht.isCancel=me,ht.all=function(e){return Promise.all(e)},ht.spread=function(e){return function(t){return e.apply(null,t)}},ht.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},Q.exports=ht,Q.exports.default=ht;var mt=Q.exports;const Rt=(e,t,r)=>{N.success(e,t,r)},Et=(e,t,r)=>{N.warning(e,t,r)},yt=(e,t,r)=>{N.info(e,t,r)},gt=(e,t,r)=>{N.error(e,t,r)},Ot=()=>({openSuccessMsg:Rt,openWarnMsg:Et,openInfoMsg:yt,openErrorMsg:gt}),vt=e=>{e.metaData={user:jt()},Ut.post(`${$.API_LOG_INDEX}`,e)},wt=()=>({setLog:vt});var Tt,_t,bt,At;(_t=Tt||(Tt={})).JSON="application/json;charset=UTF-8",_t.FORM="application/x-www-form-urlencoded; charset=UTF-8",_t.TEXT="text/xml",_t.BLOB="blob",_t.FORMDATA="multipart/form-data",_t.Other="application/octet-stream",_t.Arraybuffer="arraybuffer",(At=bt||(bt={})).GET="GET",At.POST="POST",At.PUT="PUT",At.PATCH="PATCH",At.DELETE="DELETE";const St=mt.create({baseURL:"https://api.github.com",timeout:6e7,responseType:"json",headers:{"Content-Type":"application/json;charset=UTF-8","Cache-Control":"no-cache"}});St.interceptors.request.use((async e=>(await(async e=>{e.headers=Object.assign(e.headers,{"Cache-Control":"no-cache"});const t=(r=e.url)?r.indexOf("?")>-1?r.split("?")[0]:r:"";var r;if(e.url&&K.every((e=>e!==t))){const r=jt();if(t===$.API_REFRESH_TOKEN)e.headers.Authorization||(e.headers.Authorization=`Bearer ${r.token}`);else try{e.headers.Authorization=`Bearer ${r.token}`}catch(n){Ot().openWarnMsg(J),await Ct.replace({name:H.ROUTER_LOGIN,params:{redirect:Ct.currentRoute.value.fullPath}})}}"get"===e.method&&(e.params?Object.assign(e.params,{timestamp:(new Date).getTime()}):Object.assign(e,{params:{timestamp:(new Date).getTime()}}))})(e),e)),(e=>Promise.reject(e))),St.interceptors.response.use((e=>e),(e=>(e&&e.toString().indexOf("500")>0&&Ct.replace({name:H.ROUTER_ERROR,params:{msg:e}}),Promise.reject(e))));var Ut=class{constructor(){this.axios=St}static getInstance(){return this.instance instanceof this==!1&&(this.instance=new this),this.instance}base(e){const t=null==e.contentType?Tt.JSON:e.contentType,{data:r}=e,n=a({"Content-Type":t},e.headers),o=null!=e.responseType?e.responseType:"json",s=e.method||bt.POST;return this.axios.request({method:s,url:e.url,data:JSON.stringify(r),headers:n,responseType:o}).catch((e=>this.handelResquestError(e)))}async get(e,t,r=!0){const n=await this.axios.get(e,{params:t}).catch((e=>this.handelResquestError(e)));return this.handelResponse(n,r)}async post(e,t,r=!0){const n=await this.axios.post(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(n,r)}async put(e,t,r=!0){const n=await this.axios.put(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(n,r)}async patch(e,t,r=!0){const n=await this.axios.patch(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(n,r)}async delete(e,t,r=!0){const n=await this.axios.delete(e,{data:t}).catch((e=>this.handelResquestError(e)));return this.handelResponse(n,r)}handelResponse(e,t=!0,r=!1){try{if(200===e.status){const r=e.data;if(t){if(!1===r.data.isSuccess){const e=r.data.message;Ct.replace({name:H.ROUTER_ERROR,params:{msg:e}})}return r.data}return e.data}Ct.replace({name:H.ROUTER_ERROR,params:{msg:e.statusText}});const r=new Error(e.statusText);throw this.handelResponseError(r,e),new Error}catch(n){throw r&&Ot().openErrorMsg(W),this.handelResponseError(n,e),n}}handelResquestError(e){const t={entryName:"vue3+vite+template, 正式环境",version:"%BUILDNUMBER%, %REVISION%",message:e.message,metaData:{},name:e.name,releaseStage:"production",severity:e.name,stacktrace:e.stacktrace,time:Date.now(),title:"handle request error",type:"HTTP Request",url:location.href,client:{userAgent:window.navigator.userAgent,height:window.screen.height,width:window.screen.width,referrer:window.document.referrer},error:e,lineNumber:null,columnNumber:null,fileName:location.href,pageLevel:null};throw wt().setLog(t),e}handelResponseError(e,t){const r={entryName:"vue3+vite+template, 正式环境",version:"%BUILDNUMBER%, %REVISION%",message:e.message,metaData:{},name:e.name,releaseStage:"production",severity:e.name,stacktrace:e.stacktrace,time:Date.now(),title:"handle response error",type:"HTTP Response",url:location.href,client:{userAgent:window.navigator.userAgent,height:window.screen.height,width:window.screen.width,referrer:window.document.referrer},data:t,error:e,lineNumber:null,columnNumber:null,fileName:location.href,pageLevel:null};throw wt().setLog(r),e}}.getInstance();const Nt={count:0,user:null};var xt=x({state:()=>Nt,mutations:{increment(e){e.count+=1},SET_USER:(e,t)=>{e.user=t},CLEAR_USER:e=>{e.user=null}},actions:{increment(e){e.commit("increment")},SIGN:async({commit:e},t)=>{e("SET_USER",t)},SIGNOUT:async({commit:e})=>e("CLEAR_USER")},getters:{double:e=>2*e.count}});const jt=()=>xt.state.user,Lt=()=>new Promise((async(e,t)=>{const r=xt.state.user;if(r&&!r.token)t(z);else{const n=j(r.tokenExpiration).toDate(),o=j().toDate();if(o>n)await xt.dispatch("SIGNOUT"),t(V);else{if(j(n).subtract(X,"second").toDate()<=o){const r=await Ut.post(`${$.API_REFRESH_TOKEN}`);r.isSuccess&&r.result?await xt.dispatch("SIGN",r.result):t(V),e(r.result.token)}else e(r.token)}}}));L.configure({showSpinner:!1});const Pt=[{path:"/",name:H.ROUTER_DASHBOARD,component:F,redirect:`${H.ROUTER_HOME}`,children:[{path:`/${H.ROUTER_HOME}`,name:H.ROUTER_HOME,component:()=>q((()=>import("./Dashboard.06af0efd.js")),["/vue3-vite-template/assets/Dashboard.06af0efd.js","/vue3-vite-template/assets/Dashboard.e093cb69.css","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{title:"home"}},{path:`/${H.ROUTER_ABOUT}`,name:H.ROUTER_ABOUT,component:()=>q((()=>import("./About.8851bb95.js")),["/vue3-vite-template/assets/About.8851bb95.js","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{title:"about"}},{path:"/counter",name:"counter",component:()=>q((()=>import("./Counter.8338c155.js")),["/vue3-vite-template/assets/Counter.8338c155.js","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{title:"counter"}},{path:"/axios",name:"axios",component:()=>q((()=>import("./Axios.7b571c3c.js")),["/vue3-vite-template/assets/Axios.7b571c3c.js","/vue3-vite-template/assets/Axios.1bdd4867.css","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{title:"axios"}}]},{path:`/${H.ROUTER_LOGIN}`,name:H.ROUTER_LOGIN,component:()=>q((()=>import("./Login.4c7d833f.js")),["/vue3-vite-template/assets/Login.4c7d833f.js","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{auth:!1}},{path:`/${H.ROUTER_ERROR}`,name:H.ROUTER_ERROR,component:()=>q((()=>import("./Error.f79a64e9.js")),["/vue3-vite-template/assets/Error.f79a64e9.js","/vue3-vite-template/assets/Error.45cfa600.css","/vue3-vite-template/assets/vendor.8838f49e.js","/vue3-vite-template/assets/vendor.769febc5.css"]),meta:{auth:!1}}],Ct=P({history:C(),routes:Pt});Ct.beforeEach(((e,t,r)=>{L.start(),document.title="vue3+vite+template",e.meta&&e.meta.title&&(document.title=`vue3+vite+template-${e.meta.title}`),e.meta&&e.meta.auth?Lt().then((()=>{r()})).catch((t=>{t===V&&Ot().openWarnMsg(J),r({name:H.ROUTER_LOGIN,query:{redirect:e.fullPath}})})):r()})),Ct.afterEach((()=>{L.done()}));const It=I(k);var kt;(kt=It,kt.use(s).use(i).use(c).use(u).use(l).use(f),kt).use(Ct).use(xt).mount("#app");export{$ as A,H as R,Ut as a};
