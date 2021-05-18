var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,a)=>{for(var s in a||(a={}))n.call(a,s)&&o(e,s,a[s]);if(t)for(var s of t(a))r.call(a,s)&&o(e,s,a[s]);return e};import{d as s,r as i,o as c,c as u,a as l,b as f,w as p,F as d,e as h,f as m,g as R,h as E,t as y,u as g,i as O,j as v,k as w,K as T,l as b,m as _,n as A,N as S,p as U,q as N,s as x,C as j,R as C,L,M as P,_ as I,v as k}from"./vendor.8c66bd39.js";var D=s({name:"App",components:{}});let B;D.render=function(e,t,n,r,o,a){const s=i("router-view");return c(),u(d,null,[l(' <div id="app" v-cloak> '),f(s,null,{default:p((({Component:e})=>[(c(),u(h(e)))])),_:1}),l(" </div> ")],2112)};const q={},H=function(e,t){if(!t)return e();if(void 0===B){const e=document.createElement("link").relList;B=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in q)return;q[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":B,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};const M={ROUTER_ABOUT:"about",ROUTER_HOME:"home",ROUTER_ERROR:"error",ROUTER_DASHBOARD:"dashboard",ROUTER_LOGIN:"login"};var F=s({name:"Header",setup(){const e=g(),t=m({selectedKeys:[],menus:[{key:M.ROUTER_HOME,title:"Home"},{key:M.ROUTER_ABOUT,title:"About"},{key:"counter",title:"Counter"},{key:"axios",title:"Axios"}],click:async t=>{await e.push({name:t.key})}}),n=e=>{const n=e.replace("/","");t.menus.find((e=>e.key===n))?t.selectedKeys=[n]:t.selectedKeys=[M.ROUTER_HOME]};return R((()=>e.currentRoute.value),(e=>{n(e.path)})),E((()=>{e.isReady().then((()=>{n(e.currentRoute.value.path)}))})),a({},y(t))}});F.render=function(e,t,n,r,o,a){const s=i("a-menu-item"),l=i("a-menu");return c(),u(l,{mode:"horizontal",selectedKeys:e.selectedKeys,onClick:e.click},{default:p((()=>[(c(!0),u(d,null,O(e.menus,(e=>(c(),u(s,{key:e.key},{default:p((()=>[v(w(e.title),1)])),_:2},1024)))),128))])),_:1},8,["selectedKeys","onClick"])};var G=s({name:"Home",components:{Header:F}});const $={class:"content"};G.render=function(e,t,n,r,o,a){const s=i("Header"),l=i("router-view"),d=i("a-layout-content"),m=i("a-layout");return c(),u(m,{style:{height:"100%"}},{default:p((()=>[f(s),f(d,null,{default:p((()=>[f("div",$,[f(l,null,{default:p((({Component:e})=>[(c(),u(T,{include:["Dashboard","Counter","Axios"]},[(c(),u(h(e)))],1024))])),_:1})])])),_:1})])),_:1})};const K={API_LOGIN:"api/v1/user/login",API_REFRESH_TOKEN:"api/v1/user/refresh",API_LOG_INDEX:"qjtp/v1/log/index",API_AXIOS_USER:"/users/GavinHome"},z=[K.API_LOGIN,K.API_AXIOS_USER,K.API_LOG_INDEX],V="NO_LOGIN",X="NO_TOKEN",J=300,W="登录已过期，请重新登录",Q="获取数据错误，请稍后重试";var Y={exports:{}},Z=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},ee=Z,te=Object.prototype.toString;function ne(e){return"[object Array]"===te.call(e)}function re(e){return void 0===e}function oe(e){return null!==e&&"object"==typeof e}function ae(e){if("[object Object]"!==te.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function se(e){return"[object Function]"===te.call(e)}function ie(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),ne(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ce={isArray:ne,isArrayBuffer:function(e){return"[object ArrayBuffer]"===te.call(e)},isBuffer:function(e){return null!==e&&!re(e)&&null!==e.constructor&&!re(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:oe,isPlainObject:ae,isUndefined:re,isDate:function(e){return"[object Date]"===te.call(e)},isFile:function(e){return"[object File]"===te.call(e)},isBlob:function(e){return"[object Blob]"===te.call(e)},isFunction:se,isStream:function(e){return oe(e)&&se(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:ie,merge:function e(){var t={};function n(n,r){ae(t[r])&&ae(n)?t[r]=e(t[r],n):ae(n)?t[r]=e({},n):ne(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)ie(arguments[r],n);return t},extend:function(e,t,n){return ie(t,(function(t,r){e[r]=n&&"function"==typeof t?ee(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},ue=ce;function le(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var fe=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(ue.isURLSearchParams(t))r=t.toString();else{var o=[];ue.forEach(t,(function(e,t){null!=e&&(ue.isArray(e)?t+="[]":e=[e],ue.forEach(e,(function(e){ue.isDate(e)?e=e.toISOString():ue.isObject(e)&&(e=JSON.stringify(e)),o.push(le(t)+"="+le(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},pe=ce;function de(){this.handlers=[]}de.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},de.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},de.prototype.forEach=function(e){pe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var he=de,me=ce,Re=function(e){return!(!e||!e.__CANCEL__)},Ee=ce,ye=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},ge=function(e,t,n,r,o){var a=new Error(e);return ye(a,t,n,r,o)},Oe=ge,ve=ce,we=ve.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),ve.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ve.isString(r)&&s.push("path="+r),ve.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Te=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},be=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},_e=ce,Ae=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Se=ce,Ue=Se.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=Se.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},Ne=ce,xe=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(Oe("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)},je=we,Ce=fe,Le=function(e,t){return e&&!Te(t)?be(e,t):t},Pe=function(e){var t,n,r,o={};return e?(_e.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=_e.trim(e.substr(0,r)).toLowerCase(),n=_e.trim(e.substr(r+1)),t){if(o[t]&&Ae.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},Ie=Ue,ke=ge,De=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;Ne.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var c=Le(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),Ce(c,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in a?Pe(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:r,config:e,request:a};xe(t,n,o),a=null}},a.onabort=function(){a&&(n(ke("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(ke("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ke(t,e,"ECONNABORTED",a)),a=null},Ne.isStandardBrowserEnv()){var u=(e.withCredentials||Ie(c))&&e.xsrfCookieName?je.read(e.xsrfCookieName):void 0;u&&(o[e.xsrfHeaderName]=u)}if("setRequestHeader"in a&&Ne.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),Ne.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(l){if("json"!==e.responseType)throw l}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},Be=ce,qe=function(e,t){Ee.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},He={"Content-Type":"application/x-www-form-urlencoded"};function Me(e,t){!Be.isUndefined(e)&&Be.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Fe,Ge={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Fe=De),Fe),transformRequest:[function(e,t){return qe(t,"Accept"),qe(t,"Content-Type"),Be.isFormData(e)||Be.isArrayBuffer(e)||Be.isBuffer(e)||Be.isStream(e)||Be.isFile(e)||Be.isBlob(e)?e:Be.isArrayBufferView(e)?e.buffer:Be.isURLSearchParams(e)?(Me(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Be.isObject(e)?(Me(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Ge.headers={common:{Accept:"application/json, text/plain, */*"}},Be.forEach(["delete","get","head"],(function(e){Ge.headers[e]={}})),Be.forEach(["post","put","patch"],(function(e){Ge.headers[e]=Be.merge(He)}));var $e=Ge,Ke=ce,ze=function(e,t,n){return me.forEach(n,(function(n){e=n(e,t)})),e},Ve=Re,Xe=$e;function Je(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var We=ce,Qe=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return We.isPlainObject(e)&&We.isPlainObject(t)?We.merge(e,t):We.isPlainObject(t)?We.merge({},t):We.isArray(t)?t.slice():t}function c(r){We.isUndefined(t[r])?We.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(e[r],t[r])}We.forEach(r,(function(e){We.isUndefined(t[e])||(n[e]=i(void 0,t[e]))})),We.forEach(o,c),We.forEach(a,(function(r){We.isUndefined(t[r])?We.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(void 0,t[r])})),We.forEach(s,(function(r){r in t?n[r]=i(e[r],t[r]):r in e&&(n[r]=i(void 0,e[r]))}));var u=r.concat(o).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return We.forEach(l,c),n},Ye=ce,Ze=fe,et=he,tt=function(e){return Je(e),e.headers=e.headers||{},e.data=ze(e.data,e.headers,e.transformRequest),e.headers=Ke.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ke.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Xe.adapter)(e).then((function(t){return Je(e),t.data=ze(t.data,t.headers,e.transformResponse),t}),(function(t){return Ve(t)||(Je(e),t&&t.response&&(t.response.data=ze(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},nt=Qe;function rt(e){this.defaults=e,this.interceptors={request:new et,response:new et}}rt.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=nt(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[tt,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},rt.prototype.getUri=function(e){return e=nt(this.defaults,e),Ze(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Ye.forEach(["delete","get","head","options"],(function(e){rt.prototype[e]=function(t,n){return this.request(nt(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ye.forEach(["post","put","patch"],(function(e){rt.prototype[e]=function(t,n,r){return this.request(nt(r||{},{method:e,url:t,data:n}))}}));var ot=rt;function at(e){this.message=e}at.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},at.prototype.__CANCEL__=!0;var st=at,it=st;function ct(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new it(e),t(n.reason))}))}ct.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ct.source=function(){var e;return{token:new ct((function(t){e=t})),cancel:e}};var ut=ct,lt=ce,ft=Z,pt=ot,dt=Qe;function ht(e){var t=new pt(e),n=ft(pt.prototype.request,t);return lt.extend(n,pt.prototype,t),lt.extend(n,t),n}var mt=ht($e);mt.Axios=pt,mt.create=function(e){return ht(dt(mt.defaults,e))},mt.Cancel=st,mt.CancelToken=ut,mt.isCancel=Re,mt.all=function(e){return Promise.all(e)},mt.spread=function(e){return function(t){return e.apply(null,t)}},mt.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},Y.exports=mt,Y.exports.default=mt;var Rt=Y.exports;const Et=(e,t,n)=>{b.success(e,t,n)},yt=(e,t,n)=>{b.warning(e,t,n)},gt=(e,t,n)=>{b.info(e,t,n)},Ot=(e,t,n)=>{b.error(e,t,n)},vt=()=>({openSuccessMsg:Et,openWarnMsg:yt,openInfoMsg:gt,openErrorMsg:Ot}),wt=e=>{e.metaData={user:Ct()},Nt.post(`${K.API_LOG_INDEX}`,e)},Tt=()=>({setLog:wt});var bt,_t,At,St;(_t=bt||(bt={})).JSON="application/json;charset=UTF-8",_t.FORM="application/x-www-form-urlencoded; charset=UTF-8",_t.TEXT="text/xml",_t.BLOB="blob",_t.FORMDATA="multipart/form-data",_t.Other="application/octet-stream",_t.Arraybuffer="arraybuffer",(St=At||(At={})).GET="GET",St.POST="POST",St.PUT="PUT",St.PATCH="PATCH",St.DELETE="DELETE";const Ut=Rt.create({baseURL:"https://api.github.com",timeout:6e7,responseType:"json",headers:{"Content-Type":"application/json;charset=UTF-8","Cache-Control":"no-cache"}});Ut.interceptors.request.use((async e=>(await(async e=>{e.headers=Object.assign(e.headers,{"Cache-Control":"no-cache"});const t=(n=e.url)?n.indexOf("?")>-1?n.split("?")[0]:n:"";var n;if(e.url&&z.every((e=>e!==t))){const n=Ct();if(t===K.API_REFRESH_TOKEN)e.headers.Authorization||(e.headers.Authorization=`Bearer ${n.token}`);else try{e.headers.Authorization=`Bearer ${n.token}`}catch(r){vt().openWarnMsg(W),await It.replace({name:M.ROUTER_LOGIN,params:{redirect:It.currentRoute.value.fullPath}})}}"get"===e.method&&(e.params?Object.assign(e.params,{timestamp:(new Date).getTime()}):Object.assign(e,{params:{timestamp:(new Date).getTime()}}))})(e),e)),(e=>Promise.reject(e))),Ut.interceptors.response.use((e=>e),(e=>(e&&e.toString().indexOf("500")>0&&It.replace({name:M.ROUTER_ERROR,params:{msg:e}}),Promise.reject(e))));var Nt=class{constructor(){this.axios=Ut}static getInstance(){return this.instance instanceof this==!1&&(this.instance=new this),this.instance}base(e){const t=null==e.contentType?bt.JSON:e.contentType,{data:n}=e,r=a({"Content-Type":t},e.headers),o=null!=e.responseType?e.responseType:"json",s=e.method||At.POST;return this.axios.request({method:s,url:e.url,data:JSON.stringify(n),headers:r,responseType:o}).catch((e=>this.handelResquestError(e)))}async get(e,t,n=!0){const r=await this.axios.get(e,{params:t}).catch((e=>this.handelResquestError(e)));return this.handelResponse(r,n)}async post(e,t,n=!0){const r=await this.axios.post(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(r,n)}async put(e,t,n=!0){const r=await this.axios.put(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(r,n)}async patch(e,t,n=!0){const r=await this.axios.patch(e,JSON.stringify(t)).catch((e=>this.handelResquestError(e)));return this.handelResponse(r,n)}async delete(e,t,n=!0){const r=await this.axios.delete(e,{data:t}).catch((e=>this.handelResquestError(e)));return this.handelResponse(r,n)}handelResponse(e,t=!0,n=!1){try{if(200===e.status){const n=e.data;if(t){if(!1===n.data.isSuccess){const e=n.data.message;It.replace({name:M.ROUTER_ERROR,params:{msg:e}})}return n.data}return e.data}It.replace({name:M.ROUTER_ERROR,params:{msg:e.statusText}});const n=new Error(e.statusText);throw this.handelResponseError(n,e),new Error}catch(r){throw n&&vt().openErrorMsg(Q),this.handelResponseError(r,e),r}}handelResquestError(e){const t={entryName:"vue3+vite+template, 正式环境",version:"%BUILDNUMBER%, %REVISION%",message:e.message,metaData:{},name:e.name,releaseStage:"gh",severity:e.name,stacktrace:e.stacktrace,time:Date.now(),title:"handle request error",type:"HTTP Request",url:location.href,client:{userAgent:window.navigator.userAgent,height:window.screen.height,width:window.screen.width,referrer:window.document.referrer},error:e,lineNumber:null,columnNumber:null,fileName:location.href,pageLevel:null};throw Tt().setLog(t),e}handelResponseError(e,t){const n={entryName:"vue3+vite+template, 正式环境",version:"%BUILDNUMBER%, %REVISION%",message:e.message,metaData:{},name:e.name,releaseStage:"gh",severity:e.name,stacktrace:e.stacktrace,time:Date.now(),title:"handle response error",type:"HTTP Response",url:location.href,client:{userAgent:window.navigator.userAgent,height:window.screen.height,width:window.screen.width,referrer:window.document.referrer},data:t,error:e,lineNumber:null,columnNumber:null,fileName:location.href,pageLevel:null};throw Tt().setLog(n),e}}.getInstance();const xt={count:0,user:null};var jt=_({state:()=>xt,mutations:{increment(e){e.count+=1},SET_USER:(e,t)=>{e.user=t},CLEAR_USER:e=>{e.user=null}},actions:{increment(e){e.commit("increment")},SIGN:async({commit:e},t)=>{e("SET_USER",t)},SIGNOUT:async({commit:e})=>e("CLEAR_USER")},getters:{double:e=>2*e.count}});const Ct=()=>jt.state.user,Lt=()=>new Promise((async(e,t)=>{const n=jt.state.user;if(n&&!n.token)t(V);else{const r=A(n.tokenExpiration).toDate(),o=A().toDate();if(o>r)await jt.dispatch("SIGNOUT"),t(X);else{if(A(r).subtract(J,"second").toDate()<=o){const n=await Nt.post(`${K.API_REFRESH_TOKEN}`);n.isSuccess&&n.result?await jt.dispatch("SIGN",n.result):t(X),e(n.result.token)}else e(n.token)}}}));S.configure({showSpinner:!1});const Pt=[{path:"/",name:M.ROUTER_DASHBOARD,component:G,children:[{path:"",name:M.ROUTER_HOME,component:()=>H((()=>import("./Dashboard.fb6fcb8f.js")),["/vue3-vite-template/assets/Dashboard.fb6fcb8f.js","/vue3-vite-template/assets/Dashboard.e093cb69.css","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{title:"home"}},{path:`/${M.ROUTER_ABOUT}`,name:M.ROUTER_ABOUT,component:()=>H((()=>import("./About.00ad7b33.js")),["/vue3-vite-template/assets/About.00ad7b33.js","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{title:"about"}},{path:"/counter",name:"counter",component:()=>H((()=>import("./Counter.d08c0f10.js")),["/vue3-vite-template/assets/Counter.d08c0f10.js","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{title:"counter"}},{path:"/axios",name:"axios",component:()=>H((()=>import("./Axios.ac06e6a6.js")),["/vue3-vite-template/assets/Axios.ac06e6a6.js","/vue3-vite-template/assets/Axios.1bdd4867.css","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{title:"axios"}}]},{path:`/${M.ROUTER_LOGIN}`,name:M.ROUTER_LOGIN,component:()=>H((()=>import("./Login.8255a7ff.js")),["/vue3-vite-template/assets/Login.8255a7ff.js","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{auth:!1}},{path:`/${M.ROUTER_ERROR}`,name:M.ROUTER_ERROR,component:()=>H((()=>import("./Error.aca107f8.js")),["/vue3-vite-template/assets/Error.aca107f8.js","/vue3-vite-template/assets/Error.45cfa600.css","/vue3-vite-template/assets/vendor.8c66bd39.js","/vue3-vite-template/assets/vendor.ac2fd7bb.css"]),meta:{auth:!1}}],It=U({history:N(),routes:Pt});It.beforeEach(((e,t,n)=>{S.start(),document.title="vue3+vite+template",e.meta&&e.meta.title&&(document.title=`vue3+vite+template-${e.meta.title}`),e.meta&&e.meta.auth?Lt().then((()=>{n()})).catch((t=>{t===X&&vt().openWarnMsg(W),n({name:M.ROUTER_LOGIN,query:{redirect:e.fullPath}})})):n()})),It.afterEach((()=>{S.done()}));const kt=x(D);kt.use(j),kt.use(C),kt.use(L),kt.use(P),kt.use(I),kt.use(k),kt.use(It).use(jt).mount("#app");export{K as A,M as R,Nt as a};