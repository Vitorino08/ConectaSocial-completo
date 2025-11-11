// accessibility.js - alto contraste, teclado, dropdowns
import { $, $$, delegate } from './dom.js';

export function initAccessibility(){
  const btn = $('#toggle-contrast');
  if(btn){
    const stored = localStorage.getItem('theme');
    if(stored === 'dark') document.body.classList.add('dark-mode');
    btn.addEventListener('click', ()=>{
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      btn.setAttribute('aria-pressed', document.body.classList.contains('dark-mode'));
    });
  }

  // Navegação por teclado: abrir dropdown com Enter/Espaço
  delegate(document, '.dropdown-toggle', 'keydown', (e, el)=>{
    if(['Enter',' '].includes(e.key)){
      e.preventDefault();
      const expanded = el.getAttribute('aria-expanded') === 'true';
      el.setAttribute('aria-expanded', (!expanded).toString());
      el.parentElement.classList.toggle('open');
    }
  });

  // Menu hambúrguer
  const hamburger = $('#btn-hamburger');
  const menu = $('#menu-principal');
  if(hamburger && menu){
    hamburger.addEventListener('click', ()=>{
      const open = menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open.toString());
    });
  }

  // Foco visível em navegação por teclado
  document.body.addEventListener('keydown', (e)=>{
    if(e.key === 'Tab') document.body.classList.add('using-keyboard');
  });
}
