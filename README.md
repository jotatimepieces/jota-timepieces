# Jota Timepieces

Site institucional/loja da Jota Timepieces. Next.js estático, sem backend, sem banco de dados — pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura do projeto

```
app/
  layout.js              Layout raiz (fontes, header, footer, SEO)
  page.js                Página inicial (Hero + Coleção)
  globals.css             Estilos globais e tokens de design
  produtos/[slug]/page.js Página individual de cada relógio
  not-found.js            Página 404
components/
  Header.js               Cabeçalho fixo com logo e navegação
  Footer.js                Rodapé minimalista
  Hero.js                  Seção inicial de impacto
  ProductGrid.js           Seção "The Collection"
  ProductCard.js            Card de produto no catálogo
  BuyButton.js               Botão "Comprar Agora"
data/
  products.js              Catálogo de produtos (edite aqui!)
  config.js                 Instagram + link de checkout InfinitePay
public/images/
  logo.png                  Logo da marca
  poedagar-signature.png     Foto do primeiro relógio
```

## Como adicionar um novo relógio

1. Salve a foto do relógio em `public/images/` (ex: `novo-relogio.png`).
2. Abra `data/products.js` e copie um objeto de produto existente, ajustando:
   - `slug` — deve ser único, forma a URL (`/produtos/seu-slug`)
   - `name`, `price`, `image`, `imageAlt`, `shortDescription`
   - `specs` — lista de especificações (label + value)
3. Salve o arquivo. O novo relógio aparece automaticamente na página inicial e ganha sua própria página, sem precisar tocar em nenhum componente.

## Como definir o preço de um relógio

No mesmo arquivo `data/products.js`, edite o campo `price` do produto, por exemplo:

```js
price: "R$ 349,90",
```

Enquanto `price` estiver vazio (`""`), a página do produto mostra `R$ XXX,XX` como espaço reservado.

## Como ativar o botão "Comprar Agora" (InfinitePay)

Abra `data/config.js` e cole o link do checkout gerado pela InfinitePay na variável:

```js
export const INFINITEPAY_CHECKOUT_URL = "https://checkout.infinitepay.io/xxxxxxxx";
```

Enquanto essa variável estiver vazia, o botão aparece desativado (cinza, sem link). Assim que o link for colocado, o botão passa a redirecionar o cliente diretamente para o checkout, em uma nova aba.

## Como publicar na Vercel

1. Crie um repositório no GitHub e envie este projeto:
   ```bash
   git init
   git add .
   git commit -m "Site Jota Timepieces"
   git branch -M main
   git remote add origin <url-do-seu-repositorio>
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com), clique em **Add New → Project**.
3. Selecione o repositório do GitHub.
4. Não é necessário configurar nenhuma variável de ambiente — mantenha as configurações padrão (Framework Preset: **Next.js**).
5. Clique em **Deploy**.
6. Após o deploy, copie a URL gerada (ex: `https://jota-timepieces.vercel.app`) e coloque na bio do Instagram **@jotatimepieces**.

## Observações

- Site 100% estático, sem backend, login, banco de dados ou pagamento embutido — conforme solicitado.
- O botão de compra está preparado para receber o link de checkout da InfinitePay a qualquer momento, sem necessidade de alterar código além da variável em `data/config.js`.
- Layout testado para telas de celular, tablet e desktop, com atenção especial ao mobile (principal origem do tráfego via Instagram).
