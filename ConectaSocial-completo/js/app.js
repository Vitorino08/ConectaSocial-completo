// =====================================================
// app.js — Núcleo principal do ConectaSocial
// SPA básico + Header interativo + Inicializações
// =====================================================

import { $, $$ } from './dom.js';
import { initForm } from './forms.js';
import { initAccessibility } from './accessibility.js';

// =====================================================
// 🔹 Inicialização base do site
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initForm();
  initHeader();
  initDarkMode();
  console.log('%cConectaSocial carregado com sucesso!', 'color:#00bfa5; font-weight:bold;');
});

// =====================================================
// 🔹 Sistema de Single Page Application (SPA)
// =====================================================

async function loadPage(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erro HTTP ${res.status}`);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const newMain = doc.querySelector('main');
    const currentMain = $('main');

    if (newMain && currentMain) {
      currentMain.replaceWith(newMain);
      initForm();
      // Foco acessível no conteúdo
      const main = $('main');
      main?.setAttribute('tabindex', '-1');
      main?.focus();
    }
    history.pushState({}, '', url);
  } catch (err) {
    console.error('❌ Falha ao carregar página:', err);
    showFeedback('Não foi possível carregar o conteúdo. Verifique sua conexão.');
  }
}

// Intercepta cliques em links internos
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  const url = a.getAttribute('href');
  if (!url || url.startsWith('http')) return; // ignora links externos
  e.preventDefault();
  loadPage(url);
});

window.addEventListener('popstate', () => loadPage(location.pathname));

// =====================================================
// 🔹 HEADER INTERATIVO
// =====================================================

function initHeader() {
  const header = $('.site-header');
  const hamburger = $('#btn-hamburger');
  const navLinks = $('.nav-links');

  if (header) {
    // Efeito de sombra ao rolar
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  if (hamburger && navLinks) {
    // Menu mobile
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });
  }
}

// =====================================================
// 🔹 MODO ESCURO / ALTO CONTRASTE
// =====================================================

function initDarkMode() {
  const toggle = $('#toggle-contrast');
  const root = document.documentElement;
  const darkClass = 'dark-mode';

  // Verifica preferência salva
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') root.classList.add(darkClass);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = root.classList.toggle(darkClass);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggle.textContent = isDark ? '☀️' : '🌙';
    });
  }
}

// =====================================================
// 🔹 FEEDBACK VISUAL DE ERRO (caso algo falhe)
// =====================================================

function showFeedback(msg) {
  let feedback = $('#feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.style.position = 'fixed';
    feedback.style.bottom = '1rem';
    feedback.style.right = '1rem';
    feedback.style.background = '#f56565';
    feedback.style.color = '#fff';
    feedback.style.padding = '0.8rem 1.2rem';
    feedback.style.borderRadius = '8px';
    feedback.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
    feedback.style.zIndex = '2000';
    document.body.appendChild(feedback);
  }
  feedback.textContent = msg;
  feedback.style.opacity = '1';

  setTimeout(() => {
    feedback.style.opacity = '0';
  }, 4000);
}
