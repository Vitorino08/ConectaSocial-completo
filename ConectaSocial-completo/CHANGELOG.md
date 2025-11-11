# 🧾 CHANGELOG

Todas as alterações notáveis deste projeto serão documentadas neste arquivo.  
O formato segue as convenções de [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [1.1.0] - 2025-11-10
### Adicionado
- Implementação completa do **modo escuro (Dark Mode)** com persistência via `localStorage`
- Padronização visual do **header** e **footer** em todas as páginas
- Nova seção de **rodapé estilizado** com contraste e legibilidade aprimorados
- Ajuste global de **acessibilidade e contraste**
- Criação do **README.md profissional** e documentação técnica atualizada
- Otimização dos estilos (`layout.css` e `style.css`)
- Aperfeiçoamento da **responsividade** em telas menores
- SEO aprimorado (meta tags, OpenGraph e Twitter Card)

### Corrigido
- Inconsistências de layout na página de **cadastro**
- Falha na ativação do modo escuro em páginas secundárias
- Opacidade e contraste do texto no rodapé
- Pequenas correções de padding e espaçamento entre seções

### Removido
- Trechos redundantes de código CSS e JS que geravam conflito de tema
- Dependência de inicialização manual do dark mode em páginas específicas

---

## [1.0.0] - 2025-10-31
### Adicionado
- Estrutura HTML semântica (3 páginas)
- CSS modular com variáveis, grid 12 e responsividade (5 breakpoints)
- Navegação com submenu e menu hambúrguer
- Componentes (cards, botões, alertas, modal base)
- Formulário com máscaras e validação visual
- SPA básica (carregamento de `<main>`)
- Acessibilidade (WCAG 2.1 AA), modo alto contraste
- Armazenamento local (`localStorage`)
- Minificação (`style.min.css`, `app.min.js`)
