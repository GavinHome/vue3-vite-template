if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,a,c)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+e.slice(1)};return Promise.all(a.map((e=>{switch(e){case"exports":return r;case"module":return d;default:return s(e)}}))).then((s=>{const e=c(...s);return r.default||(r.default=e),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/About.2c8fcafd.css",revision:"2deac4186b60898017172cafc87fa153"},{url:"assets/About.d1d9478c.js",revision:"e13d9c80a65c22b7a894409ff4521032"},{url:"assets/Axios.5fe099f2.js",revision:"54522df2a12fc0a53c9a2b49e5eb7ab5"},{url:"assets/Axios.890c670d.css",revision:"65cac5390095a3744f0dfd6c154628a4"},{url:"assets/Counter.f09bced7.js",revision:"0f06dad179d97b65ef4ff3864d233857"},{url:"assets/Dashboard.6cfff667.js",revision:"2e20b936c16a0b591f2f1bfa7541368e"},{url:"assets/Dashboard.fe43ffcf.css",revision:"91b754d9c984ca4da5c74a4f5a781b49"},{url:"assets/Error.5fd5744d.js",revision:"142c16349c35e60e9a5d5901845077d7"},{url:"assets/Error.87f55bfd.css",revision:"bd606bfb0b5e0afcbca7df43a90d2ebb"},{url:"assets/index.2aa7fe8e.js",revision:"43d8a385e8aa405c22b69fc942428c44"},{url:"assets/index.9ec867ed.css",revision:"5fb2f1213a3feb5b4c26b822efb5c7ab"},{url:"assets/Login.4d3f21ac.js",revision:"ef5cae8a5ee003f0098c1cae85c32834"},{url:"assets/Login.90022fbc.css",revision:"2d375b6e2d7b27dab10da6454e714457"},{url:"assets/Mock.150a89de.js",revision:"139db145f523409be903dfa9cef089fd"},{url:"assets/Test.fc6d9560.js",revision:"ca229976a0c1ce745f816c81b709865a"},{url:"assets/vendor.13d37a36.js",revision:"bb77bd573bdd134a973f770ab7a0199e"},{url:"assets/vendor.765db473.css",revision:"f9d3182791ab29cc04746d9b5408e188"},{url:"assets/VueUse.576ed80c.js",revision:"0f8c42be8f2fba8d18138d485a96fed9"},{url:"index.html",revision:"2338560b19c7a3cd9635dbeb7af5446b"},{url:"registerSW.js",revision:"430c37c1ae00eb38bddae3dd9b3c6206"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
