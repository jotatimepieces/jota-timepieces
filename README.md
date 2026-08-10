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
  ProductExperience.js       Seletor de cor, imagem, botão de compra e specs
data/
  products.js              Catálogo de produtos e variações (edite aqui!)
  config.js                 Instagram
public/images/
  logo.png                  Logo da marca
  poedagar-signature.png     Foto principal do Poedagar Signature
  poedagar-verde.png         Foto da variação Verde (já usada no checkout ativo)
  poedagar-azul.png          Foto da variação Azul (adicionar quando tiver)
  poedagar-preto.png         Foto da variação Preto (adicionar quando tiver)
  poedagar-branco.png        Foto da variação Branco (adicionar quando tiver)
  poedagar-verde-rose.png    Foto da variação Verde & Ouro Rosé (adicionar quando tiver)
  poedagar-azul-rose.png     Foto da variação Azul & Ouro Rosé (adicionar quando tiver)
  poedagar-preto-rose.png    Foto da variação Preto & Ouro Rosé (adicionar quando tiver)
  poedagar-branco-rose.png   Foto da variação Branco & Ouro Rosé (adicionar quando tiver)
  poedagar-dourado.png       Foto da variação Ouro Dourado (adicionar quando tiver)
```

> As 8 fotos de variação acima ainda não existem no projeto — só o caminho está preparado. Até você adicionar cada arquivo, a página usa automaticamente a foto principal (`poedagar-signature.png`) como reserva, então nada quebra.

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

## Como funcionam as variações (cores) do Poedagar Signature

Em `data/products.js`, o produto tem um array `variants`. Cada variação tem três campos:

```js
{
  name: "Verde",
  image: "/images/poedagar-verde.png",
  checkoutUrl: "https://loja.infinitepay.io/jx/1iq9214-poedagar-signature---verde",
}
```

- **`name`** — aparece no seletor de cor e no rótulo "COR" da página do produto.
- **`image`** — foto exibida quando essa cor é selecionada. Enquanto o arquivo não existir em `public/images/`, a página usa a foto principal do produto automaticamente.
- **`checkoutUrl`** — link do checkout da InfinitePay para essa cor específica. Enquanto estiver `""` (vazio), o botão "Comprar Agora" fica desativado só para essa cor — as outras continuam funcionando normalmente.

**Para adicionar uma foto de variação:** salve o arquivo em `public/images/` com o nome exato já configurado (ex: `poedagar-azul.png`) — não precisa alterar nenhum código, a imagem passa a aparecer automaticamente.

**Para ativar o checkout de uma variação:** cole o link da InfinitePay no campo `checkoutUrl` correspondente em `data/products.js`.

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
