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
    price: "R$ 149,00",
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

{
  slug: "poedagar-yacht",
  name: "Poedagar Yacht",
  price: "R$ 199,00",
  image: "/images/poedagar-yacht-preto.png",
  imageAlt:
    "Relógio Poedagar Yacht na cor preta com caixa em aço inoxidável",
  shortDescription: "Um design marcante e sofisticado, inspirado no espírito de liberdade e movimento.",

  variants: [
    {
      name: "Preto",
      image: "/images/poedagar-yacht-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/fsn7956-poedagar-yacht---preto",
    },
    {
      name: "Branco",
      image: "/images/poedagar-yacht-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tvx7745-poedagar-yacht---branco",
    },
    {
      name: "Azul",
      image: "/images/poedagar-yacht-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/huj8635-poedagar-yacht---azul",
    },
    {
      name: "Azul & Ouro",
      image: "/images/poedagar-yacht-azul-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tyh2278-poedagar-yacht---azul-e-ouro",
    },
    {
      name: "Ouro & Prata",
      image: "/images/poedagar-yacht-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mbu5064-poedagar-yacht---ouro-e-prata",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-yacht-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/hbf7645-poedagar-yacht---preto-e-ouro-rose",
    },
    {
      name: "Castanho & Ouro Rosé",
      image: "/images/poedagar-yacht-castanho-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mob2948-poedagar-yacht---castanho-e-ouro-rose",
    },
    {
      name: "Preto & Ouro Rosé — Pulseira de Borracha",
      image: "/images/poedagar-yacht-preto-rose-borracha.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ptk7739-poedagar-yacht---preto-e-ouro-rose-pulseir",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável / Opção em borracha (Full Black)",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Marcador de Data",
      value: "Dia do mês",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex (resistente a arranhões e impactos)",
    },
    {
      label: "Diâmetro da Caixa",
      value: "43mm",
    },
    {
      label: "Resistência à Água",
      value: "30ATM – à prova d’água até 30 metros",
    },
    {
      label: "Ponteiros",
      value: "Luminosos (visibilidade em baixa luz)",
    },
    {
      label: "Movimento",
      value: "Alta precisão",
    },
    {
      label: "Fecho",
      value: "Bracelete com fecho oculto",
    },
    {
      label: "Comprimento da Pulseira",
      value: "21cm (ajustável)",
    },
  ],
},

{
  slug: "poedagar-montecarlo",
  name: "Poedagar Montecarlo",
  price: "R$ 249,00",
  image: "/images/poedagar-montecarlo-bege.png",
  imageAlt:
    "Relógio Poedagar Montecarlo na cor bege com pulseira de couro e caixa em aço inoxidável",
  shortDescription: "Um design clássico e refinado, com pulseira de couro e detalhes que traduzem elegância atemporal.",

  variants: [
    {
      name: "Bege",
      image: "/images/poedagar-montecarlo-bege.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/krp6602-poedagar-montecarlo---bege",
    },
    {
      name: "Azul",
      image: "/images/poedagar-montecarlo-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/cfi9918-poedagar-montecarlo---azul",
    },
    {
      name: "Preto",
      image: "/images/poedagar-montecarlo-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tqt8661-poedagar-montecarlo---preto",
    },
    {
      name: "Verde",
      image: "/images/poedagar-montecarlo-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bnp8327-poedagar-montecarlo---verde",
    },
    {
      name: "Preto, Dourado & Marrom",
      image: "/images/poedagar-montecarlo-preto-dourado-marrom.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ccs6267-poedagar-montecarlo---preto-dourado-e-marr",
    },
    {
      name: "All Black",
      image: "/images/poedagar-montecarlo-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/rkr4424-poedagar-montecarlo---all-black",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Couro",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Movimento",
      value: "Quartzo de alta precisão",
    },
    {
      label: "Funções de Data",
      value: "Sim (dia do mês)",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex resistente a riscos e impactos",
    },
    {
      label: "Diâmetro da Caixa",
      value: "42mm",
    },
    {
      label: "Resistência à Água",
      value: "3 Bar — à prova d’água até 30 metros",
    },
    {
      label: "Ponteiros",
      value: "Luminosos para leitura em ambientes com pouca luz",
    },
  ],
},

