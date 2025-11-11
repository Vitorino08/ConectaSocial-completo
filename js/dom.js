// dom.js - utilidades DOM
export const $ = (sel, ctx=document) => ctx.querySelector(sel);
export const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

export function delegate(parent, selector, type, handler){
  parent.addEventListener(type, (e)=>{
    const target = e.target.closest(selector);
    if(target && parent.contains(target)) handler(e, target);
  });
}
