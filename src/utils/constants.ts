import ABI from './IntroCrypto.json';

export const URL_CEDALIO =
  'https://kod-nft-certificates.gateway.cedalio.dev/auth';

export const CONTRACT_DYNAMIC = '0x98D5110CDBeF8Cdd16693127671b5351bcF9B57E';
export const RPC_URL = 'https://rpc-mumbai.maticvigil.com';

export const SERVER_MINT =
  'http://progressprotocolbackenv5-env.us-east-1.elasticbeanstalk.com/progress/mint';

export const SERVER =
  'http://progressprotocolbackenv5-env.us-east-1.elasticbeanstalk.com/progress';

export const USER_IMG =
  'https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png';
export const TESTS = [
  {
    id: 'btc',
    name: 'Introduccion a Bitcoin',
    contract: CONTRACT_DYNAMIC,
    abi: ABI,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/96px-Bitcoin.svg.png',
    percentage: '0',
  },
  {
    id: 'eth',
    name: 'Introduccion a Ethereum',
    contract: CONTRACT_DYNAMIC,
    abi: ABI,
    img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png',
    percentage: '50',
  },
];
export const CERTIFICATES = [
  {
    id: 'btc',
    name: 'Introduccion a Bitcoin',
    contract: CONTRACT_DYNAMIC,
    abi: ABI,
    percentage: '100%',
    img: 'https://th.bing.com/th/id/OIP.3SFjN9uoszUEoOZ0ilfYOQAAAA?pid=ImgDet&rs=1',
  },
  {
    id: 'eth',
    name: 'Introduccion a Ethereum',
    contract: CONTRACT_DYNAMIC,
    abi: ABI,
    percentage: '100%',
    img: 'https://th.bing.com/th/id/OIP.3SFjN9uoszUEoOZ0ilfYOQAAAA?pid=ImgDet&rs=1',
  },
];

export const MODULE_ONE = [
  {
    index: 0,
    question: '¿Cuál es el mecanismo de consenso de la blockchain de bitcoin?',
    options: ['Proof Of Stake', 'Proof Of Work', 'Proof Of Humanity'],
    correct: 1,
  },
  {
    index: 1,
    question: '¿Cuándo es el próximo halving?',
    options: ['2024', '2025', '2026'],
    correct: 0,
  },
  {
    index: 2,
    question: '¿Cuántos BTC se van a emitir como máximo?',
    options: ['11.000.000', '16.000.000', '21.000.000'],
    correct: 2,
  },
];
export const MODULE_TWO = [
  {
    index: 0,
    question: '¿En qué unidad se paga el gas de la red de Ethereum?',
    options: ['Oro', 'Gwei', 'Dólares'],
    correct: 1,
  },
  {
    index: 1,
    question: '¿Cuál es el mecanismo de consenso de Ethereum?',
    options: ['POW', 'POP', 'POS'],
    correct: 2,
  },
  {
    index: 2,
    question: '¿Cuál es la característica principal de Ethereum?',
    options: [
      'Es una plataforma de contratos inteligentes',
      'Es una versión digital del dinero fiduciario',
      'Rejuvenece la piel y fortalece pelo y uñas',
    ],
    correct: 0,
  },
];

export const DATA_CARD = [
  {
    png: 'https://res.clogit udinary.com/dlwurkglp/image/upload/v1680450012/Vector_2_yqltpt.png',
    title: 'Personalizacion',
    text: 'Cada NFT es unico y esta  personalizado para el usuario que lo posee',
  },
  {
    png: 'https://res.cloudinary.com/dlwurkglp/image/upload/v1680450011/Vector_1_qovoir.png',
    title: 'Certificacion',
    text: 'Los NFTs son una excelente manera de certificar el conocimiento adquirido en los cursos',
  },
  {
    png: 'https://res.cloudinary.com/dlwurkglp/image/upload/v1680450012/Group_24_lvd6x2.png',
    title: 'Transparencia',
    text: 'Los usuarios pueden demostrar su progreso y conocimientos ante cualquier persona de una forma clara y transparente.',
  },
  {
    png: 'https://res.cloudinary.com/dlwurkglp/image/upload/v1680450011/Vector_ourtg1.png',
    title: 'Valor',
    text: 'Los NFTs dinámicos son valiosos y únicos, lo que los convierte en una excelente manera de demostrar habilidades y conocimientos.',
  },
];