{
  slug: "poedagar-roma",
  name: "Poedagar Roma",
  price: "R$ 249,00",
  image: "/images/poedagar-roma.png",
  imageAlt:
    "Relógio Poedagar Roma All Black com mostrador preto, numerais romanos e pulseira de couro",
  shortDescription:
    "Um design clássico e imponente, marcado por numerais romanos e detalhes que traduzem elegância atemporal.",

  variants: [
    {
      name: "All Black",
      image: "/images/poedagar-roma.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/qqu8247-poedagar-roma---all-black",
    },
    {
      name: "Preto & Prata",
      image: "/images/poedagar-roma-preto-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bin2528-poedagar-roma---preto-e-prata",
    },
    {
      name: "Branco",
      image: "/images/poedagar-roma-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/pvs6816-poedagar-roma---branco",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-roma-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ael1468-poedagar-roma---preto-e-ouro-rose",
    },
    {
      name: "Branco & Ouro Rosé",
      image: "/images/poedagar-roma-branco-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/efs7254-poedagar-roma---branco-e-ouro-rose",
    },
    {
      name: "Cáqui & Ouro Rosé",
      image: "/images/poedagar-roma-caqui-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/pmy9325-poedagar-roma---caqui-e-ouro-rose",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Couro",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Funções de Data",
      value: "Sim (dia do mês)",
    },
    {
      label: "Material do Visor",
      value: "Vidro de alta dureza",
    },
    {
      label: "Diâmetro da Caixa",
      value: "40mm",
    },
    {
      label: "Espessura da Caixa",
      value: "12mm",
    },
    {
      label: "Largura da Caixa",
      value: "20mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "24cm",
    },
    {
      label: "Resistência à Água",
      value: "30 metros",
    },
    {
      label: "Ponteiros",
      value: "Luminosos para leitura em ambientes com pouca luz",
    },
    {
      label: "Peso",
      value: "68g",
    },
  ],
},

{
  slug: "poedagar-dayhero",
  name: "Poedagar Dayhero",
  price: "R$ 219,00",
  image: "/images/poedagar-dayhero.png",
  imageAlt:
    "Relógio Poedagar Dayhero em Ouro Rosé com pulseira de silicone preta e mostrador cronógrafo",
  shortDescription:
    "Um design esportivo e sofisticado, combinando presença marcante e detalhes precisos para o dia a dia.",

  variants: [
    {
      name: "Ouro Rosé",
      image: "/images/poedagar-dayhero.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/oid1692-poedagar-dayhero---ouro-rose",
    },
    {
      name: "Panda",
      image: "/images/poedagar-dayhero-panda.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/max6101-poedagar-dayhero---panda",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-dayhero-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/iil9324-poedagar-dayhero---preto-e-ouro-rose",
    },
    {
      name: "Preto",
      image: "/images/poedagar-dayhero-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/lla8301-poedagar-dayhero---preto",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Silicone",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Movimento",
      value: "Movimento original",
    },
    {
      label: "Funções",
      value: "Data e horário",
    },
    {
      label: "Diâmetro da Caixa",
      value: "42mm",
    },
    {
      label: "Espessura da Caixa",
      value: "10mm",
    },
    {
      label: "Largura da Pulseira",
      value: "20mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "21cm",
    },
    {
      label: "Resistência à Água",
      value: "30 metros",
    },
    {
      label: "Fecho",
      value: "Fivela",
    },
  ],
},

{
  slug: "poedagar-v12",
  name: "Poedagar V12",
  price: "R$ 399,00",
  image: "/images/poedagar-v12-vermelho.png",
  imageAlt: "Relógio Poedagar V12 vermelho com design esportivo e marcante",
  shortDescription:
    "Design esportivo e marcante, inspirado na estética de alta performance.",
  variants: [
    {
      name: "Vermelho",
      image: "/images/poedagar-v12-vermelho.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/hsw4405-poedagar-v12---vermelho",
    },
    {
      name: "All Black",
      image: "/images/poedagar-v12-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/yjf5307-poedagar-v12---all-black",
    },
    {
      name: "Verde",
      image: "/images/poedagar-v12-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tdg5527-poedagar-v12---verde",
    },
    {
      name: "Azul",
      image: "/images/poedagar-v12-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/pdo1270-poedagar-v12---azul",
    },
    {
      name: "Laranja",
      image: "/images/poedagar-v12-laranja.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tbw9835-poedagar-v12---laranja",
    },
  ],
  specs: [
    {
      label: "Material do Visor",
      value: "Hardlex",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Material da Pulseira",
      value: "Silicone",
    },
    {
      label: "Resistência à Água",
      value: "3ATM",
    },
    {
      label: "Diâmetro do Mostrador",
      value: "51mm",
    },
    {
      label: "Espessura da Caixa",
      value: "17mm",
    },
    {
      label: "Largura da Pulseira",
      value: "22mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "23cm",
    },
    {
      label: "Peso",
      value: "155g",
    },
  ],
},

{
  slug: "poedagar-maverick",
  name: "Poedagar Maverick",
  price: "R$ 279,00",
  image: "/images/poedagar-maverick.png",
  imageAlt:
    "Relógio Poedagar Maverick Azul Menta com caixa e pulseira em aço inoxidável",
  shortDescription:
    "Um design contemporâneo e sofisticado, com presença marcante e acabamento que equilibra elegância e personalidade.",

  variants: [
    {
      name: "Azul Menta",
      image: "/images/poedagar-maverick.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/lmp8825-poedagar-maverick---azul-menta",
    },
    {
      name: "Azul Marinho",
      image: "/images/poedagar-maverick-azul-marinho.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/cjm7480-poedagar-maverick---azul-marinho",
    },
    {
      name: "Preto",
      image: "/images/poedagar-maverick-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/hgx4459-poedagar-maverick---preto",
    },
    {
      name: "Branco",
      image: "/images/poedagar-maverick-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/rdx4509-poedagar-maverick---branco",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex",
    },
    {
      label: "Diâmetro do Visor",
      value: "42mm",
    },
    {
      label: "Espessura da Caixa",
      value: "12mm",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Resistência à Água",
      value: "3 ATM — resistente a respingos leves, suor e chuva.",
    },
    {
      label: "Fecho",
      value: "Fecho oculto com botão de pressão",
    },
    {
      label: "Comprimento da Pulseira",
      value: "22cm (ajustável)",
    },
    {
      label: "Largura da Pulseira",
      value: "20–24mm",
    },
  ],
},

{
  slug: "poedagar-marine",
  name: "Poedagar Marine",
  price: "R$ 249,00",
  image: "/images/poedagar-marine.png",
  imageAlt:
    "Relógio Poedagar Marine azul com caixa e pulseira em aço inoxidável",
  shortDescription:
    "Precisão, presença e espírito esportivo em um design inspirado no universo náutico.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-marine.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/dkm9742-poedagar-marine---azul",
    },
    {
      name: "Azul & Ouro",
      image: "/images/poedagar-marine-azul-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/omy4931-poedagar-marine---azul-e-ouro",
    },
    {
      name: "Verde",
      image: "/images/poedagar-marine-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/agi9388-poedagar-marine---verde",
    },
    {
      name: "Prata",
      image: "/images/poedagar-marine-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bnn9015-poedagar-marine---prata",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Material do Visor",
      value: "Hardlex de alta resistência",
    },
    {
      label: "Diâmetro da Caixa",
      value: "42,5mm",
    },
    {
      label: "Espessura da Caixa",
      value: "13mm",
    },
    {
      label: "Largura da Pulseira",
      value: "22mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "23cm",
    },
    {
      label: "Fecho",
      value: "Oculto com botão de pressão",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente a respingos e chuva leve. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value:
        "Cronógrafo funcional, calendário automático, exibição 24 horas e ponteiros luminosos.",
    },
  ],
},

{
  slug: "poedagar-latittude",
  name: "Poedagar Latittude",
  price: "R$ 199,00",
  image: "/images/poedagar-latittude.png",
  imageAlt:
    "Relógio Poedagar Latittude azul com pulseira de couro premium e caixa em aço inoxidável",
  shortDescription:
    "Um design clássico e sofisticado, combinando detalhes esportivos com a elegância atemporal do couro.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-latittude.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mua9724-poedagar-latittude---azul",
    },
    {
      name: "Verde & Preto",
      image: "/images/poedagar-latittude-verde-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tcq6906-poedagar-latittude---verde-e-preto",
    },
    {
      name: "Preto",
      image: "/images/poedagar-latittude-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/abk8695-poedagar-latittude---preto",
    },
    {
      name: "All Black",
      image: "/images/poedagar-latittude-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/jiq6967-poedagar-latittude---all-black",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Couro premium",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Formato da Caixa",
      value: "Redondo",
    },
    {
      label: "Material do Visor",
      value: "Hardlex resistente a riscos",
    },
    {
      label: "Diâmetro da Caixa",
      value: "41mm",
    },
    {
      label: "Espessura da Caixa",
      value: "12mm",
    },
    {
      label: "Movimento",
      value: "Quartzo de alta precisão",
    },
    {
      label: "Largura da Pulseira",
      value: "21mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "22cm",
    },
    {
      label: "Fecho",
      value: "Fivela clássica",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente a respingos, chuva leve e uso diário. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value:
        "Cronógrafo funcional, data automática, display 24 horas, ponteiros luminosos e taquímetro no aro.",
    },
  ],
},

