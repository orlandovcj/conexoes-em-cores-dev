// Dados da exposição "Conexões em Cores"
// Estes são dados mock para a landing page - serão substituídos pelas imagens e informações reais

export interface Artwork {
  id: string;
  title: string;
  year: string;
  technique: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  category: "painting" | "photography" | "digital";
}

export interface Artist {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  nationality: string;
  artworks: Artwork[];
}

export const exhibitionInfo = {
  title: "Conexões em Cores",
  subtitle: "Mostra Coletiva de Pinturas, Fotografias e Artes Digitais",
  openingDate: "07 a 30 de abril de 2026",
  openingTime: "de 08 às 19h",
  endDate: "30 de abril de 2026",
  location: {
    name: "Biblioteca Pública de Santa Catarina (BPSC)",
    hall: "Hall de entrada",
    address: "R. Ten. Silveira, 343 - Centro",
    city: "Florianópolis - SC",
  },
  description: `A mostra reúne seis artistas em um encontro de afetos, ritmos e perspectivas visuais. 
  As obras celebram amizade, cores e diversidade cultural, propondo um percurso sensível pela arte contemporânea 
  — que vai da pintura e ilustração às poéticas digitais. Uma experiência visual que conecta diferentes 
  linguagens artísticas e convida o público a explorar as múltiplas facetas da criatividade humana.`,
  highlights: [
    "Entrada gratuita",
    "Pinturas, fotografias e artes digitais",
    "5 Artistas brasileiros e 1 Artista Mexicano",
    "Exposição no coração de Florianópolis",
    "Contato direto com os artistas durante a abertura",
    "Obras à venda pelo WhatsApp (48) 99646-7423",
    
  ],
  institution: {
    name: "Biblioteca Pública de Santa Catarina",
    support: ["Fundação Catarinense de Cultura", "Governo de Santa Catarina"],
  },
};

// Caminho base para imagens
// Em desenvolvimento local, não usamos basePath
// Em produção (Apache), usamos /conexoes-em-cores/
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? "/images" : "/conexoes-em-cores/images";
const placeholderBase = isDev ? "/placeholders" : "/conexoes-em-cores/placeholders";

