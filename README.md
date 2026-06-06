# Conexões em Cores - Projeto de Desenvolvimento

Landing page para exposição de arte na Biblioteca Pública do Estado de Santa Catarina.

**Período:** 1 a 30 de abril de 2026

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

### 1. Node.js (versão 18 ou superior)

**Windows:**
1. Acesse: https://nodejs.org/
2. Baixe a versão LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Reinicie o VSCode após a instalação

**Verificar instalação:**
Abra o terminal do VSCode (Ctrl + `) e digite:
```bash
node --version
npm --version
```

### 2. VSCode

Baixe em: https://code.visualstudio.com/

### 3. Extensões recomendadas para VSCode

Abra o VSCode e instale as seguintes extensões (Ctrl+Shift+X para abrir extensões):
- **ES7+ React/Redux/React-Native snippets** - snippets para React
- **Tailwind CSS IntelliSense** - autocomplete para Tailwind
- **Prettier - Code formatter** - formatação automática
- **TypeScript Importer** - importação automática de tipos

---

## 🚀 Como usar o projeto

### Passo 1: Extrair e abrir o projeto

1. Extraia o arquivo `conexoes-em-cores-dev.zip` em uma pasta de sua preferência
2. Abra o VSCode
3. Vá em **File > Open Folder** e selecione a pasta `conexoes-em-cores-dev`

### Passo 2: Instalar dependências

Abra o terminal no VSCode (Ctrl + `) e execute:

```bash
npm install
```

Isso pode levar alguns minutos. Aguarde até aparecer uma pasta `node_modules`.

### Passo 3: Rodar em modo desenvolvimento

No terminal, execute:

```bash
npm run dev
```

Você verá algo como:
```
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
```

Abra o navegador e acesse: `http://localhost:3000`

### Passo 4: Editar o conteúdo

Os principais arquivos para edição estão em:

| Arquivo | Conteúdo |
|---------|----------|
| `src/lib/exhibition-data.ts` | Dados dos artistas e obras |
| `src/app/page.tsx` | Estrutura principal da página |
| `src/app/globals.css` | Estilos globais |
| `src/components/Header.tsx` | Menu de navegação |
| `src/components/HeroSection.tsx` | Seção inicial (banner) |
| `src/components/AboutSection.tsx` | Seção "Sobre a Exposição" |
| `src/components/ArtistSection.tsx` | Seção de cada artista |
| `src/components/WritingSection.tsx` | Seção de escritos |
| `src/components/InfoSection.tsx` | Informações da exposição |
| `src/components/Footer.tsx` | Rodapé |

### Passo 5: Adicionar imagens

Coloque as imagens na pasta `public/images/`:

```
public/images/
├── artists/
│   ├── orlando-castro.jpg
│   ├── alessandra-rodrigues.jpg
│   ├── mauricio-rique.jpg
│   ├── kamalini-nazareth.jpg
│   └── wesley-carvalho.jpg
└── artworks/
    ├── orlando-castro/
    │   ├── oc01.jpg
    │   ├── oc02.jpg
    │   ├── oc03.jpg
    │   ├── oc04.jpg
    │   ├── oc05.jpg
    │   └── oc06.jpg
    ├── alessandra-rodrigues/
    │   ├── ar01.jpg
    │   └── ... (ar02-ar06.jpg)
    ├── mauricio-rique/
    │   ├── mr01.jpg
    │   └── ... (mr02-mr06.jpg)
    ├── kamalini-nazareth/
    │   ├── kn01.jpg
    │   └── ... (kn02-kn06.jpg)
    └── wesley-carvalho/
        ├── wc01.jpg
        └── ... (wc02-wc06.jpg)
```

---

## 📝 Editando os dados dos artistas

Abra o arquivo `src/lib/exhibition-data.ts`:

```typescript
export const artists: Artist[] = [
  {
    id: "orlando-castro",
    name: "Orlando Castro",
    bio: "Biografia do artista...",
    image: "/images/artists/orlando-castro.jpg",
    artworks: [
      {
        id: "oc01",
        title: "Título da Obra",
        date: "2024",
        technique: "Óleo sobre tela",
        dimensions: "100x80 cm",
        description: "Descrição da obra...",
        image: "/images/artworks/orlando-castro/oc01.jpg",
      },
      // ... mais obras
    ],
  },
  // ... mais artistas
];
```

---

## 🔨 Gerar build para Apache

Quando terminar de editar, gere os arquivos estáticos:

```bash
npm run build
```

Os arquivos serão gerados na pasta `out/`. 

### Deploy no Apache:

1. Copie todo o conteúdo da pasta `out/` para:
   - `/var/www/html/conexoes-em-cores/` (Linux)
   - `C:\xampp\htdocs\conexoes-em-cores\` (Windows/XAMPP)

2. Acesse no navegador:
   - `http://localhost/conexoes-em-cores/`

---

## 🎨 Estrutura do projeto

```
conexoes-em-cores-dev/
├── public/                 # Arquivos estáticos
│   ├── images/            # Imagens (criar esta pasta)
│   │   ├── artists/       # Fotos dos artistas
│   │   └── artworks/      # Imagens das obras
│   └── placeholders/      # Imagens placeholder
├── src/
│   ├── app/
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página principal
│   ├── components/        # Componentes React
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ArtistSection.tsx
│   │   ├── ArtworkCard.tsx
│   │   ├── WritingSection.tsx
│   │   ├── InfoSection.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── ui/           # Componentes de interface
│   ├── hooks/            # React hooks
│   │   ├── use-scroll-reveal.ts
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/
│       ├── exhibition-data.ts  # DADOS PRINCIPAIS
│       └── utils.ts
├── package.json          # Dependências
├── next.config.ts        # Configuração do Next.js
├── tailwind.config.ts    # Configuração do Tailwind
└── tsconfig.json         # Configuração do TypeScript
```

---

## ❓ Problemas comuns

### "npm não é reconhecido"
- Instale o Node.js (veja Pré-requisitos)
- Reinicie o VSCode após a instalação

### "Port 3000 is already in use"
- Feche outros projetos Next.js
- Ou mude a porta: `npm run dev -- -p 3001`

### Imagens não aparecem
- Verifique se as imagens estão na pasta correta `public/images/`
- Os nomes dos arquivos devem corresponder exatamente aos definidos em `exhibition-data.ts`

### Erro ao rodar npm install
- Apague a pasta `node_modules` e o arquivo `package-lock.json`
- Execute `npm install` novamente

---

## 📞 Suporte

Para dúvidas sobre React/Next.js:
- Documentação Next.js: https://nextjs.org/docs
- Documentação React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs

