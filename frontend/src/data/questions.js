// Curated TCF-aligned question bank
const QUESTIONS = {
  greetings: [
    {
      id: 'g1', type: 'mcq', level: 'A1',
      question: 'Comment dit-on "Hello" en français ?',
      options: ['Bonjour', 'Au revoir', 'Merci', 'Pardon'],
      correct: 0,
      explanation: '"Bonjour" is the standard French greeting meaning "Hello" or "Good day".',
    },
    {
      id: 'g2', type: 'mcq', level: 'A1',
      question: 'Quelle est la manière formelle de dire "How are you?" ?',
      options: ['Ça va ?', 'Comment allez-vous ?', 'Quoi de neuf ?', 'Salut !'],
      correct: 1,
      explanation: '"Comment allez-vous ?" is the formal way to ask "How are you?" using the vous form.',
    },
    {
      id: 'g3', type: 'fill', level: 'A1',
      question: 'Je _____ français. (I speak French)',
      answer: 'parle',
      hint: 'First person singular of "parler"',
      explanation: 'The verb "parler" conjugated in first person singular present tense is "parle".',
    },
    {
      id: 'g4', type: 'vocab', level: 'A1',
      word: 'Enchanté(e)',
      meaning: 'Nice to meet you / Delighted',
      context: 'Je suis Marie. Enchantée !',
      contextTranslation: 'I am Marie. Nice to meet you!',
    },
    {
      id: 'g5', type: 'pronunciation', level: 'A1',
      text: 'Bonjour, comment allez-vous ?',
      translation: 'Hello, how are you?',
      phonetic: 'bɔ̃ʒuʁ, kɔmɑ̃ tale vu',
    },
    {
      id: 'g6', type: 'mcq', level: 'A1',
      question: 'Quel mot utilise-t-on pour dire "Goodbye" en français ?',
      options: ['Bonjour', 'Bonsoir', 'Au revoir', 'Salut'],
      correct: 2,
      explanation: '"Au revoir" literally means "Until we see each other again" and is the standard "Goodbye".',
    },
    {
      id: 'g7', type: 'fill', level: 'A1',
      question: 'Comment vous _____ ? (What is your name?)',
      answer: 'appelez-vous',
      hint: 'Formal way to ask someone\'s name',
      explanation: '"Comment vous appelez-vous ?" is the formal way to ask "What is your name?"',
    },
    {
      id: 'g8', type: 'mcq', level: 'A1',
      question: '"Bonsoir" is used to say:',
      options: ['Good morning', 'Good evening', 'Good night', 'Goodbye'],
      correct: 1,
      explanation: '"Bonsoir" means "Good evening" and is used from late afternoon onwards.',
    },
    {
      id: 'g9', type: 'vocab', level: 'A1',
      word: 'S\'il vous plaît',
      meaning: 'Please (formal)',
      context: 'Un café, s\'il vous plaît.',
      contextTranslation: 'A coffee, please.',
    },
    {
      id: 'g10', type: 'pronunciation', level: 'A1',
      text: 'Je m\'appelle Pierre. Enchanté.',
      translation: 'My name is Pierre. Nice to meet you.',
      phonetic: 'ʒə mapɛl pjɛʁ. ɑ̃ʃɑ̃te',
    },
  ],
  'numbers-time': [
    {
      id: 'nt1', type: 'mcq', level: 'A1',
      question: 'Comment dit-on "21" en français ?',
      options: ['Vingt-un', 'Vingt et un', 'Vingt-deux', 'Trente et un'],
      correct: 1,
      explanation: '21 in French is "vingt et un" — note the "et" (and) which is unique to 21, 31, 41, etc.',
    },
    {
      id: 'nt2', type: 'fill', level: 'A1',
      question: 'Il est _____ heures. (It is 3 o\'clock)',
      answer: 'trois',
      hint: 'The number 3 in French',
      explanation: '"Trois" means 3. Time is expressed as "Il est [number] heures".',
    },
    {
      id: 'nt3', type: 'vocab', level: 'A1',
      word: 'Quinze',
      meaning: 'Fifteen (15)',
      context: 'Il est quinze heures.',
      contextTranslation: 'It is 3 PM (15:00).',
    },
    {
      id: 'nt4', type: 'mcq', level: 'A1',
      question: 'Quel jour vient après "mercredi" ?',
      options: ['Mardi', 'Vendredi', 'Jeudi', 'Lundi'],
      correct: 2,
      explanation: 'The days of the week in order: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.',
    },
    {
      id: 'nt5', type: 'pronunciation', level: 'A1',
      text: 'Il est dix heures et quart.',
      translation: 'It is quarter past ten.',
      phonetic: 'il ɛ diz œʁ e kaʁ',
    },
    {
      id: 'nt6', type: 'fill', level: 'A1',
      question: 'Le mois après janvier est _____.',
      answer: 'février',
      hint: 'The second month of the year',
      explanation: '"Février" is February, the second month.',
    },
    {
      id: 'nt7', type: 'mcq', level: 'A1',
      question: 'Comment dit-on "70" en français ?',
      options: ['Septante', 'Soixante-dix', 'Sept-dix', 'Soixante'],
      correct: 1,
      explanation: '70 in French is "soixante-dix" (literally sixty-ten). Belgium and Switzerland use "septante".',
    },
    {
      id: 'nt8', type: 'vocab', level: 'A1',
      word: 'Minuit',
      meaning: 'Midnight',
      context: 'Il est minuit, allons dormir.',
      contextTranslation: 'It is midnight, let\'s go to sleep.',
    },
  ],
  family: [
    {
      id: 'f1', type: 'mcq', level: 'A1',
      question: 'Comment dit-on "mother" en français ?',
      options: ['Père', 'Mère', 'Sœur', 'Fille'],
      correct: 1,
      explanation: '"Mère" means mother. "Maman" is the informal equivalent (Mom).',
    },
    {
      id: 'f2', type: 'fill', level: 'A1',
      question: 'Mon _____ s\'appelle Jean. (My brother\'s name is Jean)',
      answer: 'frère',
      hint: 'Male sibling',
      explanation: '"Frère" means brother.',
    },
    {
      id: 'f3', type: 'vocab', level: 'A1',
      word: 'Les grands-parents',
      meaning: 'Grandparents',
      context: 'Mes grands-parents habitent à Paris.',
      contextTranslation: 'My grandparents live in Paris.',
    },
    {
      id: 'f4', type: 'mcq', level: 'A1',
      question: '"Ma tante" signifie :',
      options: ['My uncle', 'My aunt', 'My cousin', 'My sister'],
      correct: 1,
      explanation: '"Tante" means aunt. "Oncle" means uncle.',
    },
    {
      id: 'f5', type: 'pronunciation', level: 'A1',
      text: 'J\'ai deux frères et une sœur.',
      translation: 'I have two brothers and one sister.',
      phonetic: 'ʒe dø fʁɛʁ e yn sœʁ',
    },
    {
      id: 'f6', type: 'fill', level: 'A1',
      question: '_____ parents sont gentils. (My parents are nice)',
      answer: 'Mes',
      hint: 'Possessive adjective for "my" (plural)',
      explanation: '"Mes" is the plural possessive adjective for "my".',
    },
  ],
  'food-drink': [
    {
      id: 'fd1', type: 'mcq', level: 'A2',
      question: 'Que signifie "Je voudrais un croissant" ?',
      options: ['I have a croissant', 'I would like a croissant', 'I ate a croissant', 'I see a croissant'],
      correct: 1,
      explanation: '"Je voudrais" is the polite conditional form meaning "I would like".',
    },
    {
      id: 'fd2', type: 'fill', level: 'A2',
      question: 'L\'addition, s\'il vous _____. (The bill, please)',
      answer: 'plaît',
      hint: 'Part of the polite expression "please"',
      explanation: '"S\'il vous plaît" means "please" in formal French.',
    },
    {
      id: 'fd3', type: 'vocab', level: 'A2',
      word: 'Les fruits de mer',
      meaning: 'Seafood',
      context: 'Ce restaurant est spécialisé en fruits de mer.',
      contextTranslation: 'This restaurant specializes in seafood.',
    },
    {
      id: 'fd4', type: 'mcq', level: 'A2',
      question: 'Quel est le plat typiquement français ?',
      options: ['La paella', 'Le coq au vin', 'La pizza', 'Le sushi'],
      correct: 1,
      explanation: '"Le coq au vin" (rooster in wine) is a classic French dish.',
    },
    {
      id: 'fd5', type: 'pronunciation', level: 'A2',
      text: 'Je voudrais une baguette et du fromage.',
      translation: 'I would like a baguette and some cheese.',
      phonetic: 'ʒə vudʁɛ yn bagɛt e dy fʁɔmaʒ',
    },
    {
      id: 'fd6', type: 'fill', level: 'A2',
      question: 'Je prends un café _____ lait. (I\'ll have a coffee with milk)',
      answer: 'au',
      hint: 'Contraction of "à + le"',
      explanation: '"Au" is the contraction of "à le" meaning "with" in this context.',
    },
    {
      id: 'fd7', type: 'vocab', level: 'A2',
      word: 'La boulangerie',
      meaning: 'Bakery',
      context: 'J\'achète du pain à la boulangerie.',
      contextTranslation: 'I buy bread at the bakery.',
    },
  ],
  'daily-routine': [
    {
      id: 'dr1', type: 'mcq', level: 'A2',
      question: 'Que signifie "Je me réveille à sept heures" ?',
      options: ['I sleep at 7', 'I wake up at 7', 'I eat at 7', 'I leave at 7'],
      correct: 1,
      explanation: '"Se réveiller" is a reflexive verb meaning "to wake up".',
    },
    {
      id: 'dr2', type: 'fill', level: 'A2',
      question: 'Elle se _____ les dents. (She brushes her teeth)',
      answer: 'brosse',
      hint: 'Reflexive verb "se brosser"',
      explanation: '"Se brosser les dents" means "to brush one\'s teeth".',
    },
    {
      id: 'dr3', type: 'vocab', level: 'A2',
      word: 'Se coucher',
      meaning: 'To go to bed',
      context: 'Je me couche à vingt-deux heures.',
      contextTranslation: 'I go to bed at 10 PM.',
    },
    {
      id: 'dr4', type: 'pronunciation', level: 'A2',
      text: 'Le matin, je me lève et je prends le petit déjeuner.',
      translation: 'In the morning, I get up and have breakfast.',
      phonetic: 'lə matɛ̃, ʒə mə lɛv e ʒə pʁɑ̃ lə pəti deʒøne',
    },
    {
      id: 'dr5', type: 'mcq', level: 'A2',
      question: '"Je fais la cuisine" signifie :',
      options: ['I do laundry', 'I cook', 'I clean the house', 'I go shopping'],
      correct: 1,
      explanation: '"Faire la cuisine" means "to cook" or "to do the cooking".',
    },
  ],
  shopping: [
    {
      id: 'sh1', type: 'mcq', level: 'A2',
      question: 'Comment demandez-vous le prix ?',
      options: ['Quel temps fait-il ?', 'Combien ça coûte ?', 'Où est la sortie ?', 'Quelle heure est-il ?'],
      correct: 1,
      explanation: '"Combien ça coûte ?" means "How much does it cost?"',
    },
    {
      id: 'sh2', type: 'fill', level: 'A2',
      question: 'Cette robe est trop _____. (This dress is too expensive)',
      answer: 'chère',
      hint: 'Feminine form of "expensive"',
      explanation: '"Cher/chère" means expensive. Feminine form is used because "robe" is feminine.',
    },
    {
      id: 'sh3', type: 'vocab', level: 'A2',
      word: 'Les soldes',
      meaning: 'Sales / Discounts',
      context: 'Pendant les soldes, tout est à moitié prix.',
      contextTranslation: 'During the sales, everything is half price.',
    },
    {
      id: 'sh4', type: 'pronunciation', level: 'A2',
      text: 'Est-ce que vous avez cette jupe en bleu ?',
      translation: 'Do you have this skirt in blue?',
      phonetic: 'ɛs kə vuz ave sɛt ʒyp ɑ̃ blø',
    },
  ],
  travel: [
    {
      id: 'tr1', type: 'mcq', level: 'B1',
      question: 'Que signifie "Je voudrais réserver une chambre pour deux nuits" ?',
      options: ['I want to cancel a room', 'I would like to reserve a room for two nights', 'I need two rooms', 'I stayed for two nights'],
      correct: 1,
      explanation: '"Réserver une chambre" means "to book a room". "Nuits" means nights.',
    },
    {
      id: 'tr2', type: 'fill', level: 'B1',
      question: 'Pourriez-vous m\'_____ comment aller à la gare ? (Could you tell me how to get to the station?)',
      answer: 'indiquer',
      hint: 'Verb meaning "to indicate" or "to show"',
      explanation: '"Indiquer" means to indicate/show. "Pourriez-vous" is a polite request form.',
    },
    {
      id: 'tr3', type: 'vocab', level: 'B1',
      word: 'La correspondance',
      meaning: 'Connection / Transfer (transport)',
      context: 'Vous devez prendre une correspondance à Châtelet.',
      contextTranslation: 'You need to take a connection at Châtelet.',
    },
    {
      id: 'tr4', type: 'mcq', level: 'B1',
      question: '"Tournez à gauche puis continuez tout droit" signifie :',
      options: ['Turn right then stop', 'Turn left then continue straight', 'Go straight then turn left', 'Turn around and go back'],
      correct: 1,
      explanation: '"À gauche" = left, "tout droit" = straight ahead.',
    },
    {
      id: 'tr5', type: 'pronunciation', level: 'B1',
      text: 'Excusez-moi, pourriez-vous me dire où se trouve la station de métro la plus proche ?',
      translation: 'Excuse me, could you tell me where the nearest metro station is?',
      phonetic: 'ɛkskyze mwa, puʁje vu mə diʁ u sə tʁuv la stasjɔ̃ də metʁo la ply pʁɔʃ',
    },
    {
      id: 'tr6', type: 'fill', level: 'B1',
      question: 'L\'avion _____ à 14h30. (The plane takes off at 2:30 PM)',
      answer: 'décolle',
      hint: 'Verb meaning "to take off"',
      explanation: '"Décoller" means "to take off" (for planes).',
    },
  ],
  health: [
    {
      id: 'h1', type: 'mcq', level: 'B1',
      question: 'Comment dit-on "I have a headache" en français ?',
      options: ['J\'ai mal au dos', 'J\'ai mal à la tête', 'J\'ai mal au ventre', 'J\'ai mal à la gorge'],
      correct: 1,
      explanation: '"Avoir mal à la tête" = to have a headache. "La tête" = the head.',
    },
    {
      id: 'h2', type: 'fill', level: 'B1',
      question: 'Le médecin m\'a prescrit des _____. (The doctor prescribed me medicine)',
      answer: 'médicaments',
      hint: 'Plural noun for medicine/medication',
      explanation: '"Médicaments" means medicines/medication.',
    },
    {
      id: 'h3', type: 'vocab', level: 'B1',
      word: 'Une ordonnance',
      meaning: 'A prescription',
      context: 'Il faut une ordonnance pour acheter ce médicament.',
      contextTranslation: 'You need a prescription to buy this medicine.',
    },
    {
      id: 'h4', type: 'pronunciation', level: 'B1',
      text: 'Je ne me sens pas bien, je crois que j\'ai de la fièvre.',
      translation: 'I don\'t feel well, I think I have a fever.',
      phonetic: 'ʒə nə mə sɑ̃ pa bjɛ̃, ʒə kʁwa kə ʒe də la fjɛvʁ',
    },
  ],
  'work-career': [
    {
      id: 'wc1', type: 'mcq', level: 'B1',
      question: '"Je suis en stage" signifie :',
      options: ['I am on stage', 'I am on an internship', 'I am on vacation', 'I am promoted'],
      correct: 1,
      explanation: '"Un stage" in French means an internship, not a stage (which is "une scène").',
    },
    {
      id: 'wc2', type: 'fill', level: 'B1',
      question: 'J\'ai envoyé mon _____ et ma lettre de motivation. (I sent my resume and cover letter)',
      answer: 'CV',
      hint: 'Abbreviation for curriculum vitae',
      explanation: 'In French, "CV" (curriculum vitae) is used for resume.',
    },
    {
      id: 'wc3', type: 'vocab', level: 'B1',
      word: 'Un entretien d\'embauche',
      meaning: 'A job interview',
      context: 'J\'ai un entretien d\'embauche demain matin.',
      contextTranslation: 'I have a job interview tomorrow morning.',
    },
    {
      id: 'wc4', type: 'pronunciation', level: 'B1',
      text: 'Je cherche un emploi à temps plein dans le domaine du marketing.',
      translation: 'I am looking for a full-time job in marketing.',
      phonetic: 'ʒə ʃɛʁʃ ɛ̃n ɑ̃plwa a tɑ̃ plɛ̃ dɑ̃ lə domɛn dy maʁkɛtiŋ',
    },
  ],
  environment: [
    {
      id: 'env1', type: 'mcq', level: 'B2',
      question: 'Que signifie "le réchauffement climatique" ?',
      options: ['Air pollution', 'Global warming', 'Deforestation', 'Water scarcity'],
      correct: 1,
      explanation: '"Le réchauffement climatique" = global warming. "Réchauffement" = warming.',
    },
    {
      id: 'env2', type: 'fill', level: 'B2',
      question: 'Il faut réduire notre _____ carbone. (We must reduce our carbon footprint)',
      answer: 'empreinte',
      hint: 'Noun meaning "footprint"',
      explanation: '"Empreinte carbone" = carbon footprint.',
    },
    {
      id: 'env3', type: 'vocab', level: 'B2',
      word: 'Le développement durable',
      meaning: 'Sustainable development',
      context: 'Le développement durable est essentiel pour les générations futures.',
      contextTranslation: 'Sustainable development is essential for future generations.',
    },
    {
      id: 'env4', type: 'pronunciation', level: 'B2',
      text: 'Les énergies renouvelables sont indispensables pour lutter contre le changement climatique.',
      translation: 'Renewable energies are essential to fight against climate change.',
      phonetic: 'lez eneʁʒi ʁənuvlabl sɔ̃t ɛ̃dispɑ̃sabl puʁ lyte kɔ̃tʁ lə ʃɑ̃ʒmɑ̃ klimatik',
    },
  ],
  'politics-society': [
    {
      id: 'ps1', type: 'mcq', level: 'B2',
      question: '"La liberté, l\'égalité, la fraternité" est :',
      options: ['A French song', 'The French national motto', 'A French proverb', 'A political party slogan'],
      correct: 1,
      explanation: 'Liberty, Equality, Fraternity is the national motto of France.',
    },
    {
      id: 'ps2', type: 'fill', level: 'B2',
      question: 'Le président de la République est élu pour _____ ans. (The president is elected for ___ years)',
      answer: 'cinq',
      hint: 'The number 5 in French',
      explanation: 'The French president serves a 5-year term (quinquennat).',
    },
    {
      id: 'ps3', type: 'vocab', level: 'B2',
      word: 'Le suffrage universel',
      meaning: 'Universal suffrage',
      context: 'En France, le suffrage universel a été établi en 1848.',
      contextTranslation: 'In France, universal suffrage was established in 1848.',
    },
  ],
  'arts-culture': [
    {
      id: 'ac1', type: 'mcq', level: 'B2',
      question: 'Qui a peint "La Joconde" (Mona Lisa) ?',
      options: ['Claude Monet', 'Léonard de Vinci', 'Pablo Picasso', 'Auguste Renoir'],
      correct: 1,
      explanation: '"La Joconde" was painted by Leonardo da Vinci (Léonard de Vinci in French).',
    },
    {
      id: 'ac2', type: 'fill', level: 'B2',
      question: 'Victor Hugo a écrit "Les _____". (Victor Hugo wrote "Les ___")',
      answer: 'Misérables',
      hint: 'Famous French novel about poverty and justice',
      explanation: '"Les Misérables" is one of the greatest French novels.',
    },
    {
      id: 'ac3', type: 'vocab', level: 'B2',
      word: 'Un chef-d\'œuvre',
      meaning: 'A masterpiece',
      context: 'Ce film est un véritable chef-d\'œuvre du cinéma français.',
      contextTranslation: 'This film is a true masterpiece of French cinema.',
    },
    {
      id: 'ac4', type: 'pronunciation', level: 'B2',
      text: 'L\'impressionnisme est un mouvement artistique né en France au XIXe siècle.',
      translation: 'Impressionism is an artistic movement born in France in the 19th century.',
      phonetic: 'lɛ̃pʁesjɔnism ɛt ɛ̃ muvmɑ̃ aʁtistik ne ɑ̃ fʁɑ̃s o diznœvjɛm sjɛkl',
    },
  ],
};

export function getQuestionsByTopic(topicId) {
  return QUESTIONS[topicId] || [];
}

export function getQuestionsByLevel(level) {
  const all = [];
  Object.values(QUESTIONS).forEach(qs => {
    qs.forEach(q => {
      if (q.level === level) all.push(q);
    });
  });
  return all;
}

export function getQuestionsByType(topicId, type) {
  const qs = QUESTIONS[topicId] || [];
  return qs.filter(q => q.type === type);
}

export function getAllQuestions() {
  const all = [];
  Object.values(QUESTIONS).forEach(qs => all.push(...qs));
  return all;
}

export default QUESTIONS;