{
  slug: "poedagar-royalking",
  name: "Poedagar RoyalKing",
  price: "R$ 229,00",
  image: "/images/poedagar-royalking.png",
  imageAlt:
    "Relógio Poedagar RoyalKing azul com pulseira e caixa em aço inoxidável",
  shortDescription:
    "Um design sofisticado e imponente, pensado para unir presença, precisão e elegância em cada detalhe.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-royalking.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/kjr1832-poedagar-royalking---azul",
    },
    {
      name: "Preto",
      image: "/images/poedagar-royalking-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ocw1457-poedagar-royalking---preto",
    },
    {
      name: "Branco",
      image: "/images/poedagar-royalking-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/tpi1207-poedagar-royalking---branco",
    },
    {
      name: "Azul & Ouro Rosé",
      image: "/images/poedagar-royalking-azul-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/lrm7283-poedagar-royalking---azul-e-ouro-rose",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-royalking-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/xxf8083-poedagar-royalking---preto-e-ouro-rose",
    },
    {
      name: "Branco & Ouro Rosé",
      image: "/images/poedagar-royalking-branco-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/kkm6161-poedagar-royalking---branco-e-ouro-rose",
    },
    {
      name: "All Black",
      image: "/images/poedagar-royalking-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bjs5235-poedagar-royalking---all-black",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Formato da Caixa",
      value: "Redondo",
    },
    {
      label: "Material do Visor",
      value: "Hardlex resistente a riscos",
    },
    {
      label: "Diâmetro da Caixa",
      value: "42mm",
    },
    {
      label: "Espessura da Caixa",
      value: "11mm",
    },
    {
      label: "Movimento",
      value: "Quartzo de alta precisão",
    },
    {
      label: "Largura da Pulseira",
      value: "24mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "22cm",
    },
    {
      label: "Fecho",
      value: "Oculto com botão de pressão",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente a respingos, chuva leve e uso diário. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value: "Data automática e ponteiros luminosos.",
    },
  ],
},

{
  slug: "poedagar-fortier",
  name: "Poedagar Fortier",
  price: "R$ 349,00",
  image: "/images/poedagar-fortier.png",
  imageAlt:
    "Relógio Poedagar Fortier preto e prata com pulseira de aço inoxidável",
  shortDescription:
    "Um design marcante que combina precisão mecânica, detalhes sofisticados e presença atemporal.",

  variants: [
    {
      name: "Preto & Prata",
      image: "/images/poedagar-fortier.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/las7351-poedagar-fortier---preto-e-prata",
    },
    {
      name: "Preto & Prata — Couro",
      image: "/images/poedagar-fortier-preto-prata-couro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/djk4644-poedagar-fortier---preto-e-prata-couro",
    },
    {
      name: "Vermelho & Ouro Rosé",
      image: "/images/poedagar-fortier-vermelho-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/nli5465-poedagar-fortier---vermelho-e-ouro-rose",
    },
    {
      name: "Vermelho & Ouro Rosé — Couro",
      image: "/images/poedagar-fortier-vermelho-rose-couro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/fcw2313-poedagar-fortier---vermelho-e-ouro-rose-co",
    },
    {
      name: "Azul & Ouro Rosé",
      image: "/images/poedagar-fortier-azul-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mgb5042-poedagar-fortier---azul-e-ouro-rose",
    },
    {
      name: "Azul & Ouro Rosé — Couro",
      image: "/images/poedagar-fortier-azul-rose-couro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bft1185-poedagar-fortier---azul-e-ouro-rose-couro",
    },
    {
      name: "Azul & Preto",
      image: "/images/poedagar-fortier-azul-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/xus8747-poedagar-fortier---azul-e-preto",
    },
    {
      name: "Azul & Preto — Couro",
      image: "/images/poedagar-fortier-azul-preto-couro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/fqh4992-poedagar-fortier---azul-e-preto-couro",
    },
    {
      name: "Ouro & Prata",
      image: "/images/poedagar-fortier-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/fnr7909-poedagar-fortier---ouro-e-prata",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável ou couro, conforme a variação",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Material do Visor",
      value: "Cristal de safira",
    },
    {
      label: "Diâmetro da Caixa",
      value: "43mm",
    },
    {
      label: "Espessura da Caixa",
      value: "17mm",
    },
    {
      label: "Largura da Pulseira",
      value: "21mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "20cm (ajustável)",
    },
    {
      label: "Movimento",
      value: "Automático",
    },
    {
      label: "Fecho",
      value: "Fecho com botão oculto",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente à água para uso cotidiano. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value:
        "Ponteiros luminosos, data automática, calendário completo, exibição de 24 horas e indicador de dia e noite.",
    },
  ],
},

