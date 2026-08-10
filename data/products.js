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
        checkoutUrl: "",
      },
      {
        name: "Preto",
        image: "/images/poedagar-preto.png",
        checkoutUrl: "",
      },
      {
        name: "Branco",
        image: "/images/poedagar-branco.png",
        checkoutUrl: "",
      },
      {
        name: "Verde & Ouro Rosé",
        image: "/images/poedagar-verde-rose.png",
        checkoutUrl: "",
      },
      {
        name: "Azul & Ouro Rosé",
        image: "/images/poedagar-azul-rose.png",
        checkoutUrl: "",
      },
      {
        name: "Preto & Ouro Rosé",
        image: "/images/poedagar-preto-rose.png",
        checkoutUrl: "",
      },
      {
        name: "Branco & Ouro Rosé",
        image: "/images/poedagar-branco-rose.png",
        checkoutUrl: "",
      },
      {
        name: "Ouro Dourado",
        image: "/images/poedagar-dourado.png",
        checkoutUrl: "",
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
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
