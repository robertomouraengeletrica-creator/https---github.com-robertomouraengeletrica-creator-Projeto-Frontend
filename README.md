# ActiveMove — Projeto Final de Front-end

E-commerce de moda esportiva desenvolvido em **React** como projeto final do curso. Baseado na documentação da Digital Store e no layout do Figma.

## Feito Por:
José Roberto Sabino de Moura

## Páginas
| Rota | Página | O que faz |
|---|---|---|
| `/` | Home | Banner, coleções, categorias e produtos em alta |
| `/produtos` | Listagem | Grade de produtos, filtros por marca/categoria e ordenação por preço |
| `/produtos/:id` | Visualização | Galeria, descrição, seleção de tamanho e cor, botão de compra e relacionados |

## Tecnologias
React 18, React Router 6, Vite 5, CSS puro.

## Como rodar
Requer Node.js 18+.
```bash
git clone <url-do-repositorio>
cd ActiveMove
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist
```

## Estrutura
```
src/
├── components/   Header, Footer, ProductCard
├── pages/        Home, Products, ProductView
├── data/         products.js (dados simulados e helper brl)
├── App.jsx       rotas
├── main.jsx      ponto de entrada
└── styles.css    estilos globais e tokens de cor
```

## Decisões de projeto
- **Cores** (variáveis CSS em `:root`): rosa `#C92071`, grafite `#1F1F1F`, lavanda `#B5B6F2`, fundo claro `#F9F8FE`.
- **Imagens:** as fotos ficam em `public/images/` e são ligadas pelo campo `image` de cada produto em `src/data/products.js`. Se uma foto faltar, o site mostra automaticamente um bloco colorido no lugar.
- **Dados:** local com valores ficticios para o projeto rodar sem backend.
- **Fidelidade ao Figma:** layout, cores e hierarquia seguem a Digital Store. Ajuste espaçamentos e fotos ao comparar com o arquivo.

## Deploy (Vercel)
1. Envie o repositório ao GitHub.
2. Em vercel.com, importe o repositório (preset Vite).
3. Para o React Router funcionar ao recarregar, crie `vercel.json`: `{"rewrites":[{"source":"/(.*)","destination":"/"}]}`.

## Melhorias futuras
Implementação carrinho funcional, busca no cabeçalho, páginas de login/cadastro, consumo de API e testes.
