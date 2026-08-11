/**
 * JOTA TIMEPIECES — Catálogo de produtos
 * ---------------------------------------------------
 * Para adicionar um novo relógio no futuro:
 *
 *   1. Coloque a foto do produto em: /public/images/
 *   2. Copie um dos objetos abaixo e ajuste os campos.
 *   3. Garanta que o campo "slug" seja único (ele forma a URL,
 *      ex: slug "meu-relogio" => /produtos/meu-relogio).
 *   4. Pronto — o produto aparece automaticamente na página
 *      inicial e ganha sua própria página de produto.
 *
 * Nenhuma outra alteração de código é necessária.
 *
 * ---------------------------------------------------
 * SOBRE AS VARIAÇÕES (cores)
 * ---------------------------------------------------
 * Cada produto pode ter um array "variants". Cada variação tem:
 *
 *   - name        Nome exibido no seletor (ex: "Verde & Ouro Rosé")
 *   - image       Caminho da foto dessa variação em /public/images/
 *                 Se o arquivo ainda não existir, o site usa
 *                 automaticamente a imagem principal do produto
 *                 (campo "image" do produto) como reserva, para
 *                 nunca quebrar a página.
 *   - checkoutUrl Link do checkout da InfinitePay para essa variação.
 *                 Deixe "" (vazio) enquanto não tiver o link — o botão
 *                 "Comprar Agora" fica automaticamente desativado para
 *                 essa variação até você preencher o link aqui.
 *
 * Basta colar o link correto no campo checkoutUrl da variação
 * correspondente para o botão passar a funcionar — nada mais precisa
 * ser alterado.
 */

export const products = [
  {
    slug: "poedagar-signature",
    name: "Poedagar Signature",
    price: "R$ 199,00",
    image: "/images/poedagar-signature.png",
    imageAlt: "Relógio Poedagar Signature com mostrador verde e pulseira de aço inoxidável",
    shortDescription:
      "Um design sofisticado e atemporal, desenvolvido para combinar presença e elegância no uso cotidiano.",
    variants: [
      {
        name: "Verde",
        image: "/images/poedagar-verde.png",
        checkoutUrl:
          "https://loja.infinitepay.io/jxx/riq9214-poedagar-signature---verde",
      },
      {
        name: "Azul",
        image: "/images/poedagar-azul.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/bgr1068-poedagar-signature---azul",
      },
      {
        name: "Preto",
        image: "/images/poedagar-preto.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/oii1208-poedagar-signature---preto",
      },
      {
        name: "Branco",
        image: "/images/poedagar-branco.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/lev7589-poedagar-signature",
      },
      {
        name: "Verde & Ouro Rosé",
        image: "/images/poedagar-verde-rose.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/usg8902-poedagar-signature---verde-e-ouro-rose",
      },
      {
        name: "Azul & Ouro Rosé",
        image: "/images/poedagar-azul-rose.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/slq4608-poedagar-signature---azul-e-ouro-rose",
      },
      {
        name: "Preto & Ouro Rosé",
        image: "/images/poedagar-preto-rose.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/cun6566-poedagar-signature---preto-e-ouro-rose",
      },
      {
        name: "Branco & Ouro Rosé",
        image: "/images/poedagar-branco-rose.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/bfs6953-poedagar-signature---branco-e-ouro-rose",
      },
      {
        name: "Ouro",
        image: "/images/poedagar-dourado.png",
        checkoutUrl: "https://loja.infinitepay.io/jxx/xsy5530-poedagar-signature---ouro",
      },
    ],
    specs: [
      { label: "Material da Pulseira", value: "Aço inoxidável (316L)" },
      { label: "Material da Caixa", value: "Aço inoxidável (316L)" },
      { label: "Movimento", value: "Quartzo" },
      { label: "Material do Visor", value: "Vidro Hardlex" },
      { label: "Diâmetro da Caixa", value: "40mm" },
      { label: "Espessura da Caixa", value: "11mm" },
      { label: "Largura da Pulseira", value: "20mm" },
      { label: "Comprimento da Pulseira", value: "24cm" },
      { label: "Fecho", value: "Fecho oculto com botão de pressão" },
      {
        label: "Resistência à Água",
        value: "Suporta respingos e uso leve no dia a dia. Não indicado para mergulho.",
      },
      {
        label: "Funções",
        value: "Data automática, calendário completo, exibição de semana e ponteiros luminosos.",
      },
    ],
  },

{
  slug: "poedagar-diamond",
  name: "Poedagar Diamond",
  price: "R$ 249,00",
  image: "/images/poedagar-diamond-tiffany.png",
  imageAlt:
    "Relógio Poedagar Diamond na cor Tiffany com caixa e pulseira em aço inoxidável",
  shortDescription:
    "Design marcante e sofisticado, com acabamento contemporâneo e detalhes que elevam a presença do relógio no pulso.",

  variants: [
    {
      name: "Tiffany",
      image: "/images/poedagar-diamond-tiffany.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bgu2721-poedagar-diamond---tiffany",
    },
    {
      name: "Branco",
      image: "/images/poedagar-diamond-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ira3154-poedagar-diamond---branco",
    },
    {
      name: "Preto",
      image: "/images/poedagar-diamond-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tcu5043-poedagar-diamond---preto",
    },
    {
      name: "Azul",
      image: "/images/poedagar-diamond-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/lef1013-poedagar-diamond---azul",
    },
    {
      name: "All Black",
      image: "/images/poedagar-diamond-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/qqa2735-poedagar-diamond---all-black",
    },
    {
      name: "All Blue",
      image: "/images/poedagar-diamond-all-blue.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/fhs4419-poedagar-diamond---all-blue",
    },
    {
      name: "Ouro",
      image: "/images/poedagar-diamond-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/dkw5839-poedagar-diamond---ouro",
    },
    {
      name: "Branco & Ouro",
      image: "/images/poedagar-diamond-branco-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mvm3901-poedagar-diamond---branco-e-ouro",
    },
    {
      name: "Preto & Ouro",
      image: "/images/poedagar-diamond-preto-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/nxt2312-poedagar-diamond---preto-e-ouro",
    },
    {
      name: "Tiffany & Ouro",
      image: "/images/poedagar-diamond-tiffany-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/gyo9137-poedagar-diamond---tiffany-e-ouro",
    },
    {
      name: "Azul & Ouro",
      image: "/images/poedagar-diamond-azul-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mmb8126-poedagar-diamond---azul-e-ouro",
    },
    {
      name: "Verde & Ouro",
      image: "/images/poedagar-diamond-verde-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/roc4014-poedagar-diamond---verde-e-ouro",
    },
  ],

  specs: [
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável",
    },
    {
      label: "Material do Visor",
      value: "Hardlex (alta resistência a riscos)",
    },
    {
      label: "Diâmetro da Caixa",
      value: "40mm",
    },
    {
      label: "Espessura da Caixa",
      value: "11mm",
    },
    {
      label: "Largura da Pulseira",
      value: "26mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "22cm (ajustável)",
    },
    {
      label: "Resistência à Água",
      value: "3Bar (30 metros)",
    },
    {
      label: "Funções",
      value: "Cronógrafo, ponteiros luminosos e data automática",
    },
  ],
},
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}