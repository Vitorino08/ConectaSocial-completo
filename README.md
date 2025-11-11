# 🌐 ConectaSocial

**ConectaSocial** é uma plataforma web desenvolvida com o objetivo de conectar **ONGs, voluntários e doadores**, promovendo o engajamento em causas sociais de forma **transparente, acessível e moderna**.  
O projeto enfatiza usabilidade, acessibilidade e design responsivo, com suporte completo ao **modo escuro (dark mode)**.

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando **HTML5**, **CSS3** e **JavaScript (ES6 Modules)**, organizados em uma estrutura modular e escalável.

- **HTML5** → Estrutura semântica e otimizada para SEO  
- **CSS3 (Flexbox + Grid)** → Layout responsivo e consistente  
- **JavaScript (modular)** → Interatividade, dark mode e acessibilidade  
- **LocalStorage API** → Armazenamento da preferência de tema (claro/escuro)

---

## 🧩 Estrutura de Pastas

```
ConectaSocial-completo/
│
├── index.html                # Página inicial
├── projetos.html             # Página de listagem de projetos
├── cadastro.html             # Página de cadastro de voluntários/doadores
│
├── css/
│   ├── variables.css         # Variáveis globais (cores, fontes, espaçamento)
│   ├── layout.css            # Estrutura base, grid, header, hero e footer
│   ├── components.css        # Botões, cards e componentes reutilizáveis
│   ├── style.css             # Import e ajustes finais de estilo
│   ├── dark-mode.css         # Temas e variáveis para o modo escuro
│   └── style.min.css         # Versão minificada (otimização)
│
├── js/
│   ├── app.js                # Inicialização principal e scripts globais
│   ├── accessibility.js      # Funções de acessibilidade e navegação por teclado
│   ├── dom.js                # Funções utilitárias para manipulação do DOM
│   ├── forms.js              # Validação e feedback de formulários
│   ├── storage.js            # Armazenamento e recuperação de preferências
│   └── darkmode-fallback.js  # Fallback para o dark mode em caso de erro
│
├── imagens/
│   ├── logo.png
│   ├── equipe.jpg
│   ├── projeto1.jpg
│   ├── projeto2.jpg
│   └── projeto3.jpg
│
└── README.md
```

---

## 🌙 Modo Escuro (Dark Mode)

O site possui **modo escuro totalmente funcional**, com transição suave entre temas.  
A preferência do usuário é salva automaticamente no navegador via `localStorage`.

```javascript
// Lógica simplificada do dark mode
const toggle = document.getElementById('toggle-contrast');
const body = document.body;
const darkClass = 'dark-mode';
const saved = localStorage.getItem('theme');

if (saved === 'dark') body.classList.add(darkClass);

toggle.addEventListener('click', () => {
  const isDark = body.classList.toggle(darkClass);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
```

---

## 🧭 Funcionalidades

- 🌐 Navegação responsiva com menu hamburguer  
- 🌓 Alternância entre modo claro e escuro  
- ♿ Acessibilidade (atalhos de teclado, contraste e skip link)  
- 🧱 Layout modular com grid de 12 colunas  
- 📄 Formulário de cadastro validado com feedback visual  
- 🔍 SEO configurado (meta tags, descrição, OpenGraph e Twitter Card)

---

## 🎨 Design e Usabilidade

O design segue princípios modernos de UI/UX:
- Paleta de cores equilibrada e acessível  
- Tipografia legível com espaçamento generoso  
- Elementos interativos com **transições suaves**  
- Layout fluido em todas as resoluções de tela  

---

## ⚙️ Como Executar Localmente

1. Faça o download do projeto:
   ```bash
   git clone https://github.com/seuusuario/ConectaSocial-completo.git
   ```

2. Acesse o diretório:
   ```bash
   cd ConectaSocial-completo
   ```

3. Abra o arquivo `index.html` diretamente no navegador ou utilize uma extensão de servidor local, como o **Live Server** do VS Code.

---

## ☁️ Publicação no GitHub Pages

Para hospedar seu projeto gratuitamente:

1. Acesse o repositório no GitHub  
2. Vá em **Settings → Pages**  
3. Selecione a branch `main` e o diretório `/ (root)`  
4. Clique em **Save**  
5. Seu site estará disponível em:  
   ```
   https://seuusuario.github.io/ConectaSocial-completo/
   ```

---

## 🧠 Aprendizados

Durante o desenvolvimento foram aplicados conceitos importantes:
- Estruturação semântica de páginas HTML  
- Modularização e boas práticas em CSS e JS  
- Otimização de layout para diferentes tamanhos de tela  
- Implementação acessível e persistente de modo escuro  

---

## 👨‍💻 Autor

Desenvolvido por **Diego Vitorino**  
📧 [contato@conectasocial.org](mailto:contato@conectasocial.org)

---

## 🪪 Licença

Este projeto foi desenvolvido para fins educacionais e está disponível sob a licença **MIT License**.  
Sinta-se à vontade para utilizar e modificar conforme necessário.

---

© 2025 ConectaSocial — Todos os direitos reservados.
