import{d as g,G as m,l as d,r as f,o as c,b as i,w as t,q as o,A as _,H as L,I as h,s as b,J as v,c as C,F as I,a as V,K as k,L as x,E as B,y as w,v as A}from"./index-bef3ade2.js";const E=g({__name:"I18n",props:{languages:null,location:{default:"bottom end"}},emits:["change"],setup(u){const s=u,{locale:l}=useI18n({useScope:"global"});m(l,n=>{document.documentElement.setAttribute("lang",n)});const a=d(["en"]);return(n,r)=>{const p=f("IconBtn");return c(),i(p,null,{default:t(()=>[o(_,{size:"26",icon:"tabler-language"}),o(L,{activator:"parent",location:s.location,offset:"14px"},{default:t(()=>[o(h,{selected:b(a),"onUpdate:selected":r[0]||(r[0]=e=>v(a)?a.value=e:null),"min-width":"175px"},{default:t(()=>[(c(!0),C(I,null,V(s.languages,e=>(c(),i(k,{key:e.i18nLang,value:e.i18nLang,onClick:y=>{l.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:t(()=>[o(x,null,{default:t(()=>[B(w(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}}),N=g({__name:"NavBarI18n",setup(u){const{isAppRtl:s}=A(),l=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],a=n=>{s.value=n==="ar"};return(n,r)=>(c(),i(E,{languages:l,onChange:a}))}});export{N as default};