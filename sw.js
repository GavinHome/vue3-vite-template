if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/About.1a9bba55.js",revision:"afa88ce82a1319d4c5eac41127b294f0"},{url:"assets/Axios.4a441f16.js",revision:"70bbb6921269f97b656180db5c501a01"},{url:"assets/Axios.e964ccc7.css",revision:"91480de364ff0d1032ed634c57992843"},{url:"assets/Counter.7f44e452.js",revision:"d2eb31b5d0f57e2240d523e1dc80d193"},{url:"assets/Dashboard.05700212.css",revision:"5e9a1c219bb59a5114cf7342a54f0938"},{url:"assets/Dashboard.8a7a220f.js",revision:"df0b5ed9ee0f05fa58db0ca5ff008c6b"},{url:"assets/Error.8c3ed8c4.css",revision:"e6657b3e2e641e30b248f69e98232cdd"},{url:"assets/Error.e56aa4b3.js",revision:"8c704b1b3dfd6253df5c1fdaac1c0b59"},{url:"assets/index.3c79790b.css",revision:"75d77a4d89993f59aa72712c2386a247"},{url:"assets/index.ea37b0e7.js",revision:"864e45d59dfec2834a8761ec8347d4d3"},{url:"assets/Login.353c2ae8.js",revision:"324dae5a46647ab0c99484bc3986c5d1"},{url:"assets/Mock.00a3854b.js",revision:"706c6dbd4c9917b6977c60bee99c3a00"},{url:"assets/Test.f93c660c.js",revision:"575b90c4389acd68d551111c0305010b"},{url:"assets/vendor.17eb7c29.css",revision:"0a6bcc032f7bba90dcd9b80713854f33"},{url:"assets/vendor.96710f2c.js",revision:"99d145ef4061557a05c149dbe7c7d5f0"},{url:"index.html",revision:"f9a6bb024ad86b859bb14c1c8da42be9"},{url:"registerSW.js",revision:"430c37c1ae00eb38bddae3dd9b3c6206"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
