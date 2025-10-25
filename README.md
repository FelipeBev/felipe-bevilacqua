# =========== #
#  README.md  #
# =========== #

# Site em Next.js com layout fixo e rotas dinâmicas

## 📁 Estrutura de Arquivos

```
projeto/
├── pages/
│   ├── _app.js                     → Layout global (Header, Menu, Footer)
│   ├── index.js                    → Página inicial (/)
│   └── secao/
│       └── [slug].js               → Layout global (Header, Menu, Footer) 
│                                       com conteúdo das seções em rotas dinâmicas (/secao/*)
├── components/
│   ├── basic-layout/
│   │   ├── header/
│   │   │   ├── header.tsx          → Header fixo
│   │   │   └── header.module.css
│   │   ├── footer/
│   │   │   ├── footer.tsx          → Footer fixo
│   │   │   └── footer.module.css
│   │   └── menu/
│   │       ├── menu.tsx            → Menu de navegação
│   │       └── menu.module.css
│   └── sections/
│       ├── sobre/
|       |   └── Sobre.tsx           → Componente Sobre
│       ├── portifolio/
|       |   └── Portfolio.tsx       → Componente Portfolio
│       ├── blog/
|       │   └── Blog.tsx            → Componente Blog
│       └── contato/
|           └── Contato.tsx         → Componente Contato
├── data/
│   └── sections.tsx                → Configuração das seções
├── styles/
│   └── Home.module.css
├── public/
│   └── minha_foto.jpeg
└── tests/
    └── any.test.tsx                → Testes com jest
```

## 🏗️ Layout Fixo Global

```
┌─────────────────────────┐
│         MyHeader        │         ← Sempre visível
├─────────────────────────┤
│         MyMenu          │         ← Sempre visível
├─────────────────────────┤
│                         │
│    CONTEÚDO DINÂMICO    │         ← Muda conforme a rota
│         (Seções)        │
│                         │
├─────────────────────────┤
│         MyFooter        │         ← Sempre visível
└─────────────────────────┘
```

## 🌐 Rotas

```
"/"                                 → Home (com links para seções)
"/secao/sobre"                      → Componente Sobre dentro do layout
"/secao/portfolio"                  → Componente Portfolio dentro do layout
"/secao/blog"                       → Componente Blog dentro do layout
"/secao/contato"                    → Componente Contato dentro do layout
```

##  
```
                                                    ┌─────────────────────────┐
                                                    │    Felipe Bevilacqua    │
                                                    │                         │
                                                    │    Software Engineer    │
                                                    └─────────────────────────┘
```
