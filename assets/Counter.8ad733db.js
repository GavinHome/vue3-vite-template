import{d as e,v as n,o as t,c as r,a,j as o}from"./vendor.5e5a1e4e.js";var c=e({name:"Counter",setup(){const e=n(0);return{count:e,increment:()=>{e.value+=1}}}});const s={class:"counter"},u=a("div",{class:"page-title"},"Counter Page",-1);c.render=function(e,n,c,i,l,m){return t(),r("div",s,[u,a("p",null,"count is: "+o(e.count),1),a("button",{onClick:n[1]||(n[1]=(...n)=>e.increment&&e.increment(...n))},"increment")])};export default c;