import{d as s,u as a,x as r,y as e,o as c,c as o,a as t,j as d,z as n}from"./vendor.5e5a1e4e.js";import{R as l}from"./index.55f70786.js";var v=s({name:"Error",props:{desc:{type:String}},setup:()=>{const s=a();return{errorSvg:"/vue3-vite-template/assets/500.cc43d5a3.svg",goBack:()=>{s.replace(l.ROUTER_HOME)}}}});const i=n();r("data-v-f8c92c58");const p={class:"error"},g={class:"content"},m=t("h1",null,"出错了",-1),u={class:"desc"};e();const f=i(((s,a,r,e,n,l)=>(c(),o("div",p,[t("img",{src:s.errorSvg,alt:"error"},null,8,["src"]),t("div",g,[m,t("div",u,d(s.desc),1),t("div",{class:"back",onClick:a[1]||(a[1]=(...a)=>s.goBack&&s.goBack(...a))},"返回首页")])]))));v.render=f,v.__scopeId="data-v-f8c92c58";export default v;