{
  slug: "poedagar-prestige",
  name: "Poedagar Prestige",
  price: "R$ 249,00",
  image: "/images/poedagar-prestige-branco-ouro-prata.png",
  imageAlt:
    "Relógio Poedagar Prestige branco, ouro e prata com pulseira de aço",
  shortDescription:
    "Um design imponente e sofisticado, criado para unir presença, precisão e elegância em cada detalhe.",

  variants: [
    {
      name: "Branco, Ouro & Prata",
      image: "/images/poedagar-prestige-branco-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/uog2000-poedagar-prestige---branco-ouro-e-prata",
    },
    {
      name: "Azul, Ouro & Prata",
      image: "/images/poedagar-prestige-azul-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/dxv4466-poedagar-prestige---azul-ouro-prata",
    },
    {
      name: "Verde, Ouro & Prata",
      image: "/images/poedagar-prestige-verde-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/cyc8105-poedagar-prestige---verde-ouro-e-prata",
    },
    {
      name: "Preto, Ouro & Prata",
      image: "/images/poedagar-prestige-preto-ouro-prata.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/xct1308-poedagar-prestige---preto-ouro-e-prata",
    },
    {
      name: "Ouro",
      image: "/images/poedagar-prestige-ouro.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/plm6469-poedagar-prestige---ouro",
    },
    {
      name: "Branco",
      image: "/images/poedagar-prestige-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/lrp7860-poedagar-prestige---branco",
    },
    {
      name: "Azul",
      image: "/images/poedagar-prestige-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bva6840-poedagar-prestige---azul",
    },
    {
      name: "Verde",
      image: "/images/poedagar-prestige-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/wfj4380-poedagar-prestige---verde",
    },
    {
      name: "Preto",
      image: "/images/poedagar-prestige-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/crf6329-poedagar-prestige---preto",
    },
    {
      name: "All Black",
      image: "/images/poedagar-prestige-all-black.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ybf9740-poedagar-prestige---all-black",
    },
  ],

  specs: [
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Diâmetro da Caixa",
      value: "44mm",
    },
    {
      label: "Espessura da Caixa",
      value: "13mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "22cm",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — adequado para uso diário e contato com água. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value:
        "Cronógrafo, luminosidade noturna e ponteiros luminosos.",
    },
  ],
},

{
  slug: "poedagar-deluxe-edition",
  name: "Poedagar Deluxe Edition",
  price: "R$ 199,00",
  image: "/images/poedagar-deluxe-edition.png",
  imageAlt:
    "Relógio Poedagar Deluxe Edition azul com caixa e pulseira em aço inoxidável",
  shortDescription:
    "Um design contemporâneo e sofisticado, com linhas marcantes que equilibram presença e elegância.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-deluxe-edition.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/xnm9576-poedagar-deluxe-edition---azul",
    },
    {
      name: "Preto",
      image: "/images/poedagar-deluxe-edition-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/buj9399-poedagar-deluxe-edition---preto",
    },
    {
      name: "Branco",
      image: "/images/poedagar-deluxe-edition-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/bci7582-poedagar-deluxe-edition---branco",
    },
    {
      name: "Verde",
      image: "/images/poedagar-deluxe-edition-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/yhs2380-poedagar-deluxe-edition---verde",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Formato da Caixa",
      value: "Quadrado",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex",
    },
    {
      label: "Diâmetro da Caixa",
      value: "40mm",
    },
    {
      label: "Espessura da Caixa",
      value: "10mm",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Largura da Pulseira",
      value: "22mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "20cm",
    },
    {
      label: "Fecho",
      value: "Fecho com botão oculto",
    },
    {
      label: "Resistência à Água",
      value:
        "Resistente a respingos e exposição à chuva leve. Não indicado para mergulho.",
    },
    {
      label: "Funções",
      value: "Data automática, cronógrafo e ponteiros luminosos.",
    },
  ],
},