export const artists: Artist[] = [
  {
    id: "orlando-castro",
    name: "Orlando Castro Junior",
    photoUrl: `${basePath}/artists/orlando-castro.jpg`,
    nationality: "Brasileiro",
    bio: `Orlando sempre teve o desenho como uma paixão desde a infância. Em 2016, resgatou essa vocação iniciando um processo autodidata focado em sketches urbanos, criando o blog "Tudo que Cabe no Papel" para registrar cenas do cotidiano e a riqueza dos espaços das cidades. Embora tenha iniciado com técnicas tradicionais como lápis, nanquim e aquarela, sua trajetória evoluiu significativamente para a convergência entre arte e tecnologia.
    \nEntre 2021 e 2025, Orlando expandiu sua atuação para o universo da Web3 e NFT art através do projeto BR Sketch Art, onde Alessandra Rodrigues e ele exploram a arte digital. Nesse período, Orlando demonstrou um perfil técnico e inovador, atuando no desenvolvimento de soluções para a coleção "Sketch Art".
    \nSua produção artística evoluiu para a representação de barcos, veículos, animais e figuras mágicas, mantendo um traço delicado e expressivo. Em 2024, ilustrou o livro infantil "Olho Celeste", da escritora Iranize Lira de Oliveira. Sua arte é descrita como uma combinação de leveza, sensibilidade e olhar atento ao detalhe. Junto com Alessandra, participou de exposições no México (2025 e 2026).`,
    artworks: [
      {
        id: "oc-1",
        title: "Borboletas",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Um voo vibrante de formas e cores. Esta obra abstrata captura a leveza e a energia das borboletas em uma explosão de tons vivos e composição dinâmica.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc01.jpg`,
        category: "painting",
      },
      {
        id: "oc-2",
        title: "Tamanduá Bandeira",
        year: "2028",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "A majestosa presença do tamanduá-bandeira reimaginada através de pinceladas abstratas. Uma paleta rica e intensa dá vida e movimento a este ícone da fauna.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc02.jpg`,
        category: "painting",
      },
      {
        id: "oc-3",
        title: "Camaleão",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Uma celebração da adaptação e da cor. O camaleão surge de formas fluidas e abstratas, refletindo a magia da natureza em tons intensos e surpreendentes.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc03.jpg`,
        category: "painting",
      },
      {
        id: "oc-4",
        title: "Coruja Mágica",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Mistério e encanto se encontram nesta representação. A coruja mágica ganha vida através de uma composição pulsante, onde a luz e as cores criam uma atmosfera onírica.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc04.jpg`,
        category: "painting",
      },
      {
        id: "oc-5",
        title: "Deixa eu te ver peixe",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "O movimento fluido das águas traduzido em tela. Este peixe abstrato brilha com uma luminosidade e riqueza de detalhes cromáticos que parecem saltar da obra.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc05.jpg`,
        category: "painting",
      },
      {
        id: "oc-6",
        title: "Cavalos ao Pôr do Sol",
        year: "2025",
        technique: "Arte Digital",
        dimensions: "210 x 297 mm",
        description:
          "Força e liberdade em dupla. A energia vital dos cavalos é expressa através de linhas dinâmicas e uma paleta exuberante que transmite a potência da natureza.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc06.jpg`,
        category: "digital",
      },
      {
        id: "oc-7",
        title: "Balões",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Dois balões coloridos flutuam em um céu vibrante, celebrando a leveza e a alegria de voar.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc07.jpg`,
        category: "painting",
      },
      {
        id: "oc-8",
        title: "Lazy Cat",
        year: "2026",
        technique: "Arte Digital",
        dimensions: "210 x 297 mm",
        description:
          "Um gato relaxando com estilo e bom humor sob o sol de verão.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc08.jpg`,
        category: "digital",
      },
      {
        id: "oc-9",
        title: "Funny Dragon",
        year: "2026",
        technique: "Arte Digital",
        dimensions: "210 x 297 mm",
        description:
          "um dragão divertido e colorido pronto para conquistar o mundo com seu charme e alegria.",
        imageUrl: `${basePath}/artworks/orlando-castro/oc09.jpg`,
        category: "digital",
      },
    ],
  },
  {
    id: "alessandra-rodrigues",
    name: "Alessandra Rodrigues",
    photoUrl: `${basePath}/artists/alessandra-rodrigues.jpg`,
    nationality: "Brasileira",
    bio: `Alessandra cultiva, desde a infância e com apoio de sua família, um caso duradouro de amor com a arte, a música e a escrita. É autora de livros infantis e artista visual, transitando entre diferentes técnicas e linguagens, explorando narrativas sensíveis e cotidianas. Após um longo período afastada, retomou a prática artística durante a pandemia, em parceria com seu esposo, Orlando Castro Junior, no projeto BR Sketch Art.
    \nSua trajetória inclui participação no Arte Pará (1990 e 1991), distinção no Luxembourg Art Prize (2024) e exposições no México e na Romênia. Suas obras já atravessaram fronteiras, com peças em coleções no Brasil e no exterior.
    \nHoje vive em Santa Catarina e segue desenhando, tocando e cantando.`,
    artworks: [
      {
        id: "ar-1",
        title: "Trabalhadores rurais",
        year: "2021",
        technique: "Acrílica sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Uma cena silenciosa, quase suspensa no tempo: duas figuras descansam à sombra de uma parede quente, enquanto o mundo ao redor vibra em cores intensas.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar01.jpg`,
        category: "painting",
      },
      {
        id: "ar-2",
        title: "Quebradoras de babaçu",
        year: "2022",
        technique: "Acrílica sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Duas mulheres quebram coco de babaçu em um gesto repetido e preciso. Entre cascas e ferramentas simples, a cena revela a força do trabalho cotidiano.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar02.jpg`,
        category: "painting",
      },
      {
        id: "ar-3",
        title: "Moça no jardim",
        year: "1991",
        technique: "Acrílica sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Uma figura feminina emerge de um portal entre cores vibrantes e formas fluidas, quase dissolvida no ambiente.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar03.jpg`,
        category: "painting",
      },
      {
        id: "ar-4",
        title: "Trio musical",
        year: "2026",
        technique: "Colagem e pintura sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Três figuras atravessam a composição com instrumentos em mãos, envoltas por um mosaico de cores e texturas. A obra combina miçangas, feltro, ervas, folhas, lã e outros materiais.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar04.jpg`,
        category: "painting",
      },
      {
        id: "ar-5",
        title: "Casario em Ribeirão da Ilha I",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "490 x 594 mm",
        description:
          "Um vilarejo se organiza em planos geométricos e cores intensas, como um mosaico de casas que se encaixam no espaço.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar05.jpg`,
        category: "painting",
      },
      {
        id: "ar-6",
        title: "Portal para o céu",
        year: "2026",
        technique: "Colagem e pintura sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Uma figura feminina caminha, envolta por um caminho cintilante e cheio de texturas construídas com materiais diversos. Miçangas, botões, purpurina e paetês constroem o seu percurso para o portal do céu.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar06.jpg`,
        category: "painting",
      },
      {
        id: "ar-7",
        title: "Casario em Ribeirão da Ilha II",
        year: "2025",
        technique: "Acrílica sobre papel",
        dimensions: "490 x 594 mm",
        description:
          "Uma rua construída como um mosaico, onde planos geométricos organizam casas, chão e céu em tensão dinâmica.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar07.jpg`,
        category: "painting",
      },
      {
        id: "ar-8",
        title: "Água e Sabão",
        year: "2026",
        technique: "Acrílica sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Uma mulher se inclina, lavando roupa com atenção e calma. Entre o gesto repetido e o silêncio do ambiente, a cena revela um cotidiano simples e, ao mesmo tempo, a beleza da mulher.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar08.jpg`,
        category: "painting",
      },
      {
        id: "ar-9",
        title: "O Balanço",
        year: "2026",
        technique: "Colagem e pintura sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "Uma figura no balanço atravessa a paisagem em movimento e cor. A obra combina pintura sobre relevo criado por biscuit, miçangas, lã, sementes, restos de embalagem e folhas.",
        imageUrl: `${basePath}/artworks/alessandra-rodrigues/ar09.jpg`,
        category: "painting",
      },
    ],
  },
  {
    id: "mauricio-rique",
    name: "Mauricio Riqué",
    photoUrl: `${basePath}/artists/mauricio-rique.jpg`,
    nationality: "Mexicano",
    bio: `MR RiRo é um artista digital multimídia de Chiapas, no México. Sua prática artística combina diversas técnicas, como creative coding, colagem, animação 3D, exibições performáticas e edição de vídeo. Seu trabalho explora frequentemente temas como techno-animismo, o sobrenatural, o divino, além da natureza em constante evolução do mundo digital, da cultura da internet e do crescente borrão entre as realidades física e virtual.
    \nSeu projeto de maior duração, AI Geometrics (2020-2025), é uma série generativa e fotográfica que transforma paisagens urbanas e naturais da vida real em composições construídas a partir de primitivas geométricas. O título faz uma referência brincalhona às percepções contemporâneas sobre inteligência artificial. Ironicamente, muito poucas das obras foram geradas por IA. A maioria é criada por meio de software e processos manuais.
    \nProfissionalmente, MR RiRo trabalhou em empresas como Genies e PixEOS, em projetos para clientes como Sanrio e o artista Mike Thompson. Sua arte já foi exibida tanto no México quanto internacionalmente, com mostras na França, Japão, Estados Unidos, Romênia, Nigéria, Eslováquia, Alemanha, Irlanda e Argentina. Entre as exposições de destaque estão Art on Tezos Berlin, Between Nature and Code durante a reunião ICANN84 em Dublin, além de exposições nacionais no Barco Utopia em Iztapalapa, no Museo Internacional del Barroco em Puebla e no Museo Chiapas de Ciencia y Tecnología em Tuxtla Gutiérrez.`,
    artworks: [
      {
        id: "mr-1",
        title: "Ducks",
        year: "2020",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "A delicadeza da vida selvagem em seu habitat natural. Uma imagem serena que captura a intimidade e o cuidado materno entre os patos e seus filhotes à beira d'água.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr01.jpg`,
        category: "photography",
      },
      {
        id: "mr-2",
        title: "Grackle",
        year: "2021",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "Um retrato em close da avifauna local. A fotografia destaca a textura viva da plumagem e o olhar curioso da gralha, celebrando a biodiversidade em um instante congelado.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr02.jpg`,
        category: "photography",
      },
      {
        id: "mr-3",
        title: "Chukumaltic",
        year: "2023",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "O Lago Chukulmatik (frequentemente referido como parte das Lagunas de Montebello) é um corpo de água localizado na região de Chiapas, no México.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr03.jpg`,
        category: "photography",
      },
      {
        id: "mr-4",
        title: "Heron",
        year: "2024",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "A elegante silhueta da garça branca emerge, enquanto as ondulações na superfície contrastam poeticamente com o fundo escuro.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr04.jpg`,
        category: "photography",
      },
      {
        id: "mr-5",
        title: "The Sinking Shrine",
        year: "2024",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "A densidade e a textura da vegetação nativa. A fotografia guia o olhar pelas troncas e copas das árvores, revelando uma antiga capela perdida na floresta.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr05.jpg`,
        category: "photography",
      },
      {
        id: "mr-6",
        title: "Arco Del Carmen",
        year: "2024",
        technique: "Fotografia Digital",
        dimensions: "Variável",
        description:
          "Um mergulho na memória e na história urbana. A icônica arquitetura religiosa é registrada com precisão, revelando a grandiosidade e os detalhes do patrimônio histórico.",
        imageUrl: `${basePath}/artworks/mauricio-rique/mr06.jpg`,
        category: "photography",
      },
    ],
  },
  {
    id: "kamalini-nazareth",
    name: "Kamalini Nazareth",
    photoUrl: `${basePath}/artists/kamaline-nazareth.jpg`,
    nationality: "Brasileira",
    bio: `Kamalini Nazareth, artista originária de Brasília, iniciou sua relação com a arte ainda na infância, criando seus próprios desenhos. Aos 11 anos, aprofundou esse interesse ao estudar desenho e perspectiva na Casa das Artes, marcando o início de uma trajetória em que a expressão artística se tornaria parte essencial de sua vida.
    \nSua formação foi enriquecida por experiências em diversas linguagens, incluindo dança, teatro, poesia e artes plásticas. Bailarina por muitos anos na Dançarte Cia de Dança, desenvolveu um olhar sensível e multidisciplinar, que se expandiu para a pintura a óleo e o estudo do impressionismo. Ao longo do tempo, também buscou inspiração em vivências internacionais, participando de retiros de meditação em países como Índia, Tailândia, Noruega e Itália, onde entrou em contato com diferentes culturas e formas de expressão.
    \nA cerâmica, retomada em 2017 após um primeiro contato em 2010, tornou-se um dos pilares de sua produção artística. Atualmente, Kamalini cria peças utilitárias e esculturas autorais, além de explorar técnicas mistas como carvão, aquarela, acrílica e óleo. Radicada na Barra de Ibiraquera, em Santa Catarina, segue desenvolvendo um trabalho que integra sensibilidade, técnica e uma constante busca por significado.`,
    artworks: [
      {
        id: "kn-1",
        title: "O Encontro",
        year: "2026",
        technique: "Técnica mista",
        dimensions: "50 x 70 cm",
        description:
          "Retrata o encontro entre o buscador e o buda. Carvão e tinta óleo.",
        imageUrl: `${basePath}/artworks/kamalini-nazareth/kn01.jpg`,
        category: "painting",
      },
      {
        id: "kn-2",
        title: "Prece",
        year: "2026",
        technique: "Óleo sobre tela",
        dimensions: "60 x 90 cm",
        description:
          "Retrata o giro sufi, com pinceladas modernas e espátula.",
        imageUrl: `${basePath}/artworks/kamalini-nazareth/kn02.jpg`,
        category: "painting",
      },
      {
        id: "kn-3",
        title: "Assis",
        year: "2026",
        technique: "Óleo sobre tela",
        dimensions: "50 x 80 cm",
        description:
          "Os pés de São Francisco de Assis sob o manto vermelho e arabescos, com formas translúcidas e fundo abstrato.",
        imageUrl: `${basePath}/artworks/kamalini-nazareth/kn03.jpg`,
        category: "painting",
      },
      {
        id: "kn-4",
        title: "Guerreira da Paz",
        year: "2026",
        technique: "Óleo sobre tela",
        dimensions: "60 x 90 cm",
        description:
          "Retrata a força e delicadeza da figura feminina. Traços modernos que sugerem movimento, energia e proteção.",
        imageUrl: `${basePath}/artworks/kamalini-nazareth/kn04.jpg`,
        category: "painting",
      },
      {
        id: "kn-5",
        title: "Silêncio em Flor",
        year: "2026",
        technique: "Óleo sobre tela",
        dimensions: "50 x 70 cm",
        description:
          "Sugere a meditação, em um contexto contemporâneo, com arabescos florais e fundo com pinceladas modernas.",
        imageUrl: `${basePath}/artworks/kamalini-nazareth/kn05.jpg`,
        category: "painting",
      },

    ],
  },
  {
    id: "wesley-carvalho",
    name: "Wesley Gabriel",
    photoUrl: `${basePath}/artists/wesley-carvalho.jpg`,
    nationality: "Brasileiro",
    bio: `Wesley Gabriel, artista natural de Florianópolis, tem 24 anos e encontrou no desenho realista, ainda na adolescência, o ponto de partida para uma trajetória marcada por sensibilidade e dedicação. O que começou como um interesse despretensioso evoluiu para uma jornada profunda de expressão artística e autoconhecimento.
    \nHoje, Wesley enxerga a arte como muito mais do que técnica: trata-se de um processo contínuo de evolução, tanto criativa quanto pessoal. Em cada obra, seus traços revelam um compromisso com a precisão, a identidade e a emoção, refletindo um olhar atento aos detalhes e uma busca constante por novos desafios e aperfeiçoamento.
    \nSeu trabalho é desenvolvido com materiais de alta qualidade, cuidadosamente escolhidos para garantir fidelidade, riqueza de detalhes e durabilidade. Entre eles, destacam-se papéis especiais, lápis grafite de diferentes gradações, canetas técnicas, borrachas, esfuminhos e spray fixador - elementos que, juntos, contribuem para o acabamento refinado e a preservação de cada peça.
`,
    artworks: [
      {
        id: "wc-1",
        title: "Olhar",
        year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Em preto e branco, a intensidade deste olhar captura a essência humana através de traços realistas, convidando o espectador a um diálogo silencioso com a tela.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc01.jpg`,
        category: "painting",
      },
      {
        id: "wc-2",
        title: "Gato curioso",
        year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "A graça felina traduzida em escala de cinza. A ausência de cor direciona toda a atenção para a expressividade e os detalhes sutis da sua postura.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc02.jpg`,
        category: "painting",
      },
      {
        id: "wc-3",
        title: "Perfil feminino",
        year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "A beleza encontrada nas linhas puras. A obra celebra a delicadeza da figura feminina, utilizando o contraste para esculpir a luz e a sombra no contorno do rosto.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc03.jpg`,
        category: "painting",
      },
      {
        id: "wc-4",
        title: "O poder da oração",
       year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "A obra captura a solenidade do momento sagrado, onde o rigor do estilo realista em monocromático amplifica a atmosfera de paz e reverência.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc04.jpg`,
        category: "painting",
      },
      {
        id: "wc-5",
        title: "Mulher africana",
        year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "297 x 420 mm",
        description:
          "Retratada com fidelidade técnica, a figura ganha uma dimensão atemporal, com os tons em preto e branco realçando a textura e a dignidade em sua expressão.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc05.jpg`,
        category: "painting",
      },
      {
        id: "wc-6",
        title: "Mulher indígena",
        year: "2025",
        technique: "Lápis grafite e caneta técnica sobre papel",
        dimensions: "210 x 297 mm",
        description:
          "A conexão profunda com a terra e suas raízes. Este retrato realista revela a serenidade e a sabedoria milenar através do olhar da mulher indígena.",
        imageUrl: `${basePath}/artworks/wesley-carvalho/wc06.jpg`,
        category: "painting",
      },
    ],
  },
  {
    id: "glasy210",
    name: "Glasy210",
    photoUrl: `${basePath}/artists/glasy210.jpg`,
    nationality: "Brasileiro",
    bio: `Daniel Castro (codinome Glasy210) tem 14 anos e expõe suas obras pela primeira vez. Nesta exposição, apresenta trabalhos em técnica mista que transitam entre o manual e o digital. Desenha e pinta desde cedo, com destaque para a representação de personagens, edificações e outras formas.
    \nResidente em Santa Catarina desde 2014, participou também como co-autor do livro "Oi! Meu Nome é Carlinhos, em parceria com sua mãe, Alessandra Rodrigues, e colaborou com ilustrações para o projeto BR Sketch Art, de seu pai, Orlando Castro.
    \nInteressado também por escrita, música, programação e jogos eletrônicos, constrói uma produção criativa contemporânea, marcada por imaginação, sensibilidade e humor.`,
    artworks: [
      {
        id: "gl-1",
        title: "Primum Secundo",
        year: "2024",
        technique: "Arte Digital",
        dimensions: "210 x 297 mm",
        description:
          "Look twice before you leap! — Uma provocação visual e temporal em técnica mista.",
        imageUrl: `${basePath}/artworks/glasy210/gl01.jpg`,
        category: "digital",
      },
      {
        id: "gl-2",
        title: "De La Velocité",
        year: "2024",
        technique: "Arte Digital",
        dimensions: "210 x 297 mm",
        description:
          "Velocidade, urgência e ironia se chocam neste caos organizado de símbolos contemporâneos.",
        imageUrl: `${basePath}/artworks/glasy210/gl02.jpg`,
        category: "digital",
      },
      
    ],
  },
];

// Helper function to get category label in Portuguese
export function getCategoryLabel(category: Artwork["category"]): string {
  const labels = {
    painting: "Pintura",
    photography: "Fotografia",
    digital: "Arte Digital",
  };
  return labels[category];
}
