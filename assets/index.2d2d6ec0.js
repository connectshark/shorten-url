import{r as l,o as i,c as u,a as f,b as d,d as p,e as m,f as _,g as h}from"./vendor.c9b7b45e.js";const y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};y();var a=(n,t)=>{const o=n.__vccOpts||n;for(const[s,e]of t)o[s]=e;return o};const v={};function g(n,t){const o=l("router-view");return i(),u(o)}var b=a(v,[["render",g]]);const x={},L=d("h1",{class:"text-3xl"},"Hello",-1),O=[L];function k(n,t){return i(),f("main",null,O)}var w=a(x,[["render",k]]);const B=p({history:m("/shorten-url/"),routes:[{path:"/",name:"home",component:w}]});_(b).use(h()).use(B).mount("#app");
