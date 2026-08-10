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
 */

export const products = [
  {
    slug: "poedagar-signature",
    name: "Poedagar Signature",
    // Deixe vazio ("") até definir o preço, ou preencha, ex: "R$ 349,90"
    price: "R$ 199,00",
    image: "/images/poedagar-signature.png",
    imageAlt: "Relógio Poedagar Signature com mostrador verde e pulseira de aço inoxidável",
    shortDescription:
      "Um design sofisticado e atemporal, desenvolvido para combinar presença e elegância no uso cotidiano.",
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
        value: "Suporta respingos e uso leve no dia a dia. 
Não indicado para mergulho.",
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