{
  slug: "poedagar-deluxe-old",
  name: "Poedagar Deluxe Old",
  price: "R$ 199,00",
  image: "/images/poedagar-deluxe-old-azul.png",
  imageAlt:
    "Relógio Poedagar Deluxe Old azul com pulseira de couro legítimo",
  shortDescription:
    "Um clássico de inspiração atemporal, combinando couro legítimo e detalhes sofisticados para um estilo distinto.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-deluxe-old-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/epe1357-poedagar-deluxe-old---azul",
    },
    {
      name: "Azul & Ouro Rosé",
      image: "/images/poedagar-deluxe-old-azul-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/jjw1012-poedagar-deluxe-old---azul-e-ouro-rose",
    },
    {
      name: "Verde",
      image: "/images/poedagar-deluxe-old-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/qih8826-poedagar-deluxe-old---verde",
    },
    {
      name: "Verde & Ouro Rosé",
      image: "/images/poedagar-deluxe-old-verde-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/ljy6816-poedagar-deluxe-old---verde-e-ouro-rose",
    },
    {
      name: "Preto",
      image: "/images/poedagar-deluxe-old-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/vcs3501-poedagar-deluxe-old---preto",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-deluxe-old-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/etx8834-poedagar-deluxe-old---preto-e-ouro-rose",
    },
    {
      name: "Branco",
      image: "/images/poedagar-deluxe-old-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/jto3587-poedagar-deluxe-old---branco",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Couro legítimo",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex",
    },
    {
      label: "Movimento",
      value: "Quartzo",
    },
    {
      label: "Diâmetro da Caixa",
      value: "41mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "20cm (ajustável)",
    },
    {
      label: "Marcador de Data",
      value: "Data automática",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente à água para uso diário. Não indicado para mergulho.",
    },
  ],
},

{
  slug: "poedagar-deluxe-ice",
  name: "Poedagar Deluxe Ice",
  price: "R$ 199,00",
  image: "/images/poedagar-deluxe-ice-azul.png",
  imageAlt:
    "Relógio Poedagar Deluxe Ice azul com caixa e pulseira em aço inoxidável",
  shortDescription:
    "Um design marcante e sofisticado, com acabamento inspirado na alta relojoaria e detalhes que elevam sua presença.",

  variants: [
    {
      name: "Azul",
      image: "/images/poedagar-deluxe-ice-azul.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/efj4618-poedagar-deluxe-ice---azul",
    },
    {
      name: "Azul & Ouro Rosé",
      image: "/images/poedagar-deluxe-ice-azul-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/qje6444-poedagar-deluxe-ice---azul-e-ouro-rose",
    },
    {
      name: "Verde",
      image: "/images/poedagar-deluxe-ice-verde.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/kie8421-poedagar-deluxe-ice---verde",
    },
    {
      name: "Preto",
      image: "/images/poedagar-deluxe-ice-preto.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/jjd7832-poedagar-deluxe-ice---preto",
    },
    {
      name: "Preto & Ouro Rosé",
      image: "/images/poedagar-deluxe-ice-preto-rose.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/mtm4492-poedagar-deluxe-ice---preto-e-ouro-rose",
    },
    {
      name: "Branco",
      image: "/images/poedagar-deluxe-ice-branco.png",
      checkoutUrl: "https://loja.infinitepay.io/jxx/gaa4827-poedagar-deluxe-ice---branco",
    },
  ],

  specs: [
    {
      label: "Material da Pulseira",
      value: "Aço inoxidável premium",
    },
    {
      label: "Material da Caixa",
      value: "Aço inoxidável premium",
    },
    {
      label: "Material do Visor",
      value: "Vidro Hardlex resistente a riscos e impactos",
    },
    {
      label: "Movimento",
      value: "Quartzo de alta precisão",
    },
    {
      label: "Diâmetro da Caixa",
      value: "40mm",
    },
    {
      label: "Espessura da Caixa",
      value: "10mm",
    },
    {
      label: "Largura da Pulseira",
      value: "23,5mm",
    },
    {
      label: "Comprimento da Pulseira",
      value: "20cm",
    },
    {
      label: "Fecho",
      value: "Fecho oculto com botão de pressão",
    },
    {
      label: "Função de Data",
      value: "Exibe o dia do mês",
    },
    {
      label: "Ponteiros",
      value: "Luminosos para visibilidade em baixa luz",
    },
    {
      label: "Resistência à Água",
      value:
        "3ATM / 30 metros — resistente a respingos e uso diário. Não indicado para mergulho.",
    },
  ],
},
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}