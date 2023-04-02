import ABI from './IntroCrypto.json';

export const URL_CEDALIO =
  'https://kod-nft-certificates.gateway.cedalio.dev/auth';

export const CONTRACT_DYNAMIC = '0x98D5110CDBeF8Cdd16693127671b5351bcF9B57E';

export const SERVER_MINT =
  'http://progressprotocolbackenv5-env.us-east-1.elasticbeanstalk.com/progress/mint';

export const USER = {
  fullname: 'Jose Garcia',
  email: 'jose@email.com',
  img: 'data:image/png;base64,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',
  courses: [
    {
      name: 'HTML',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU',
      percentage: '0%',
      contract: CONTRACT_DYNAMIC,
      abi: ABI,
    },
  ],
  certificates: [
    {
      name: 'CSS',
      img: 'https://th.bing.com/th/id/OIP.3SFjN9uoszUEoOZ0ilfYOQAAAA?pid=ImgDet&rs=1',
      percentage: '100%',
      contract: CONTRACT_DYNAMIC,
      abi: ABI,
    },
  ],
};

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
    png: 'https://res.cloudinary.com/dlwurkglp/image/upload/v1680450012/Vector_2_yqltpt.png',
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
